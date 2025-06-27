import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../../components/Layout.tsx";

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

// Mock data - in real app this would come from a database
const articles: Record<string, NewsArticle> = {
  "1": {
    id: "1",
    title: "QL Eco Green Opens New Research & Development Facility",
    excerpt:
      "Our state-of-the-art R&D facility in Shah Alam is now operational, featuring advanced laboratories and greenhouse facilities for accelerated product development.",
    content: `
      <p class="mb-6">QL Eco Green has officially opened its new Research & Development facility in Shah Alam, marking a significant milestone in the company's commitment to advancing sustainable agriculture technology. The facility, which spans over 5,000 square feet, is equipped with state-of-the-art laboratories and greenhouse facilities designed to accelerate product development and enhance research capabilities.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Advanced Research Capabilities</h3>
      <p class="mb-6">The new facility features cutting-edge equipment for soil analysis, plant growth monitoring, and fertilizer testing. Our team of agricultural scientists and researchers will utilize these resources to develop innovative solutions that address the evolving needs of modern farming.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Sustainable Agriculture Focus</h3>
      <p class="mb-6">The R&D facility will focus on developing eco-friendly fertilizers and soil conditioners that improve crop yields while maintaining environmental sustainability. This aligns with our mission to provide farmers with effective solutions that don't compromise the health of our planet.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Future Innovation</h3>
      <p class="mb-6">This investment in research infrastructure demonstrates QL Eco Green's commitment to continuous innovation and our dedication to supporting the agricultural community with scientifically-backed solutions.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Company News",
    categoryColor: "bg-primary-500",
    date: "January 15, 2024",
    readTime: "5 min read",
    author: "Dr. Sarah Lee",
    tags: ["Research", "Innovation", "Sustainability", "Technology"],
  },
  "2": {
    id: "2",
    title: "Revolutionary Soil Health Study Shows 40% Yield Improvement",
    excerpt:
      "Latest comprehensive field trials demonstrate significant crop productivity gains using QL Eco Green's advanced organomineral soil conditioning technology across multiple crop varieties.",
    content: `
      <p class="mb-6">A comprehensive 12-month field study conducted across multiple agricultural sites has revealed remarkable results for QL Eco Green's advanced organomineral soil conditioning technology. The study, which monitored various crop varieties, demonstrated an average yield improvement of 40% compared to traditional farming methods.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Study Methodology</h3>
      <p class="mb-6">The research was conducted on 500 hectares of farmland across Peninsular Malaysia, involving rice, palm oil, and vegetable crops. Each test site was carefully monitored for soil health indicators, crop growth rates, and final yield measurements over a full growing season.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Key Findings</h3>
      <ul class="list-disc list-inside mb-6 text-gray-700">
        <li>40% average increase in crop yields</li>
        <li>35% improvement in soil organic matter content</li>
        <li>25% reduction in water usage requirements</li>
        <li>Significant improvement in plant disease resistance</li>
        <li>Enhanced nutrient retention in soil</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Scientific Impact</h3>
      <p class="mb-6">These results represent a breakthrough in sustainable agriculture technology, demonstrating that organic soil conditioning can deliver superior results while maintaining environmental responsibility. The findings have been submitted for peer review in leading agricultural journals.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mb-4">Farmer Testimonials</h3>
      <p class="mb-6">"The improvement in my crop yields has been remarkable. Not only am I harvesting more, but the quality of my produce has also significantly improved," said Ahmad Rahman, a rice farmer from Kedah who participated in the study.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Research Update",
    categoryColor: "bg-blue-500",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Prof. Ahmad Hassan",
    tags: ["Research", "Yields", "Soil Health", "Sustainability"],
  },
};

export const handler: Handlers = {
  GET(req, ctx) {
    const { id } = ctx.params;
    const article = articles[id];

    if (!article) {
      return new Response("Article not found", { status: 404 });
    }

    return ctx.render({ article });
  },
};

export default function NewsArticle(
  { data }: PageProps<{ article: NewsArticle }>,
) {
  const { article } = data;

  return (
    <Layout
      title={`${article.title} - QL Eco Green News`}
      description={article.excerpt}
    >
      {/* Hero Section */}
      <section class="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div class="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            class="w-full h-full object-cover opacity-30"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent">
          </div>
        </div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <div class="text-center text-white">
            <div
              class={`inline-flex items-center ${article.categoryColor} rounded-full px-4 py-2 mb-6`}
            >
              <span class="text-sm font-semibold">{article.category}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {article.excerpt}
            </p>

            <div class="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div class="flex items-center">
                <i class="fas fa-user mr-2"></i>
                <span>{article.author}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-calendar mr-2"></i>
                <span>{article.date}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-clock mr-2"></i>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <div class="prose prose-lg max-w-none">
            <div
              class="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Tags */}
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-semibold text-gray-600">Tags:</span>
              <div class="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share & Actions */}
      <section class="py-12 bg-gray-50">
        <div class="max-w-4xl mx-auto px-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-semibold text-gray-600">
                Share this article:
              </span>
              <div class="flex space-x-3">
                <a
                  href="#"
                  class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <a
                href="/news"
                class="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors inline-flex items-center"
              >
                <i class="fas fa-arrow-left mr-2"></i>
                Back to News
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(articles).filter((a) => a.id !== article.id).slice(
              0,
              3,
            ).map((relatedArticle) => (
              <article
                key={relatedArticle.id}
                class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div class="relative">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    class="w-full h-48 object-cover"
                  />
                  <div
                    class={`absolute top-3 left-3 ${relatedArticle.categoryColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}
                  >
                    {relatedArticle.category}
                  </div>
                </div>
                <div class="p-6">
                  <div class="text-sm text-gray-500 mb-2">
                    {relatedArticle.date}
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-3">
                    {relatedArticle.title}
                  </h3>
                  <p class="text-gray-600 text-sm mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <a
                    href={`/news/${relatedArticle.id}`}
                    class="text-primary-500 font-semibold text-sm hover:text-primary-600"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
