import Layout from "../components/Layout.tsx";
import ProductCard from "../components/ProductCard.tsx";

export default function Products() {
  const soilConditioners = [
    {
      name: "QL Eco Green Organomineral Soil Conditioner",
      description:
        "Advanced soil conditioning technology that improves soil structure, water retention, and nutrient availability.",
      imageUrl:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Premium",
      badgeColor: "bg-primary-500",
      specifications: [
        { label: "Form", value: "Powder" },
        { label: "Color", value: "Dark Brown" },
        { label: "Application Rate", value: "0.5-2.5 kg/ha" },
      ],
    },
    {
      name: "Premium Topsoil Conditioner",
      description:
        "Specialized formula for improving topsoil quality and enhancing root development in crops.",
      imageUrl:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Popular",
      badgeColor: "bg-secondary-500",
      specifications: [
        { label: "Form", value: "Granular" },
        { label: "pH", value: "6.5-7.0" },
        { label: "Coverage", value: "1-3 acres/bag" },
      ],
    },
    {
      name: "Microbial Soil Enhancer",
      description:
        "Enriched with beneficial microorganisms to boost soil biological activity and nutrient cycling.",
      imageUrl:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "New",
      badgeColor: "bg-accent-500",
      specifications: [
        { label: "Microbes", value: "10⁸ CFU/g" },
        { label: "Storage", value: "Cool, Dry" },
        { label: "Shelf Life", value: "2 Years" },
      ],
    },
  ];

  const fertilizers = [
    {
      name: "NPK Complex Fertilizer",
      description:
        "Balanced nutrition with essential macro nutrients for all-season crop growth.",
      imageUrl:
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Best Seller",
      badgeColor: "bg-secondary-500",
      specifications: [
        { label: "N-P-K Ratio", value: "20-10-10" },
        { label: "Solubility", value: "Water Soluble" },
        { label: "Application", value: "Foliar/Root" },
      ],
    },
    {
      name: "Organic Compost Fertilizer",
      description:
        "100% organic nutrition derived from composted agricultural waste materials.",
      imageUrl:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Organic",
      badgeColor: "bg-green-500",
      specifications: [
        { label: "Organic Matter", value: "85%" },
        { label: "Moisture", value: "< 20%" },
        { label: "pH", value: "6.0-7.5" },
      ],
    },
    {
      name: "Liquid Nutrient Booster",
      description:
        "Fast-acting liquid fertilizer for rapid nutrient uptake and quick results.",
      imageUrl:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Fast Acting",
      badgeColor: "bg-accent-500",
      specifications: [
        { label: "Concentration", value: "High" },
        { label: "Application", value: "Foliar Spray" },
        { label: "Response Time", value: "3-5 days" },
      ],
    },
  ];

  const hybridSolutions = [
    {
      name: "Bio-Enhanced Soil Matrix",
      description:
        "Revolutionary combination of organic matter and mineral nutrients with beneficial microbes.",
      imageUrl:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Revolutionary",
      badgeColor: "bg-purple-500",
      specifications: [
        { label: "Organic + Mineral", value: "70:30" },
        { label: "Microbe Count", value: "10⁹ CFU/g" },
        { label: "Release Rate", value: "Controlled" },
      ],
    },
    {
      name: "Smart Release Fertilizer",
      description:
        "Intelligent nutrient delivery system that responds to soil and plant needs.",
      imageUrl:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      badge: "Smart Tech",
      badgeColor: "bg-blue-500",
      specifications: [
        { label: "Technology", value: "Smart Release" },
        { label: "Duration", value: "3-6 months" },
        { label: "Efficiency", value: "95%" },
      ],
    },
  ];

  return (
    <Layout
      title="Products - QL Eco Green | Agricultural Solutions"
      description="Explore QL Eco Green's comprehensive range of soil conditioners, fertilizers, and agricultural solutions."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed for sustainable
              farming and optimal crop productivity
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Product Navigation */}
      <section class="bg-primary-50 py-4 sticky top-[4.5rem] z-40">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex items-center justify-center space-x-8 overflow-x-auto">
            <a
              href="#soil-conditioner"
              class="product-nav-link px-4 py-2 rounded-lg font-medium text-primary-500 hover:bg-primary-100 transition-all duration-300 whitespace-nowrap"
            >
              <i class="fas fa-seedling mr-2"></i>Soil Conditioners
            </a>
            <a
              href="#fertilizers"
              class="product-nav-link px-4 py-2 rounded-lg font-medium text-primary-500 hover:bg-primary-100 transition-all duration-300 whitespace-nowrap"
            >
              <i class="fas fa-flask mr-2"></i>Fertilizers
            </a>
            <a
              href="#hybrid"
              class="product-nav-link px-4 py-2 rounded-lg font-medium text-primary-500 hover:bg-primary-100 transition-all duration-300 whitespace-nowrap"
            >
              <i class="fas fa-dna mr-2"></i>Hybrid Solutions
            </a>
            <a
              href="/downloads"
              class="product-nav-link px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-100 transition-all duration-300 whitespace-nowrap"
            >
              <i class="fas fa-download mr-2"></i>Catalogs
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Product Categories
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of specialized agricultural solutions
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-seedling text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-primary-500 mb-4">
                Soil Conditioners
              </h3>
              <p class="text-gray-600 mb-6">
                Advanced organomineral solutions for soil health improvement
              </p>
              <span class="text-primary-500 font-semibold">
                View Products →
              </span>
            </div>

            <div class="bg-gradient-to-br from-secondary-500/10 to-secondary-500/20 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-flask text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-secondary-500 mb-4">
                Fertilizers
              </h3>
              <p class="text-gray-600 mb-6">
                Nutritional solutions for enhanced plant growth and productivity
              </p>
              <span class="text-secondary-500 font-semibold">
                View Products →
              </span>
            </div>

            <div class="bg-gradient-to-br from-accent-500/10 to-accent-500/20 p-8 rounded-2xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-dna text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-accent-500 mb-4">
                Hybrid Solutions
              </h3>
              <p class="text-gray-600 mb-6">
                Innovative combinations of organic and mineral nutrients
              </p>
              <span class="text-accent-500 font-semibold">View Products →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Conditioner Products */}
      <section id="soil-conditioner" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Soil Conditioners
            </h2>
            <p class="text-xl text-gray-600">
              Revolutionary organomineral solutions for soil health
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soilConditioners.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                badge={product.badge}
                badgeColor={product.badgeColor}
                specifications={product.specifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fertilizers Section */}
      <section id="fertilizers" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Fertilizers</h2>
            <p class="text-xl text-gray-600">
              Complete nutrition for optimal plant growth
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fertilizers.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                badge={product.badge}
                badgeColor={product.badgeColor}
                specifications={product.specifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Solutions */}
      <section id="hybrid" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Hybrid Solutions
            </h2>
            <p class="text-xl text-gray-600">
              Next-generation agricultural innovations
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {hybridSolutions.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                badge={product.badge}
                badgeColor={product.badgeColor}
                specifications={product.specifications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to Choose Your Solution?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our experts to find the perfect product for your
            agricultural needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-phone"></i>
              <span>Contact Experts</span>
            </a>
            <a
              href="/downloads"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-download"></i>
              <span>Download Catalogs</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
