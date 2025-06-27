import Layout from "../components/Layout.tsx";
import FAQSection from "../islands/FAQSection.tsx";

export default function FAQ() {
  return (
    <Layout
      title="FAQ - QL Eco Green | Frequently Asked Questions"
      description="Find answers to frequently asked questions about QL Eco Green soil conditioners, application methods, and agricultural solutions."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-primary-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-question-circle text-primary-500 mr-2"></i>
              <span class="text-sm font-semibold text-primary-600">
                Frequently Asked Questions
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How Can We Help You?
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our soil
              conditioners, application methods, and agricultural solutions
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FAQSection />

      {/* Still Have Questions */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team of agricultural experts is here to help with personalized
            solutions
          </p>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <i class="fas fa-phone text-4xl text-white mb-4"></i>
              <h3 class="text-xl font-bold text-white mb-2">Phone Support</h3>
              <p class="text-white/80 mb-4">Speak with our experts directly</p>
              <a
                href="tel:+60675877377"
                class="text-white font-semibold hover:text-primary-100 transition-colors"
              >
                +606-758 7377
              </a>
            </div>

            <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <i class="fas fa-envelope text-4xl text-white mb-4"></i>
              <h3 class="text-xl font-bold text-white mb-2">Email Support</h3>
              <p class="text-white/80 mb-4">Get detailed technical answers</p>
              <a
                href="mailto:qlecogreen@ql.com.my"
                class="text-white font-semibold hover:text-primary-100 transition-colors"
              >
                qlecogreen@ql.com.my
              </a>
            </div>

            <div class="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <i class="fas fa-comments text-4xl text-white mb-4"></i>
              <h3 class="text-xl font-bold text-white mb-2">Live Chat</h3>
              <p class="text-white/80 mb-4">Instant support available</p>
              <button class="text-white font-semibold hover:text-primary-100 transition-colors">
                Start Chat
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-paper-plane"></i>
              <span>Contact Us</span>
            </a>
            <a
              href="/training"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-graduation-cap"></i>
              <span>Book Training</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p class="text-lg text-gray-600">
              Additional resources to help you succeed
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/products"
              class="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <i class="fas fa-leaf text-3xl text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              </i>
              <h3 class="text-lg font-semibold text-primary-600 mb-2">
                Product Catalog
              </h3>
              <p class="text-sm text-gray-600">
                Browse our full range of products
              </p>
            </a>

            <a
              href="/downloads"
              class="bg-gradient-to-br from-secondary-500/10 to-secondary-500/20 p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <i class="fas fa-download text-3xl text-secondary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              </i>
              <h3 class="text-lg font-semibold text-secondary-600 mb-2">
                Downloads
              </h3>
              <p class="text-sm text-gray-600">
                Technical guides and brochures
              </p>
            </a>

            <a
              href="/research"
              class="bg-gradient-to-br from-accent-500/10 to-accent-500/20 p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <i class="fas fa-microscope text-3xl text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              </i>
              <h3 class="text-lg font-semibold text-accent-600 mb-2">
                Research
              </h3>
              <p class="text-sm text-gray-600">Scientific studies and trials</p>
            </a>

            <a
              href="/training"
              class="bg-gradient-to-br from-green-500/10 to-green-500/20 p-6 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <i class="fas fa-graduation-cap text-3xl text-green-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              </i>
              <h3 class="text-lg font-semibold text-green-600 mb-2">
                Training
              </h3>
              <p class="text-sm text-gray-600">
                Learn proper application techniques
              </p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
