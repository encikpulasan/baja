import Layout from "../components/Layout.tsx";

export default function Training() {
  const trainingLevels = [
    {
      level: "Beginner Level",
      icon: "fas fa-seedling",
      color: "green",
      description:
        "Perfect for new farmers and those starting with organic fertilizers",
      duration: "4 Hours",
      topics: [
        "Product Introduction",
        "Basic Application",
        "Safety Guidelines",
      ],
      popular: false,
    },
    {
      level: "Intermediate Level",
      icon: "fas fa-chart-line",
      color: "blue",
      description: "Advanced techniques for experienced farmers",
      duration: "8 Hours",
      topics: [
        "Advanced Application",
        "Soil Testing",
        "Crop Optimization",
        "ROI Calculation",
      ],
      popular: true,
    },
    {
      level: "Expert Level",
      icon: "fas fa-trophy",
      color: "purple",
      description: "Professional certification and research methodologies",
      duration: "12 Hours",
      topics: [
        "Research Methods",
        "Trial Management",
        "Data Analysis",
        "Consultation Skills",
      ],
      popular: false,
    },
  ];

  const videoTutorials = [
    {
      title: "Soil Testing Basics",
      description: "Learn how to properly test your soil before application",
      duration: "12:34",
      level: "Beginner",
      views: "5,243",
      thumbnail:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Application Methods",
      description: "Different techniques for various crop types",
      duration: "18:22",
      level: "Intermediate",
      views: "3,891",
      thumbnail:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Monitoring & Results",
      description: "Track progress and measure success indicators",
      duration: "15:47",
      level: "Advanced",
      views: "2,156",
      thumbnail:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const applicationGuides = [
    {
      title: "Rice Cultivation Guide",
      description: "Complete guide for rice farming with soil conditioning",
      icon: "fas fa-seedling",
      color: "green",
      format: "PDF Format",
      downloads: "2.3k",
    },
    {
      title: "Palm Oil Optimization",
      description: "Maximize palm oil yields with proper soil management",
      icon: "fas fa-leaf",
      color: "orange",
      format: "PDF Format",
      downloads: "1.8k",
    },
    {
      title: "Vegetable Farming",
      description: "Best practices for various vegetable crops",
      icon: "fas fa-carrot",
      color: "purple",
      format: "PDF Format",
      downloads: "3.1k",
    },
    {
      title: "Fruit Orchards",
      description: "Comprehensive orchard management techniques",
      icon: "fas fa-apple-alt",
      color: "red",
      format: "PDF Format",
      downloads: "1.5k",
    },
  ];

  return (
    <Layout
      title="Training & Education - QL Eco Green | Learn Sustainable Farming"
      description="Comprehensive training programs and resources for sustainable farming practices using QL Eco Green organic fertilizers and soil conditioners."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-graduation-cap text-blue-500 mr-2"></i>
              <span class="text-sm font-semibold text-blue-600">
                Education & Training
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Sustainable Farming
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the art of organic farming with our comprehensive training
              programs, video tutorials, and practical application guides
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#training-programs"
                class="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <i class="fas fa-play mr-2"></i>
                Start Learning
              </a>
              <a
                href="#video-tutorials"
                class="bg-white text-primary-500 px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary-500 hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center"
              >
                <i class="fas fa-video mr-2"></i>
                Watch Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Training Programs
            </h2>
            <p class="text-xl text-gray-600">
              Choose the right program for your experience level
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {trainingLevels.map((program, index) => (
              <div
                key={index}
                class={`bg-gradient-to-br from-${program.color}-50 to-${program.color}-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative ${
                  program.popular ? "transform scale-105" : ""
                }`}
              >
                {program.popular && (
                  <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <div
                  class={`w-16 h-16 bg-${program.color}-500 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <i class={`${program.icon} text-white text-2xl`}></i>
                </div>

                <h3
                  class={`text-2xl font-bold text-${program.color}-700 mb-4 text-center`}
                >
                  {program.level}
                </h3>

                <p class="text-gray-600 mb-6 text-center">
                  {program.description}
                </p>

                <ul class="space-y-3 text-gray-600 mb-6">
                  {program.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} class="flex items-center">
                      <i class={`fas fa-check text-${program.color}-500 mr-2`}>
                      </i>
                      {topic}
                    </li>
                  ))}
                </ul>

                <div class="text-center">
                  <div
                    class={`text-lg font-bold text-${program.color}-700 mb-2`}
                  >
                    {program.duration}
                  </div>
                  <div class="text-sm text-gray-600 mb-6">Duration</div>

                  <button
                    class={`w-full bg-${program.color}-500 text-white py-3 rounded-xl font-semibold hover:bg-${program.color}-600 transition-colors`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section id="video-tutorials" class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Video Tutorials
            </h2>
            <p class="text-xl text-gray-600">
              Step-by-step visual guides for effective application
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTutorials.map((video, index) => (
              <div
                key={index}
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    class="w-full h-48 object-cover"
                  />
                  <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <i class="fas fa-play text-white text-4xl"></i>
                  </div>
                  <div class="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p class="text-gray-600 text-sm mb-4">{video.description}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-500">{video.level}</span>
                    <span class="text-xs text-gray-500">
                      {video.views} views
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="text-center mt-12">
            <a
              href="#"
              class="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <i class="fas fa-play"></i>
              <span>View All Tutorials</span>
            </a>
          </div>
        </div>
      </section>

      {/* Application Guides */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Application Guides
            </h2>
            <p class="text-xl text-gray-600">
              Detailed guides for different crops and conditions
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div class="space-y-6">
              {applicationGuides.map((guide, index) => (
                <div
                  key={index}
                  class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div class="flex items-start space-x-4">
                    <div
                      class={`w-12 h-12 bg-${guide.color}-500 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <i class={`${guide.icon} text-white`}></i>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-lg font-bold text-gray-900 mb-2">
                        {guide.title}
                      </h3>
                      <p class="text-gray-600 mb-4">{guide.description}</p>
                      <div class="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          <i class="fas fa-file-pdf mr-1"></i>
                          {guide.format}
                        </span>
                        <span>
                          <i class="fas fa-download mr-1"></i>
                          {guide.downloads} downloads
                        </span>
                      </div>
                    </div>
                    <button class="bg-primary-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div class="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">
                Training Benefits
              </h3>

              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Improved Crop Yields
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Learn techniques that can increase your harvest by up to
                      40%
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Cost Reduction
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Optimize fertilizer usage and reduce overall farming costs
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Soil Health
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Maintain and improve long-term soil sustainability
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-check text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-1">
                      Expert Support
                    </h4>
                    <p class="text-gray-600 text-sm">
                      Access to agricultural scientists and ongoing consultation
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <a
                  href="/contact"
                  class="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center w-full justify-center"
                >
                  <i class="fas fa-phone mr-2"></i>
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have transformed their agricultural
            practices with our training programs
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#training-programs"
              class="bg-white text-primary-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-graduation-cap mr-2"></i>
              Enroll Now
            </a>
            <a
              href="/contact"
              class="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-500 transition-all duration-300 inline-flex items-center justify-center"
            >
              <i class="fas fa-phone mr-2"></i>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
