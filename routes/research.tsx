import Layout from "../components/Layout.tsx";

export default function Research() {
  const researchStats = [
    { number: "250+", label: "Field Trials" },
    { number: "15+", label: "University Partners" },
    { number: "50+", label: "Research Papers" },
    { number: "8", label: "Countries Studied" },
  ];

  const methodologySteps = [
    {
      step: 1,
      title: "Controlled Laboratory Testing",
      description:
        "Initial formulation testing under controlled conditions using standardized soil samples and precise measurement protocols.",
      color: "blue",
    },
    {
      step: 2,
      title: "Greenhouse Validation",
      description:
        "Multi-crop testing in controlled greenhouse environments with detailed monitoring of plant growth and soil chemistry changes.",
      color: "green",
    },
    {
      step: 3,
      title: "Small-Scale Field Trials",
      description:
        "Replicated field experiments across different soil types and climatic conditions with statistical analysis.",
      color: "purple",
    },
    {
      step: 4,
      title: "Commercial Farm Testing",
      description:
        "Large-scale validation on working farms with economic impact assessment and farmer feedback integration.",
      color: "orange",
    },
    {
      step: 5,
      title: "Peer Review & Publication",
      description:
        "Independent validation through peer-reviewed scientific journals and international conference presentations.",
      color: "red",
    },
  ];

  const yieldData = [
    { crop: "Rice", improvement: 38, width: 76 },
    { crop: "Palm Oil", improvement: 35, width: 70 },
    { crop: "Vegetables", improvement: 42, width: 84 },
    { crop: "Fruits", improvement: 32, width: 64 },
  ];

  const soilHealthData = [
    {
      value: "6.8",
      label: "Average pH",
      sublabel: "(from 5.2)",
      color: "blue",
    },
    {
      value: "3.2%",
      label: "Organic Matter",
      sublabel: "(from 1.8%)",
      color: "green",
    },
    {
      value: "85%",
      label: "Water Retention",
      sublabel: "(+25%)",
      color: "purple",
    },
    {
      value: "2.5x",
      label: "Microbial Activity",
      sublabel: "increased",
      color: "orange",
    },
  ];

  const researchPartners = [
    {
      name: "Universiti Putra Malaysia (UPM)",
      focus: "Soil Microbiology & Plant Nutrition",
      collaboration: "5 years",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Malaysian Agricultural Research and Development Institute (MARDI)",
      focus: "Field Trials & Crop Optimization",
      collaboration: "8 years",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Universiti Malaysia Sabah (UMS)",
      focus: "Tropical Agriculture Research",
      collaboration: "3 years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const publications = [
    {
      title:
        "Organomineral Fertilizers: Impact on Soil Health and Crop Productivity",
      journal: "Journal of Sustainable Agriculture",
      year: "2024",
      authors: "Dr. Ahmad Hassan, Dr. Sarah Lee",
      citations: 45,
    },
    {
      title: "Soil pH Optimization Using Natural Organic Conditioners",
      journal: "Soil Science International",
      year: "2023",
      authors: "Prof. Rahman Ibrahim, Dr. Li Wei",
      citations: 62,
    },
    {
      title:
        "Economic Impact of Sustainable Soil Management in Malaysian Agriculture",
      journal: "Agricultural Economics Review",
      year: "2023",
      authors: "Dr. Sarah Lee, Dr. Tan Seng Huat",
      citations: 38,
    },
  ];

  return (
    <Layout
      title="Research & Development - QL Eco Green | Science-Backed Solutions"
      description="15+ years of rigorous research, university partnerships, and field trials proving the effectiveness of our organomineral soil conditioning technology."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-white/10 backdrop-blur rounded-full px-6 py-2 mb-6">
              <i class="fas fa-microscope mr-2"></i>
              <span class="text-sm font-semibold">
                Scientific Research & Development
              </span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Science-Backed Solutions
            </h1>
            <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              15+ years of rigorous research, university partnerships, and field
              trials proving the effectiveness of our organomineral soil
              conditioning technology
            </p>

            <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {researchStats.map((stat, index) => (
                <div
                  key={index}
                  class="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
                >
                  <div class="text-3xl font-bold mb-2">{stat.number}</div>
                  <div class="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Methodology */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Our Research Methodology
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous scientific approach to validate and optimize our
              organomineral soil conditioning technology
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              {methodologySteps.map((step, index) => (
                <div
                  key={index}
                  class="methodology-step flex items-start space-x-4"
                >
                  <div
                    class={`w-12 h-12 bg-${step.color}-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p class="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div class="text-center">
              <img
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Research Laboratory"
                class="rounded-2xl shadow-2xl w-full"
              />
              <p class="text-sm text-gray-500 mt-4">
                MARDI Research Laboratory Partnership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Results */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Key Research Findings
            </h2>
            <p class="text-xl text-gray-600">
              Proven results across multiple parameters and crop types
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            {/* Yield Improvement Chart */}
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                Yield Improvement by Crop Type
              </h3>
              <div class="space-y-4">
                {yieldData.map((data, index) => (
                  <div key={index} class="chart-container">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-700 font-medium">{data.crop}</span>
                      <span class="text-green-600 font-bold">
                        +{data.improvement}%
                      </span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div
                        class="chart-bar bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={`width: ${data.width}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p class="text-sm text-gray-500 mt-4 text-center">
                Average yield increase across 250+ field trials
              </p>
            </div>

            {/* Soil Health Improvement */}
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                Soil Health Parameters
              </h3>
              <div class="grid grid-cols-2 gap-4">
                {soilHealthData.map((data, index) => (
                  <div
                    key={index}
                    class={`text-center p-4 bg-${data.color}-50 rounded-xl`}
                  >
                    <div
                      class={`text-3xl font-bold text-${data.color}-600 mb-2`}
                    >
                      {data.value}
                    </div>
                    <div class={`text-sm font-medium text-${data.color}-700`}>
                      {data.label}
                    </div>
                    <div class="text-xs text-gray-500">{data.sublabel}</div>
                  </div>
                ))}
              </div>
              <p class="text-sm text-gray-500 mt-4 text-center">
                Measured after 6 months of application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Partners */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Research Partners
            </h2>
            <p class="text-xl text-gray-600">
              Collaborating with leading universities and research institutions
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {researchPartners.map((partner, index) => (
              <div
                key={index}
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p class="text-gray-600 mb-4">{partner.focus}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">
                      <i class="fas fa-clock mr-1"></i>
                      {partner.collaboration} collaboration
                    </span>
                    <span class="text-primary-500 font-semibold text-sm">
                      Active Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Recent Publications
            </h2>
            <p class="text-xl text-gray-600">
              Peer-reviewed research validating our technology
            </p>
          </div>

          <div class="space-y-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div
                key={index}
                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-2">
                      {pub.title}
                    </h3>
                    <p class="text-gray-600 mb-2">
                      <span class="font-semibold">{pub.journal}</span> •{" "}
                      {pub.year}
                    </p>
                    <p class="text-sm text-gray-500 mb-3">{pub.authors}</p>
                    <div class="flex items-center space-x-4">
                      <span class="text-sm text-gray-500">
                        <i class="fas fa-quote-right mr-1"></i>
                        {pub.citations} citations
                      </span>
                      <a
                        href="#"
                        class="text-primary-500 font-semibold text-sm hover:text-primary-600"
                      >
                        Read Full Paper →
                      </a>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-file-alt text-primary-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="text-center mt-12">
            <a
              href="#"
              class="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <i class="fas fa-book mr-2"></i>
              View All Publications
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold mb-6">
            Partner with Our Research Team
          </h2>
          <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on agricultural research or accessing
            our scientific data?
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              class="bg-white text-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-handshake mr-2"></i>
              Research Partnership
            </a>
            <a
              href="/downloads"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-500 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-download mr-2"></i>
              Download Data
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
