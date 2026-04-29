export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Michelin Star Partnerships",
      description: "Trusted by over 200 Michelin-starred restaurants worldwide",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    },
    {
      title: "Custom Collaboration",
      description: "Bespoke knife sets designed for prestigious culinary institutions",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800",
    },
    {
      title: "Culinary Schools",
      description: "Official supplier to leading culinary academies across 15 countries",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    },
    {
      title: "Restaurant Chains",
      description: "Bulk supply partnerships with top restaurant groups",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Brand Portfolio</h2>
          <p className="text-xl text-gray-600">
            Trusted by culinary professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Interested in partnership opportunities?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("b2b");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Contact Our B2B Team
          </button>
        </div>
      </div>
    </section>
  );
}
