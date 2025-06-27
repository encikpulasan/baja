import Layout from "../components/Layout.tsx";

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: "QL Eco Green Opens New Research & Development Facility",
      excerpt:
        "Our state-of-the-art R&D facility in Shah Alam is now operational, featuring advanced laboratories and greenhouse facilities for accelerated product development.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Company News",
      categoryColor: "bg-primary-500",
      date: "January 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Revolutionary Soil Health Study Shows 40% Yield Improvement",
      excerpt:
        "Latest comprehensive field trials demonstrate significant crop productivity gains using QL Eco Green's advanced organomineral soil conditioning technology across multiple crop varieties.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Research Update",
      categoryColor: "bg-blue-500",
      date: "December 15, 2024",
      readTime: "8 min read",
      featured: true,
    },
  ];

  const recentNews = [
    {
      id: 3,
      title: "Strategic Partnership with MARDI",
      excerpt:
        "Expanding research collaboration for sustainable agriculture development across Southeast Asia.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Partnership",
      categoryColor: "bg-green-500",
      date: "January 10, 2024",
    },
    {
      id: 4,
      title: "2024 Sustainable Agriculture Trends",
      excerpt:
        "Key trends shaping the future of sustainable farming and soil health management.",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Industry",
      categoryColor: "bg-purple-500",
      date: "January 8, 2024",
    },
    {
      id: 5,
      title: "AgriTech Asia 2024 Conference",
      excerpt:
        "Join us at the premier agricultural technology conference in Singapore this March.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Event",
      categoryColor: "bg-orange-500",
      date: "January 5, 2024",
    },
    {
      id: 6,
      title: "Innovation Excellence Award 2023",
      excerpt:
        "Recognized for outstanding contribution to sustainable agriculture innovation in Malaysia.",
      image:
        "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Award",
      categoryColor: "bg-yellow-500",
      date: "December 25, 2023",
    },
    {
      id: 7,
      title: "Expanding to Vietnam Market",
      excerpt:
        "QL Eco Green products now available to Vietnamese farmers through local distributors.",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Expansion",
      categoryColor: "bg-red-500",
      date: "December 20, 2023",
    },
  ];

  return (
    <Layout
      title="News & Updates - QL Eco Green | Latest Agricultural News"
      description="Stay updated with the latest news from QL Eco Green, including research breakthroughs, industry insights, and company developments."
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <div class="inline-flex items-center bg-primary-100 rounded-full px-6 py-2 mb-6">
              <i class="fas fa-newspaper text-primary-500 mr-2"></i>
              <span class="text-sm font-semibold text-primary-600">
                Latest Updates
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              News & Updates
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments in sustainable
              agriculture, research breakthroughs, and QL Eco Green company news
            </p>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section class="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex items-center justify-center space-x-6 overflow-x-auto">
            <button class="news-filter active px-4 py-2 rounded-lg font-medium text-primary-500 bg-primary-50 whitespace-nowrap">
              All News
            </button>
            <button class="news-filter px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 whitespace-nowrap">
              Company News
            </button>
            <button class="news-filter px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 whitespace-nowrap">
              Research
            </button>
            <button class="news-filter px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 whitespace-nowrap">
              Industry
            </button>
            <button class="news-filter px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 whitespace-nowrap">
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured News</h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredNews.map((article) => (
              <article
                key={article.id}
                class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    class="w-full h-64 object-cover"
                  />
                  <div
                    class={`absolute top-4 left-4 ${article.categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {article.category}
                  </div>
                  <div class="absolute bottom-4 left-4 text-white">
                    <div class="text-sm opacity-90">{article.date}</div>
                  </div>
                </div>
                <div class="p-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  <p class="text-gray-600 mb-6">{article.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">
                      {article.readTime}
                    </span>
                    <a
                      href={`/news/${article.id}`}
                      class="text-primary-500 font-semibold hover:text-primary-600"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Recent Updates
            </h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article) => (
              <article
                key={article.id}
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    class="w-full h-48 object-cover"
                  />
                  <div
                    class={`absolute top-3 left-3 ${article.categoryColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                  >
                    {article.category}
                  </div>
                </div>
                <div class="p-6">
                  <div class="text-sm text-gray-500 mb-2">{article.date}</div>
                  <h3 class="text-lg font-bold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p class="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <a
                    href={`/news/${article.id}`}
                    class="text-primary-500 font-semibold text-sm hover:text-primary-600"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div class="text-center mt-12">
            <button class="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-600 hover:shadow-lg transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section class="py-24 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest agricultural insights and
            company updates
          </p>

          <div class="max-w-md mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-6 py-4 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button class="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p class="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
