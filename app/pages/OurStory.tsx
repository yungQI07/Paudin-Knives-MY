import { useState } from "react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

export default function OurStory() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-4fea3a28`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${serverUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-center mb-16">Our Story</h1>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/imports/20250321105459_2000x.jpg"
                alt="Paudin craftsmanship"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-4">
                Started in 2017, Paudin has a small but highly motivated team whose efforts led Paudin to become the
                Top seller on Amazon with an exceedingly high rate of satisfied customers.
              </p>
              <p className="text-gray-700">
                Over 100,000 home cooks and professional chefs from the USA, the UK, Germany, France, and Japan already
                cook their favorite dishes with Paudin knives. Our constant aspiration is to provide outstanding kitchen
                knives at a fair price.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg md:order-2 px-[7px] py-[0px] mx-[88px] my-[0px]">
              <h2 className="text-3xl font-bold mb-6">Our Principles</h2>
              <p className="text-gray-700 mb-4">
                <strong>Rigorous Testing:</strong> We don't just test our knives for performance—we put them through
                real-world scenarios to ensure they meet the demands of professional kitchens and home cooks alike.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Quality Control:</strong> Every blade undergoes meticulous inspection to guarantee it meets our
                exacting standards for sharpness, balance, and durability.
              </p>
              <p className="text-gray-700">
                <strong>Supporting Our Community:</strong> We believe in giving back to the culinary community that has
                supported us, sharing knowledge and resources to help everyone become better cooks.
              </p>
            </div>
            <div className="md:order-1">
              <img
                src="/src/imports/IMG_3448_1000x.jpg"
                alt="Knife crafting process"
                className="w-full rounded-lg shadow-lg m-[0px]"
              />
            </div>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Elegant design that performs effortlessly. We believe that a great knife should not only look beautiful
              but also feel like a natural extension of your hand, making every cut precise and every cooking experience
              more enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/imports/1730974218825_1000x.jpg"
                alt="Award winning knives"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="prose prose-lg">
              <h2 className="text-3xl font-bold mb-6">Our Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We stand behind every product we make with a 100% satisfaction guarantee. If you're not completely
                satisfied with your Paudin knife, we'll make it right. No questions asked.
              </p>
              <p className="text-gray-700">
                Your trust in our craftsmanship is what drives us to continually improve and innovate. We're not just
                selling knives—we're building relationships with cooks who share our passion for culinary excellence.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-4">
              We invite you to share your experiences with us. Whether you're a professional chef creating culinary
              masterpieces or a home cook preparing meals for loved ones, we want to hear your story.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Tag us on social media, share your favorite recipes, and become part of a global community that celebrates
              the art of cooking. Together, we're making every meal an opportunity to create something extraordinary.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-center text-gray-600 mb-8">
            Have questions or want to learn more about our knives? We'd love to hear from you.
          </p>

          mx-[324px] my-[0px] <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your name"
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
                placeholder="your@email.com"
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
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
