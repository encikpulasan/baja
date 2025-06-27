import Layout from "../components/Layout.tsx";

export default function Downloads() {
  return (
    <Layout
      title="Downloads - QL Eco Green | Resources"
      description="Download technical guides and product catalogs"
    >
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Download Center
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our technical guides, product catalogs, and training
              materials
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <div class="text-center mb-6">
                <div class="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-book text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-primary-500 mb-2">
                  Product Catalog
                </h3>
                <p class="text-gray-600 text-sm">
                  Complete product specifications
                </p>
              </div>
              <button class="w-full bg-primary-500 text-white py-3 rounded-xl font-semibold">
                Download PDF
              </button>
            </div>

            <div class="bg-gradient-to-br from-secondary-500/10 to-secondary-500/20 p-8 rounded-2xl">
              <div class="text-center mb-6">
                <div class="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-tools text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-secondary-500 mb-2">
                  Application Guide
                </h3>
                <p class="text-gray-600 text-sm">Step-by-step instructions</p>
              </div>
              <button class="w-full bg-secondary-500 text-white py-3 rounded-xl font-semibold">
                Download PDF
              </button>
            </div>

            <div class="bg-gradient-to-br from-accent-500/10 to-accent-500/20 p-8 rounded-2xl">
              <div class="text-center mb-6">
                <div class="w-20 h-20 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-accent-500 mb-2">
                  Technical Data
                </h3>
                <p class="text-gray-600 text-sm">Research and specifications</p>
              </div>
              <button class="w-full bg-accent-500 text-white py-3 rounded-xl font-semibold">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
