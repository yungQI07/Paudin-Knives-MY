import { useState } from "react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

export default function PartnerWithUs() {
  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4fea3a28`;
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/b2b-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you! Our B2B team will contact you within 24 hours.");
        setFormData({ company: "", name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to submit inquiry");
      }
    } catch (error) {
      console.error("Error submitting B2B inquiry:", error);
      toast.error("Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Interested in being a distributor or expanding your own business?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thank you for your interest in cooperating with Paudin. We welcome all companies which can be successful representatives of the Paudin brand or look for professional assistance in launching their own cutlery business.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://paudinpro.com/cdn/shop/files/1_db15d44a-448d-4669-ae82-890682420dd4_2000x.jpg?v=1615363050"
                alt="Paudin manufacturing"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">To Become a Paudin Distributor</h2>
              <p className="text-gray-700 mb-6">
                If your company is searching for growth in cutlery market, then becoming a Distributor of Paudin products might give you the perfect opportunity to expand your business.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Here's what you get as a Distributor of Paudin products:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Attractive wholesale prices of Paudin products</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>High quality products with a guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Constantly evolving product lines and application of innovative methods in product development and design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Real-time support and full transparency</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">* Our Return Merchandise Authorization is less than 2%.</p>
                <p className="text-gray-700 font-semibold">Our factory's production capacity is 500 thousand pcs per month</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img
                src="https://paudinpro.com/cdn/shop/files/5_188c2740-9e27-4fb4-8a8c-d95baf41d724_2000x.jpg?v=1615518655"
                alt="Product design and development"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-6">To Use Paudin's Design & Production Service For Your Own Brand</h2>
              <p className="text-gray-700 mb-6">
                Paudin offers a wide range of services from developing a concept to delivery end-products. Whether your store is well established or opening soon, here's how we can help you in building your successful business:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Product design and prototyping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Raw material sourcing and production management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Quality control and detailed inspection service on all stages of production and shipment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Premium shipping and logistics solutions at competitive rates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Full confidentiality and real-time support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">We view our distributors not as our customers but as our partners</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://paudinpro.com/cdn/shop/files/3_e5fbf85a-b872-46b4-9fa4-2e7f5f365ca2_2000x.jpg?v=1615447787"
                alt="Paudin partnership"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Please contact us and we will help you to learn more about our possible cooperation. It will be very useful for us if you provide brief information about your experience in the cookware industry and your possible requirements.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your restaurant or organization"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="business@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
