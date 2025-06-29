import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import HeroSection from "../components/HeroSection.tsx";
import BenefitCard from "../components/BenefitCard.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render({ url: new URL(req.url) });
  },
};

export default function Home({ data }: PageProps<{ url: URL }>) {
  const soilBenefits = [
    {
      icon: "fas fa-compress-arrows-alt",
      title: "CEC",
      description: "Increases soil cation exchange capacity",
    },
    {
      icon: "fas fa-layer-group",
      title: "Soil Structure",
      description:
        "Enhances porosity, aggregation, and aeration for stronger plant establishment",
    },
    {
      icon: "fas fa-chart-line",
      title: "Enhanced Nutrient Availability",
      description: "Optimizes nutrient uptake for optimal plant growth",
    },
    {
      icon: "fas fa-tint",
      title: "Water Retention",
      description: "Increases water absorption and storage capacity",
    },
    {
      icon: "fas fa-microscope",
      title: "Microbial Activity",
      description: "Supports beneficial microorganisms and fertile soil",
    },
    {
      icon: "fas fa-balance-scale",
      title: "pH Balancing",
      description: "Balances soil pH naturally for optimal growing conditions",
    },
    {
      icon: "fas fa-recycle",
      title: "Erosion and Compaction Control",
      description:
        "Prevents erosion and compaction for stronger, more stable soil",
    },
    {
      icon: "fas fa-heart",
      title: "Soil Health",
      description:
        "Promotes long-term soil health and sustainable plant establishment",
    },
  ];

  const plantBenefits = [
    {
      icon: "fas fa-arrow-up",
      title: "Increased Growth",
      description: "Accelerates plant growth and development",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Disease Resistance",
      description: "Enhances plant immunity and disease resistance",
    },
    {
      icon: "fas fa-leaf",
      title: "Improved Vigor",
      description: "Promotes healthier, more vigorous plant growth",
    },
  ];

  return (
    <Layout
      title="QL Eco Green - Premium Soil Conditioner | Healthy Farming Solutions"
      description="QL Eco Green Organomineral Soil Conditioner - Innovative soil health solutions for sustainable agriculture and optimal plant growth."
      url={data.url}
    >
      {/* Hero Section */}
      <HeroSection
        title="Healthy Farming. Healthy Living."
        subtitle="Only with QL"
        description="Revolutionary organomineral soil conditioner designed to transform your soil health and maximize crop productivity with sustainable farming practices."
        primaryButton={{
          text: "Explore Products",
          href: "/products",
          icon: "fas fa-leaf",
        }}
        secondaryButton={{
          text: "Contact Us",
          href: "/contact",
          icon: "fas fa-phone",
        }}
        imageUrl="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
      />

      {/* Professional Tagline Section */}
      <section class="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Malaysia's Trusted Soil Health Partner
          </h2>
          <p class="text-xl text-white/90 max-w-3xl mx-auto">
            Leading organomineral soil conditioner manufacturer dedicated to
            sustainable agriculture and optimal crop productivity across
            Malaysia
          </p>
          <div class="flex justify-center items-center space-x-8 mt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-white">2018</div>
              <div class="text-white/80">Established</div>
            </div>
            <div class="w-px h-12 bg-white/30"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">1000+</div>
              <div class="text-white/80">Satisfied Farmers</div>
            </div>
            <div class="w-px h-12 bg-white/30"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-white">100%</div>
              <div class="text-white/80">Sustainable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Product
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced soil conditioning technology for sustainable agriculture
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="relative">
              <div class="absolute top-5 left-5 bg-gradient-to-r from-accent-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm z-10">
                Premium Quality
              </div>
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="QL Soil Conditioner"
                class="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div class="space-y-8">
              <h3 class="text-3xl font-bold text-primary-500">
                QL Eco Green Organomineral Soil Conditioner
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                An innovative class of engineered amendments specifically
                designed to improve soil health, incorporating organic and
                mineral components for substantial agricultural benefits.
              </p>

              <div class="space-y-4">
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="font-medium text-gray-900">Product Name</span>
                  <span class="text-gray-600">Topsoil</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="font-medium text-gray-900">Category</span>
                  <span class="text-gray-600">Soil Conditioner</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="font-medium text-gray-900">
                    Improved Growth/Vigour
                  </span>
                  <span class="text-gray-600">Nitrogen-fixing bacteria</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="font-medium text-gray-900">
                    Application Color
                  </span>
                  <span class="text-gray-600">Dark Brown</span>
                </div>
                <div class="flex justify-between py-3 border-b border-gray-200">
                  <span class="font-medium text-gray-900">Fertilizer Form</span>
                  <span class="text-gray-600">Powder</span>
                </div>
              </div>

              <a
                href="/contact"
                class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-10 py-4 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <i class="fas fa-shopping-cart"></i>
                <span>Order Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Soil & Plant Benefits
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Scientifically proven advantages for sustainable agriculture
            </p>
          </div>

          {/* Soil Benefits */}
          <div class="mb-16">
            <h3 class="text-3xl font-bold text-primary-500 mb-8 flex items-center">
              <i class="fas fa-seedling text-4xl mr-4"></i>
              Benefits for Soil
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {soilBenefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>

          {/* Plant Benefits */}
          <div>
            <h3 class="text-3xl font-bold text-primary-500 mb-8 flex items-center">
              <i class="fas fa-leaf text-4xl mr-4"></i>
              Benefits for Plants
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plantBenefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Manufacturing Facility"
                class="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div class="space-y-8">
              <div>
                <h3 class="text-3xl font-bold text-primary-500 mb-4">
                  Advanced Production Capabilities
                </h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                  Our modern manufacturing facility in Pelabuhan Klang employs
                  cutting-edge technology and strict quality control measures to
                  produce consistent, high-quality organomineral soil
                  conditioners.
                </p>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-cogs text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      Automated Blending
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Precision blending systems ensuring consistent
                      formulations
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-microscope text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      Quality Laboratory
                    </h4>
                    <p class="text-gray-600 text-sm">
                      In-house testing for every batch produced
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-shield-alt text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      ISO Certified
                    </h4>
                    <p class="text-gray-600 text-sm">
                      ISO 9001:2015 quality management standards
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-leaf text-white"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      Eco-Friendly
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Sustainable manufacturing processes
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-primary-50 p-6 rounded-xl border border-primary-200">
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-primary-500">
                      5,000+
                    </div>
                    <div class="text-sm text-gray-600">Tons/Year Capacity</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary-500">24/7</div>
                    <div class="text-sm text-gray-600">Quality Control</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary-500">100%</div>
                    <div class="text-sm text-gray-600">Batch Testing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
