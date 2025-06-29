import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import ContactForm from "../islands/ContactForm.tsx";

interface ContactData {
  success?: boolean;
  error?: string;
}

export const handler: Handlers<ContactData> = {
  GET(req, ctx) {
    return ctx.render({});
  },

  async POST(req, ctx) {
    try {
      const form = await req.formData();
      const name = form.get("name")?.toString();
      const email = form.get("email")?.toString();
      const phone = form.get("phone")?.toString();
      const company = form.get("company")?.toString();
      const message = form.get("message")?.toString();

      // Here you would typically send the email or save to database
      // For now, we'll just simulate success
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        company,
        message,
      });

      return ctx.render({ success: true });
    } catch (error) {
      return ctx.render({ error: "Failed to send message. Please try again." });
    }
  },
};

export default function Contact({ data }: PageProps<ContactData>) {
  const contactMethods = [
    {
      title: "Phone",
      icon: "fas fa-phone",
      details: ["+60 3-8945 6789", "+60 12-345 6789"],
      color: "blue",
    },
    {
      title: "Email",
      icon: "fas fa-envelope",
      details: ["info@qlecogreen.com", "sales@qlecogreen.com"],
      color: "green",
    },
    {
      title: "WhatsApp",
      icon: "fab fa-whatsapp",
      details: ["+60 12-345 6789", "Quick Response"],
      color: "green",
    },
    {
      title: "Address",
      icon: "fas fa-map-marker-alt",
      details: ["123 Green Valley", "Shah Alam, Selangor"],
      color: "red",
    },
  ];

  const offices = [
    {
      name: "Head Office - Selangor",
      address: "123 Green Valley, Shah Alam, 40150 Selangor, Malaysia",
      phone: "+60 3-8945 6789",
      email: "info@qlecogreen.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sabah Branch",
      address: "456 Agricultural Park, Kota Kinabalu, 88000 Sabah, Malaysia",
      phone: "+60 88-123 4567",
      email: "sabah@qlecogreen.com",
      hours: "Mon-Fri: 8:00 AM - 5:30 PM",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sarawak Branch",
      address: "789 Farming District, Kuching, 93000 Sarawak, Malaysia",
      phone: "+60 82-987 6543",
      email: "sarawak@qlecogreen.com",
      hours: "Mon-Fri: 8:00 AM - 5:30 PM",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <Layout
      title="Contact Us - QL Eco Green | Get in Touch"
      description="Contact QL Eco Green for organic fertilizer solutions. Multiple locations in Malaysia including Selangor, Sabah, and Sarawak branches."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-6 py-2 mb-6">
              <i class="fas fa-phone mr-2"></i>
              <span class="text-sm font-semibold">Get in Touch</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p class="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your farming with organic solutions? Our team
              of agricultural experts is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p class="text-gray-600">
              Choose your preferred method of communication
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                class="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div
                  class={`w-16 h-16 bg-${method.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i class={`${method.icon} text-white text-2xl`}></i>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                {method.details.map((detail, detailIndex) => (
                  <p key={detailIndex} class="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              {data?.success && (
                <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>
                    <span class="text-green-700 font-semibold">
                      Message sent successfully!
                    </span>
                  </div>
                  <p class="text-green-600 text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {data?.error && (
                <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div class="flex items-center">
                    <i class="fas fa-exclamation-circle text-red-500 mr-2"></i>
                    <span class="text-red-700 font-semibold">{data.error}</span>
                  </div>
                </div>
              )}

              <ContactForm />
            </div>

            {/* Company Info */}
            <div class="space-y-8">
              <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose QL Eco Green?
                </h3>

                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <i class="fas fa-leaf text-primary-500 mt-1"></i>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        100% Organic Solutions
                      </h4>
                      <p class="text-gray-600 text-sm">
                        Certified organic fertilizers and soil conditioners
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-users text-primary-500 mt-1"></i>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Expert Support
                      </h4>
                      <p class="text-gray-600 text-sm">
                        Agricultural scientists and field specialists
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-map-marked-alt text-primary-500 mt-1"></i>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Nationwide Coverage
                      </h4>
                      <p class="text-gray-600 text-sm">
                        Offices in Selangor, Sabah, and Sarawak
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <i class="fas fa-clock text-primary-500 mt-1"></i>
                    <div>
                      <h4 class="font-semibold text-gray-900">
                        Quick Response
                      </h4>
                      <p class="text-gray-600 text-sm">
                        24-hour response time guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-lg">
                <h4 class="font-bold text-gray-900 mb-4">Business Hours</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Monday - Friday</span>
                    <span class="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Saturday</span>
                    <span class="font-semibold">8:00 AM - 1:00 PM</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Sunday</span>
                    <span class="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p class="text-gray-600">Visit our offices across Malaysia</p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="h-48 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.name}
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-3">
                    {office.name}
                  </h3>

                  <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex items-start">
                      <i class="fas fa-map-marker-alt text-primary-500 mr-2 mt-1">
                      </i>
                      <span>{office.address}</span>
                    </div>

                    <div class="flex items-center">
                      <i class="fas fa-phone text-primary-500 mr-2"></i>
                      <span>{office.phone}</span>
                    </div>

                    <div class="flex items-center">
                      <i class="fas fa-envelope text-primary-500 mr-2"></i>
                      <span>{office.email}</span>
                    </div>

                    <div class="flex items-center">
                      <i class="fas fa-clock text-primary-500 mr-2"></i>
                      <span>{office.hours}</span>
                    </div>
                  </div>

                  <div class="mt-4 pt-4 border-t border-gray-200">
                    <a
                      href="#"
                      class="text-primary-500 font-semibold text-sm hover:text-primary-600"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p class="text-xl opacity-90 mb-8">
            Contact our agricultural experts today for personalized solutions
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fab fa-whatsapp mr-2"></i>
              WhatsApp Us
            </a>
            <a
              href="tel:+60389456789"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-phone mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
