import { useState, useEffect } from "react";

export default function Awards() {
  const [shopeeReviewIndex, setShopeeReviewIndex] = useState(0);
  const [tiktokReviewIndex, setTiktokReviewIndex] = useState(0);

  const shopeeReviews = [
    "Excellent quality knives! Sharp and well-balanced. Highly recommend!",
    "Beautiful craftsmanship. These knives are a joy to use in the kitchen.",
    "Best purchase ever! Professional grade quality at great value.",
  ];

  const tiktokReviews = [
    "Amazing knives! The Damascus pattern is stunning and cuts perfectly.",
    "Fast delivery and premium quality. Worth every penny!",
    "These knives transformed my cooking experience. Love them!",
  ];

  useEffect(() => {
    const shopeeTimer = setInterval(() => {
      setShopeeReviewIndex((prev) => (prev + 1) % shopeeReviews.length);
    }, 4000);

    const tiktokTimer = setInterval(() => {
      setTiktokReviewIndex((prev) => (prev + 1) % tiktokReviews.length);
    }, 4500);

    return () => {
      clearInterval(shopeeTimer);
      clearInterval(tiktokTimer);
    };
  }, []);
  const awards = [
    {
      image: "/src/imports/NY_2025_Freya.jpg",
      year: "2025",
      title: "NY Product Design Awards",
      description: "Recognized for exceptional design innovation and craftsmanship in the cutlery category",
    },
    {
      image: "/src/imports/AGD_2025_Freya.jpg",
      year: "2025",
      title: "A' Design Award",
      description: "Gold winner for outstanding product design excellence and innovation",
    },
    {
      image: "/src/imports/LDA_2025_Freya.jpg",
      year: "2025",
      title: "London Design Awards",
      description: "Celebrated for superior design quality and aesthetic excellence",
    },
    {
      image: "/src/imports/MUSE_2023_Plume_Luxe_page-0001.jpg",
      year: "2023",
      title: "MUSE Design Awards",
      description: "Platinum winner for the Plume Luxe collection showcasing creative excellence",
    },
  ];

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-xl text-gray-600">
            Celebrating excellence in design and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border-2 border-gray-200 hover:border-gray-900 transition-colors flex flex-col"
            >
              <div className="mb-4 overflow-hidden rounded-lg h-64 flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-sm text-gray-500 mb-2">{award.year}</div>
              <h3 className="text-xl font-bold mb-2 min-h-[3.5rem]">{award.title}</h3>
              <p className="text-gray-600">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-white rounded-lg p-8 bg-[#ffffff]">
          <h3 className="text-2xl font-bold mb-8 text-center text-[#0a0a0a]">
            Customer Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-[#0a0a0a]">Shopee Shop</h4>
              <div className="flex justify-center space-x-1 mb-4">
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
              </div>
              <div className="h-16 mb-4 flex items-center justify-center">
                <p className="italic transition-opacity duration-1000 text-[#0a0a0a]">
                  "{shopeeReviews[shopeeReviewIndex]}"
                </p>
              </div>
              <a
                href="https://shopee.com.my/mcrk14pd0f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0A0A0A] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Visit Shopee Store
              </a>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-[#0a0a0a]">TikTok Shop</h4>
              <div className="flex justify-center space-x-1 mb-4">
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
                <img src="/src/imports/OIP.jpg" alt="star" className="w-6 h-6" />
              </div>
              <div className="h-16 mb-4 flex items-center justify-center">
                <p className="italic transition-opacity duration-1000 text-[#0a0a0a]">
                  "{tiktokReviews[tiktokReviewIndex]}"
                </p>
              </div>
              <a
                href="https://www.tiktok.com/@paudin.my"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0A0A0A] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Visit TikTok Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
