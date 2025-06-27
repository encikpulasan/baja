import Layout from "../components/Layout.tsx";
import BenefitCard from "../components/BenefitCard.tsx";

export default function About() {
  const coreValues = [
    {
      icon: "fas fa-leaf",
      title: "Sustainability",
      description:
        "Committed to environmentally responsible practices and long-term ecological health",
    },
    {
      icon: "fas fa-flask",
      title: "Innovation",
      description:
        "Continuously advancing agricultural science through research and development",
    },
    {
      icon: "fas fa-award",
      title: "Quality",
      description:
        "Delivering premium products that exceed expectations and industry standards",
    },
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description:
        "Committed to honest and transparent business practices in all our operations",
    },
    {
      icon: "fas fa-users",
      title: "Win-Win",
      description:
        "Creating mutually beneficial relationships with all stakeholders",
    },
    {
      icon: "fas fa-people-group",
      title: "Teamwork",
      description:
        "Collaborative approach to achieving excellence and innovation",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description:
        "Continuously advancing agricultural science through research and development",
    },
  ];

  return (
    <Layout
      title="About Us - QL Eco Green | Sustainable Agriculture Solutions"
      description="Learn about QL Eco Green's commitment to sustainable agriculture and innovative soil conditioning solutions."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About QL Eco Green
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering sustainable agriculture solutions for a healthier
              planet and more productive farming
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-16">
            <div class="space-y-8">
              <div>
                <h2 class="text-3xl font-bold text-primary-500 mb-4 flex items-center">
                  <i class="fas fa-bullseye text-4xl mr-4"></i>
                  Our Mission
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                  To create nourishing products from agro resources and bringing
                  benefits to everyone.
                </p>
              </div>

              <div>
                <h2 class="text-3xl font-bold text-primary-500 mb-4 flex items-center">
                  <i class="fas fa-eye text-4xl mr-4"></i>
                  Our Vision
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed">
                  To be the preferred global agro based enterprise.
                </p>
              </div>
            </div>

            <div class="relative">
              <img
                src="https://www.businesstoday.com.my/wp-content/uploads/2022/06/QL-resources.jpg"
                alt="Sustainable Agriculture"
                class="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent rounded-2xl">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded on the principles of innovation and sustainability
            </p>
          </div>

          <div class="space-y-16">
            <div class="grid md:grid-cols-2 gap-16 items-center">
              <div class="space-y-6">
                <h3 class="text-3xl font-bold text-primary-500">
                  The Beginning (2001)
                </h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                  QL Poultry Farms Sdn Bhd (QLPF) was established in 2001 as a
                  subsidiary of QL Resources Bhd (QL), a publicly listed company
                  on Bursa Malaysia. Through innovative thinking, cooperative
                  teamwork, and continuous improvement, we evolved into a
                  diversified agriculture group with three core operations:
                  marine product manufacturing, integrated livestock farming,
                  and oil palm plantations.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Agricultural Research"
                  class="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-16 items-center">
              <div class="md:order-2 space-y-6">
                <h3 class="text-3xl font-bold text-primary-500">
                  Advanced Technology (2017)
                </h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                  Since 2017, we adopted advanced automatic fermentation
                  technology, utilizing mechanized production to ensure
                  consistent and high-quality output. Our production process
                  undergoes a rigorous 21-day high-temperature treatment
                  (60-70°C), effectively eliminating bacteria, mold, and
                  unwanted weed seeds. QL Eco Green Organic Fertilizer is 100%
                  fermented using beneficial microorganisms (EM), ensuring an
                  odor-free product.
                </p>
                <p class="text-lg text-gray-600 leading-relaxed">
                  Today, QL is a leading integrated resource-based agriculture
                  group with over a billion ringgit in market capitalization. We
                  have won numerous recognition including the prestigious
                  "Outstanding Environmental Friendly Farm" from Malaysian
                  Livestock Industry Awards 2018, demonstrating our commitment
                  to sustainable and innovative farming practices.
                </p>
              </div>
              <div class="md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Modern Farming"
                  class="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                class="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i class={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 class="text-xl font-bold text-primary-500 mb-4">
                  {value.title}
                </h3>
                <p class="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Our Expert Team
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the agricultural scientists and experts behind our
              innovations
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div class="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Team Member"
                class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 class="text-xl font-bold text-primary-500 mb-2">
                Dr. Agricultural Scientist
              </h3>
              <p class="text-gray-600 mb-4">Chief Research Officer</p>
              <p class="text-sm text-gray-500">
                Leading our research initiatives in soil science and sustainable
                agriculture
              </p>
            </div>

            <div class="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b60c51a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Team Member"
                class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 class="text-xl font-bold text-primary-500 mb-2">
                Dr. Environmental Expert
              </h3>
              <p class="text-gray-600 mb-4">Sustainability Director</p>
              <p class="text-sm text-gray-500">
                Ensuring our products meet the highest environmental standards
              </p>
            </div>

            <div class="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                alt="Team Member"
                class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 class="text-xl font-bold text-primary-500 mb-2">
                Agricultural Consultant
              </h3>
              <p class="text-gray-600 mb-4">Field Applications Manager</p>
              <p class="text-sm text-gray-500">
                Providing expertise and support to farmers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have already discovered the benefits
            of QL Eco Green
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              class="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-leaf"></i>
              <span>View Products</span>
            </a>
            <a
              href="/contact"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i class="fas fa-phone"></i>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
