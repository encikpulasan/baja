import Layout from "../components/Layout.tsx";

export default function ProjectOverview() {
  const projectStats = [
    {
      number: "8",
      label: "Professional Pages",
      description: "Complete website structure",
    },
    { number: "3", label: "Languages", description: "Market Reach Expansion" },
    {
      number: "24/7",
      label: "Availability",
      description: "Global accessibility",
    },
    {
      number: "100%",
      label: "Mobile Responsive",
      description: "All device compatibility",
    },
  ];

  const deliveredSolutions = [
    {
      title: "Homepage",
      description:
        "Organic fertilizer showcase with clear benefits and testimonials",
      icon: "fas fa-home",
      color: "primary",
    },
    {
      title: "About Us",
      description: "Company story, why choose us, branches in Sabah & Sarawak",
      icon: "fas fa-building",
      color: "blue",
    },
    {
      title: "Products",
      description: "Organic fertilizer catalog with benefits & testimonials",
      icon: "fas fa-seedling",
      color: "green",
    },
    {
      title: "Technology",
      description: "Tunnel technology, compost tower & quality control process",
      icon: "fas fa-industry",
      color: "purple",
    },
    {
      title: "News",
      description: "Organic farming trends & global statistics",
      icon: "fas fa-newspaper",
      color: "red",
    },
    {
      title: "Contact",
      description: "Multiple locations including Sabah & Sarawak branches",
      icon: "fas fa-phone",
      color: "cyan",
    },
    {
      title: "FAQ",
      description: "Organic vs chemical questions & product guidance",
      icon: "fas fa-question-circle",
      color: "indigo",
    },
    {
      title: "Downloads",
      description: "Product catalogs, case studies & scientific data",
      icon: "fas fa-download",
      color: "teal",
    },
  ];

  const businessBenefits = {
    shortTerm: [
      "Professional brand credibility established",
      "24/7 product showcase availability",
      "Automated lead generation through contact forms",
      "Reduced customer inquiry response time",
      "WhatsApp integration for instant communication",
    ],
    longTerm: [
      "Search engine visibility improvement",
      "Customer education through content marketing",
      "Data-driven decision making with analytics",
      "Competitive advantage in organic fertilizer market",
      "Scalable platform for future business expansion",
    ],
  };

  const technicalFeatures = [
    {
      title: "Modern Framework",
      description:
        "Built with Fresh (Deno) for optimal performance and security",
      icon: "fas fa-code",
      benefits: ["Fast loading times", "SEO optimized", "Secure by default"],
    },
    {
      title: "Responsive Design",
      description:
        "Perfect user experience across all devices and screen sizes",
      icon: "fas fa-mobile-alt",
      benefits: [
        "Mobile-first approach",
        "Tablet optimization",
        "Desktop excellence",
      ],
    },
    {
      title: "Interactive Components",
      description: "Engaging user interactions with modern web technologies",
      icon: "fas fa-hand-pointer",
      benefits: ["Contact forms", "FAQ filtering", "Product galleries"],
    },
    {
      title: "Analytics Ready",
      description: "Built-in tracking capabilities for business insights",
      icon: "fas fa-chart-line",
      benefits: [
        "User behavior tracking",
        "Conversion measurement",
        "Performance monitoring",
      ],
    },
  ];

  return (
    <Layout
      title="Project Overview - QL Eco Green Website Development"
      description="Complete overview of the QL Eco Green website development project, including features, benefits, and technical specifications."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-6 py-2 mb-6">
              <i class="fas fa-rocket mr-2"></i>
              <span class="text-sm font-semibold">Project Overview</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Complete Digital Solution
            </h1>
            <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Professional organic fertilizer website showcasing QL Eco Green's
              innovative solutions with modern technology and user experience
            </p>

            <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {projectStats.map((stat, index) => (
                <div
                  key={index}
                  class="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                >
                  <div class="text-3xl font-bold mb-2">{stat.number}</div>
                  <div class="text-sm font-semibold mb-1">{stat.label}</div>
                  <div class="text-xs opacity-80">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Immediate Business Benefits
            </h2>
            <p class="text-xl text-gray-600">
              Tangible improvements to your business operations and market
              presence
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h4 class="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <i class="fas fa-rocket text-primary-500"></i>
                  <span>Short-term Impact (1-3 months)</span>
                </h4>
                <ul class="space-y-2 text-gray-700">
                  {businessBenefits.shortTerm.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <i class="fas fa-chart-bar text-primary-500"></i>
                  <span>Long-term Growth (6-12 months)</span>
                </h4>
                <ul class="space-y-2 text-gray-700">
                  {businessBenefits.longTerm.map((benefit, index) => (
                    <li key={index}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivered Solutions */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Complete Organic Fertilizer Website
            </h2>
            <p class="text-xl text-gray-600">
              8 professional pages showcasing organic fertilizer benefits &
              technology
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveredSolutions.map((solution, index) => (
              <div
                key={index}
                class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  class={`w-12 h-12 bg-${solution.color}-500 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <i class={`${solution.icon} text-white`}></i>
                </div>
                <h3 class="font-bold text-center mb-2">{solution.title}</h3>
                <p class="text-sm text-gray-600 text-center">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Technical Excellence
            </h2>
            <p class="text-xl text-gray-600">
              Modern web technologies ensuring optimal performance and user
              experience
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class={`${feature.icon} text-white`}></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p class="text-gray-600 mb-4">{feature.description}</p>
                    <ul class="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          class="text-sm text-gray-500 flex items-center"
                        >
                          <i class="fas fa-check text-primary-500 mr-2 text-xs">
                          </i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Master List */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Website Master List & Content Overview
            </h2>
            <p class="text-xl text-gray-600">
              Detailed breakdown of each page content and objectives
            </p>
          </div>

          <div class="space-y-8">
            {/* Homepage */}
            <div class="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl">
              <div class="flex items-start space-x-6">
                <div class="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-home text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    1. Homepage - Organic Fertilizer Showcase
                  </h3>
                  <div class="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Primary Objectives:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Showcase organic fertilizer products</li>
                        <li>• Display clear product benefits</li>
                        <li>• Feature customer testimonials</li>
                        <li>• Highlight 100% organic focus</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Key Content:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Hero section with core products</li>
                        <li>• Before/after case studies</li>
                        <li>• Meaningful statistics & data</li>
                        <li>• Why choose organic section</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Features:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Multi-language support</li>
                        <li>• Mobile responsive design</li>
                        <li>• WhatsApp integration</li>
                        <li>• CTA to product catalog</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Us */}
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div class="flex items-start space-x-6">
                <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-building text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    2. About Us - Company Differentiation
                  </h3>
                  <div class="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Primary Objectives:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Explain why choose QL Eco Green</li>
                        <li>• Showcase company expertise</li>
                        <li>• Highlight multi-branch presence</li>
                        <li>• Build trust & credibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Key Content:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Company history & mission</li>
                        <li>• Sabah & Sarawak branches</li>
                        <li>• Team expertise & certifications</li>
                        <li>• Awards & achievements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-2">
                        Features:
                      </h4>
                      <ul class="text-sm text-gray-700 space-y-1">
                        <li>• Interactive team section</li>
                        <li>• Branch location maps</li>
                        <li>• Company timeline</li>
                        <li>• Mission/vision showcase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Performance & Optimization
            </h2>
            <p class="text-xl text-gray-600">
              Built for speed, accessibility, and search engine optimization
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center p-6 bg-green-50 rounded-xl">
              <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-tachometer-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-green-600 mb-2">95+</h3>
              <div class="text-sm font-medium text-green-700">
                PageSpeed Score
              </div>
              <div class="text-xs text-gray-500 mt-1">Optimized loading</div>
            </div>

            <div class="text-center p-6 bg-blue-50 rounded-xl">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-search text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-blue-600 mb-2">100%</h3>
              <div class="text-sm font-medium text-blue-700">SEO Optimized</div>
              <div class="text-xs text-gray-500 mt-1">Search ready</div>
            </div>

            <div class="text-center p-6 bg-purple-50 rounded-xl">
              <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-purple-600 mb-2">A+</h3>
              <div class="text-sm font-medium text-purple-700">
                Security Rating
              </div>
              <div class="text-xs text-gray-500 mt-1">SSL & protection</div>
            </div>

            <div class="text-center p-6 bg-orange-50 rounded-xl">
              <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-universal-access text-white text-2xl"></i>
              </div>
              <h3 class="text-3xl font-bold text-orange-600 mb-2">WCAG</h3>
              <div class="text-sm font-medium text-orange-700">Accessible</div>
              <div class="text-xs text-gray-500 mt-1">All users welcome</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-6">Ready to Launch Your Success?</h2>
          <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Transform your agricultural business with our comprehensive digital
            solution
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              class="bg-white text-primary-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-home mr-2"></i>
              View Live Website
            </a>
            <a
              href="/contact"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-phone mr-2"></i>
              Get Started
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
