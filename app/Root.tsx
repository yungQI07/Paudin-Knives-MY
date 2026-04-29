import { Outlet } from "react-router";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Navigation from "./components/Navigation";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { projectId, publicAnonKey } from "/utils/supabase/info";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variantId?: string;
}

export default function Root() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4fea3a28`;

  const addToCart = (product: { id: string; name: string; price: number; image: string; variantId?: string }, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          variantId: product.variantId,
        },
      ];
    });
    toast.success(`${quantity} x ${product.name} added to cart`);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.success("Item removed from cart");
  };

  const handleCheckout = async (customerInfo: {
    name: string;
    email: string;
    phone: string;
  }) => {
    try {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const response = await fetch(`${serverUrl}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          items: cart,
          total,
          customerInfo,
        }),
      });

      if (response.ok) {
        toast.success("Order placed successfully! We'll contact you soon.");
        setCart([]);
        setIsCartOpen(false);
      } else {
        throw new Error("Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navigation
        cartCount={cartCount}
        cartItems={cart}
        onCartClick={() => setIsCartOpen(true)}
        removeFromCart={removeFromCart}
      />

      <Outlet context={{ addToCart }} />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MASTER KNIVES</h3>
              <p className="text-gray-400 mb-6">
                Crafting excellence since 2018. Award-winning professional chef knives
                trusted by culinary masters worldwide.
              </p>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/paudinknivesmalaysia/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/imports/toppng.com-white-instagram-icon-instagram-logo-instagram-instagram-icon-white-306x304.png" alt="Instagram" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                  <a href="https://www.tiktok.com/@paudinknivesmalaysia" target="_blank" rel="noopener noreferrer">
                    <img src="/src/imports/tik-tok-logo-42764.png" alt="TikTok" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img src="/src/imports/ClipartKey_382390.png" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                  <a href="https://shopee.com.my/mcrk14pd0f" target="_blank" rel="noopener noreferrer">
                    <img src="/src/imports/1656181355shopee-icon-white.png" alt="Shopee" className="w-8 h-8 hover:opacity-80 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/shop" className="block text-gray-400 hover:text-white">
                  Shop
                </a>
                <a href="/our-story" className="block text-gray-400 hover:text-white">
                  Our Story
                </a>
                <a href="/reviews-awards" className="block text-gray-400 hover:text-white">
                  Awards
                </a>
                <a href="/use-care" className="block text-gray-400 hover:text-white">
                  Use & Care
                </a>
                <a href="/partner-with-us" className="block text-gray-400 hover:text-white">
                  Partner With Us
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>malaysia@paudinpro.com</p>
                <p>+60 19 504 8068</p>
                <p>Kuching, Sarawak, Malaysia</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Master Knives. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ShoppingCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
