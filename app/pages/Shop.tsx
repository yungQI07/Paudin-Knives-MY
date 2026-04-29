import { useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import { fetchAllProducts, convertShopifyProductToApp } from "../../utils/shopify";

interface OutletContext {
  addToCart: (product: { id: string; name: string; price: number; image: string; variantId?: string }, quantity: number) => void;
}

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  collection: string;
  price: number;
  handle: string;
  variantId: string;
}

export default function Shop() {
  const { addToCart } = useOutletContext<OutletContext>();
  const [selectedCollection, setSelectedCollection] = useState("All Collections");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const productsPerPage = 12;

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const shopifyProducts = await fetchAllProducts();
      const convertedProducts = shopifyProducts.map(convertShopifyProductToApp);
      setProducts(convertedProducts);
      setLoading(false);
    }
    loadProducts();
  }, []);

  // Fallback products for development/testing
  const fallbackProducts: Product[] = [
    {
      id: "cloud-premium-chef-8",
      name: "Cloud Premium 8\" Chef's Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      description: "Professional 8-inch chef knife for versatile kitchen tasks",
      collection: "Cloud Premium",
      price: 299,
      handle: "cloud-premium-chef-8",
      variantId: "",
    },
    {
      id: "cloud-premium-bread-8",
      name: "Cloud Premium 8\" Bread Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/df934629bff53d23144ad8a1af3b7277b70dd8e6.png",
      description: "Serrated blade perfect for slicing bread and pastries",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      id: "cloud-premium-santoku-7",
      name: "Cloud Premium 7\" Santoku Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/bb29f25d46a0a408be6b5d7072e0b2f97adfd07d.png",
      description: "Japanese-style knife ideal for precise vegetable cuts",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      id: "cloud-premium-cleaver-7",
      name: "Cloud Premium 7\" Cleaver Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/347c78816d5b8f3297a9e4556aca22b5290fa743.png",
      description: "Heavy-duty cleaver for cutting through meat and bones",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      id: "cloud-premium-carving-8",
      name: "Cloud Premium 8\" Carving Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/c948f427e5deb997ba21c7781f0bdb949d672a5d.png",
      description: "Long slicing knife perfect for roasts and poultry",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      id: "ultra-dark-chef-8",
      name: "Ultra Dark 8\" Chef's Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Premium Damascus steel with stunning dark finish",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      id: "ultra-dark-santoku-7",
      name: "Ultra Dark 7\" Santoku Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Dark Damascus steel with exceptional edge retention",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      id: "ultra-dark-bread-8",
      name: "Ultra Dark 8\" Bread Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Serrated dark blade for clean, precise slicing",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      id: "agate-chef-8",
      name: "Agate 8\" Chef's Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Elegant design inspired by natural agate patterns",
      collection: "Agate",
      price: 299,
    },
    {
      id: "agate-santoku-7",
      name: "Agate 7\" Santoku Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Beautiful agate-pattern blade with superior sharpness",
      collection: "Agate",
      price: 299,
    },
    {
      id: "agate-utility-5",
      name: "Agate 5\" Utility Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Compact utility knife with striking agate finish",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 6\" Boning Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      description: "Flexible blade perfect for deboning meat and fish",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 5\" Paring Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Precision knife for detailed cutting and peeling",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 8\" Carving Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Long slicing blade with elegant agate design",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 5\" Utility Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/bb29f25d46a0a408be6b5d7072e0b2f97adfd07d.png",
      description: "Versatile mid-size knife for everyday tasks",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 7\" Cleaver Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Robust cleaver with dark Damascus finish",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 7\" Bread Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Serrated agate blade for perfect bread slicing",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 10\" Slicing Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/c948f427e5deb997ba21c7781f0bdb949d672a5d.png",
      description: "Extra-long blade for large roasts and meats",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 6\" Utility Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Mid-range utility knife with dark finish",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 6\" Boning Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Flexible boning knife with agate pattern",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 3.5\" Paring Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      description: "Small precision knife for delicate work",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 8\" Carving Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Premium carving knife with dark Damascus steel",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 3.5\" Paring Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Small precision blade with agate design",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 9\" Fillet Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/df934629bff53d23144ad8a1af3b7277b70dd8e6.png",
      description: "Flexible fillet knife for fish preparation",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 10\" Slicing Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Long slicing blade with dark Damascus pattern",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 9\" Carving Fork",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Matching carving fork with agate finish",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 7\" Nakiri Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/347c78816d5b8f3297a9e4556aca22b5290fa743.png",
      description: "Japanese vegetable knife with straight blade",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 7\" Nakiri Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Dark Damascus vegetable knife for precise cuts",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 10\" Chef's Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Large chef knife with stunning agate pattern",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 6\" Chef's Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/6c4f5d85b210276f4bcc0add161a303edec95dab.png",
      description: "Compact chef knife for smaller hands",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 9\" Fillet Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Flexible dark blade for fish filleting",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 7\" Nakiri Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Vegetable knife with elegant agate finish",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 8\" Gyuto Knife",
      image: "/src/imports/ECommerceWebsiteForChefKnives/bb29f25d46a0a408be6b5d7072e0b2f97adfd07d.png",
      description: "Japanese-style chef knife for all-purpose use",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 6\" Boning Knife",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Flexible boning knife with dark finish",
      collection: "Ultra Dark",
      price: 299,
    },
    {
      name: "Agate 6\" Utility Knife",
      image: "/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg",
      description: "Medium utility knife with agate pattern",
      collection: "Agate",
      price: 299,
    },
    {
      name: "Cloud Premium 12\" Slicer",
      image: "/src/imports/ECommerceWebsiteForChefKnives/c948f427e5deb997ba21c7781f0bdb949d672a5d.png",
      description: "Extra-long slicer for large cuts of meat",
      collection: "Cloud Premium",
      price: 299,
    },
    {
      name: "Ultra Dark 12\" Slicer",
      image: "/src/imports/IMG_1090_400x.jpg",
      description: "Long slicing knife with dark Damascus steel",
      collection: "Ultra Dark",
      price: 299,
    },
  ];

  const allProducts = products.length > 0 ? products : fallbackProducts;

  const filteredProducts = selectedCollection === "All Collections"
    ? allProducts
    : allProducts.filter(product => product.collection === selectedCollection);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCollectionChange = (collection: string) => {
    setSelectedCollection(collection);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Shop Our Collections</h1>
          <p className="text-xl text-gray-600">
            Discover our award-winning chef knife collections
          </p>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Our Products</h2>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.67} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <select
              value={selectedCollection}
              onChange={(e) => handleCollectionChange(e.target.value)}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>All Collections</option>
              <option>Ultra Dark</option>
              <option>Cloud Premium</option>
              <option>Agate</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {currentProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-gray-700">{product.name}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        variantId: product.variantId,
                      }, 1);
                    }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold"
                  >
                    Quick Add
                  </button>
                </div>
                <Link to={`/product/${product.id}`} className="block w-full bg-gray-900 text-center text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === pageNumber
                    ? 'bg-orange-500 text-white'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
