import { Building2, Mail, Phone } from "lucide-react";
import { useState } from "react";

interface B2BContactProps {
  onSubmit: (inquiry: { company: string; name: string; email: string; message: string }) => void;
}

export default function B2BContact({ onSubmit }: B2BContactProps) {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ company: "", name: "", email: "", message: "" });
  };

  return (
    <section id="b2b" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">B2B Partnerships</h2>
          <p className="text-xl text-gray-600">
            Let's create something exceptional together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Custom Solutions</h4>
                  <p className="text-gray-600">
                    Tailored knife sets designed specifically for your establishment's needs
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Bulk Pricing</h4>
                  <p className="text-gray-600">
                    Competitive wholesale rates for restaurants, hotels, and culinary schools
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Dedicated Support</h4>
                  <p className="text-gray-600">
                    Personal account manager and priority customer service
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-700">
                <p>📧 malaysia@paudinpro.com</p>
                <p>📞 +60 19 504 8068</p>
                <p>🏢 Paudin Kitchen Sdn. Bhd.LinQ-uP Coworking Space TT3 Soho,1st Floor, TT3 Soho Commercial,Jalan Canna,93350 Kuching, Sarawak</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Request Information</h3>
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
    </section>
  );
}
