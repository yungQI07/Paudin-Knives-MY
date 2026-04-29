import { ShoppingCart, Menu, X, User, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import LoginModal from "./LoginModal";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface NavigationProps {
  cartCount: number;
  cartItems: CartItem[];
  onCartClick: () => void;
  removeFromCart: (id: string) => void;
}

export default function Navigation({ cartCount, cartItems, onCartClick, removeFromCart }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [region, setRegion] = useState<"malaysia" | "us">("malaysia");
  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/src/imports/Logo.jpg" alt="Master Knives" className="h-12" />
            </Link>

            <button
              onClick={() => {
                if (region === "malaysia") {
                  window.location.href = "https://paudinstore.com/";
                } else {
                  setRegion("malaysia");
                }
              }}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-900 transition-colors flex-shrink-0"
              title={region === "malaysia" ? "Switch to US Store" : "Switch to Malaysia Store"}
            >
              {region === "malaysia" ? (
                <img src="/src/imports/malaysia_5372845.png" alt="Malaysia" className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl">🇺🇸</span>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/our-story"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Our Story
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Shop
            </Link>
            <Link
              to="/use-care"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Use & Care
            </Link>
            <Link
              to="/reviews-awards"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Our Reviews & Awards
            </Link>
            <Link
              to="/partner-with-us"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Partner With Us
            </Link>
            <button
              onClick={() => setShowLoginModal(true)}
              className="p-2 text-gray-700 hover:text-gray-900"
              title="Login / Sign Up"
            >
              <User size={24} />
            </button>
            <div className="relative">
              <button
                onClick={onCartClick}
                onMouseEnter={() => setShowCartPreview(true)}
                onMouseLeave={() => setShowCartPreview(false)}
                className="relative p-2 text-gray-700 hover:text-gray-900"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart Preview Dropdown */}
              {showCartPreview && cartItems.length > 0 && (
                <div
                  onMouseEnter={() => setShowCartPreview(true)}
                  onMouseLeave={() => setShowCartPreview(false)}
                  className="absolute right-0 top-full pt-2 z-50"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Shopping Cart ({cartCount} items)</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex gap-3 items-start">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-contain bg-gray-50 rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            <p className="text-sm font-semibold text-gray-900">RM{item.price * item.quantity}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Remove from cart"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="font-bold text-lg text-gray-900">
                        RM{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                      </span>
                    </div>
                    <button
                      onClick={onCartClick}
                      className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                    >
                      View Cart & Checkout
                    </button>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={onCartClick}
                onMouseEnter={() => setShowCartPreview(true)}
                onMouseLeave={() => setShowCartPreview(false)}
                className="relative p-2 text-gray-700"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Cart Preview Dropdown */}
              {showCartPreview && cartItems.length > 0 && (
                <div
                  onMouseEnter={() => setShowCartPreview(true)}
                  onMouseLeave={() => setShowCartPreview(false)}
                  className="absolute right-0 top-full pt-2 z-50"
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">Shopping Cart ({cartCount} items)</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex gap-3 items-start">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-contain bg-gray-50 rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                            <p className="text-sm font-semibold text-gray-900">RM{item.price * item.quantity}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Remove from cart"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900">Total:</span>
                      <span className="font-bold text-lg text-gray-900">
                        RM{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                      </span>
                    </div>
                    <button
                      onClick={onCartClick}
                      className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                    >
                      View Cart & Checkout
                    </button>
                  </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/our-story"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Our Story
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Shop
              </Link>
              <Link
                to="/use-care"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Use & Care
              </Link>
              <Link
                to="/reviews-awards"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Our Reviews & Awards
              </Link>
              <Link
                to="/partner-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left text-gray-700 hover:text-gray-900 font-medium"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </nav>
  );
}
