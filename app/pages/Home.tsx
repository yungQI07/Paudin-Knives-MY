import Hero from "../components/Hero";
import KOLVideos from "../components/KOLVideos";
import Awards from "../components/Awards";
import Portfolio from "../components/Portfolio";
import B2BContact from "../components/B2BContact";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

export default function Home() {
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4fea3a28`;

  const handleB2BInquiry = async (inquiry: {
    company: string;
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      const response = await fetch(`${serverUrl}/b2b-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(inquiry),
      });

      if (response.ok) {
        toast.success("Thank you! Our B2B team will contact you within 24 hours.");
      } else {
        throw new Error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Error submitting B2B inquiry:", error);
      toast.error("Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <div>
      <Hero />

      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Top Seller</h2>
            <p className="text-xl text-gray-600">Crafted perfection for culinary excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/src/imports/IMG_1090_400x.jpg"
                  alt="Ultra Dark Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Ultra Dark Collection</h3>
                <div className="flex justify-center space-x-1 mb-4">
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                </div>
                <a href="/shop" className="block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold w-full">
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/src/imports/IMG_1037_afb46081-dbf6-4b11-8629-d4b9a4e36a0b_400x.jpg"
                  alt="Agate Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Agate Collection</h3>
                <div className="flex justify-center space-x-1 mb-4">
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                </div>
                <a href="/shop" className="block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold w-full">
                  Shop Now
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/src/imports/N_14_-NT1_400x.jpg"
                  alt="Universal Collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Universal Collection</h3>
                <div className="flex justify-center space-x-1 mb-4">
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                  <img src="/src/imports/OIP.jpg" alt="star" className="w-5 h-5" />
                </div>
                <a href="/shop" className="block bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-semibold w-full">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KOLVideos />
      <Awards />
      <Portfolio />
      <B2BContact onSubmit={handleB2BInquiry} />
    </div>
  );
}
