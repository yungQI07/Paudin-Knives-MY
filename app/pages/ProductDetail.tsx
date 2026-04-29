import { useState, useEffect } from "react";
import { useParams, Link, useOutletContext } from "react-router";
import { ShoppingCart } from "lucide-react";
import { fetchProductByHandle, convertShopifyProductToApp } from "../../utils/shopify";

interface Product {
  id: string;
  name: string;
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  collection: string;
  price: number;
  specifications: {
    bladeLength: string;
    totalLength: string;
    bladeMaterial: string;
    handleMaterial: string;
    weight: string;
    hardness: string;
  };
}

interface OutletContext {
  addToCart: (product: { id: string; name: string; price: number; image: string; variantId?: string }, quantity: number) => void;
}

const allProducts: Product[] = [
  {
    id: "cloud-premium-chef-8",
    name: "Cloud Premium 8\" Chef's Knife",
    image: "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
    images: [
      "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
    ],
    description: "Professional 8-inch chef knife for versatile kitchen tasks",
    fullDescription: "The Cloud Premium 8\" Chef's Knife is our flagship product, designed for professional chefs and home cooking enthusiasts. Featuring premium high-carbon stainless steel blade with exceptional edge retention and corrosion resistance. The ergonomic handle provides perfect balance and comfort during extended use.",
    collection: "Cloud Premium",
    price: 299,
    specifications: {
      bladeLength: "8 inches (20.3 cm)",
      totalLength: "13 inches (33 cm)",
      bladeMaterial: "High-Carbon Stainless Steel",
      handleMaterial: "Pakkawood",
      weight: "220g",
      hardness: "58-60 HRC",
    },
  },
  // Add more products as needed
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useOutletContext<OutletContext>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      if (!id) return;

      setLoading(true);
      const shopifyProduct = await fetchProductByHandle(id);

      if (shopifyProduct) {
        const converted = convertShopifyProductToApp(shopifyProduct);
        setProduct({
          ...converted,
          images: converted.images.length > 0 ? converted.images : [converted.image, converted.image, converted.image],
          fullDescription: shopifyProduct.description || converted.description,
          specifications: {
            bladeLength: "8 inches (20.3 cm)",
            totalLength: "13 inches (33 cm)",
            bladeMaterial: "High-Carbon Stainless Steel",
            handleMaterial: "Pakkawood",
            weight: "220g",
            hardness: "58-60 HRC",
          }
        });
      } else {
        setProduct(allProducts.find(p => p.id === id) || allProducts[0]);
      }

      setLoading(false);
    }
    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-16 min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop" className="text-gray-900 hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variantId: (product as any).variantId,
    }, quantity);
  };

  const relatedProducts = allProducts
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const reviews = [
    { name: "Sarah Chen", rating: 5, comment: "Absolutely fantastic knife! Sharp out of the box and feels great in hand.", date: "2 weeks ago" },
    { name: "Michael Rodriguez", rating: 5, comment: "Best knife I've ever owned. Worth every penny!", date: "1 month ago" },
    { name: "Emily Thompson", rating: 5, comment: "Professional quality at an amazing price. Highly recommend!", date: "2 months ago" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gray-900">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-gray-50 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">({reviews.length} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">RM{product.price}</div>

            <p className="text-gray-700 mb-8">{product.fullDescription}</p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center justify-center gap-2 mb-8"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* Features */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Premium high-carbon stainless steel blade</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Ergonomic handle for comfort and control</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exceptional edge retention</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Perfectly balanced design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-lg">
            <div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Blade Length</div>
                <div className="font-semibold">{product.specifications.bladeLength}</div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Total Length</div>
                <div className="font-semibold">{product.specifications.totalLength}</div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Weight</div>
                <div className="font-semibold">{product.specifications.weight}</div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Blade Material</div>
                <div className="font-semibold">{product.specifications.bladeMaterial}</div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Handle Material</div>
                <div className="font-semibold">{product.specifications.handleMaterial}</div>
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-600">Hardness</div>
                <div className="font-semibold">{product.specifications.hardness}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Care Instructions</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Hand wash with mild soap and warm water immediately after use</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Dry thoroughly with a soft cloth to prevent water spots</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Store in a knife block or on a magnetic strip to protect the blade</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Use a honing rod regularly to maintain the edge</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Sharpen with a whetstone when needed for optimal performance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Never put in the dishwasher</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.date}</div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping & Return Policy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Shipping & Returns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Shipping Information</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Free shipping on orders over RM500</li>
                <li>• Standard delivery: 3-5 business days</li>
                <li>• Express delivery available</li>
                <li>• Ships within Malaysia</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">Return Policy</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 30-day money-back guarantee</li>
                <li>• Free returns on all orders</li>
                <li>• Items must be unused and in original packaging</li>
                <li>• Full refund or exchange available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gray-50">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-sm">{relatedProduct.name}</h3>
                    <div className="text-lg font-bold text-gray-900">RM{relatedProduct.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
