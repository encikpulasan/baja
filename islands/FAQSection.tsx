import { useState } from "preact/hooks";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: "1",
      category: "product",
      question: "What is QL Eco Green Organomineral Soil Conditioner?",
      answer:
        "QL Eco Green Organomineral Soil Conditioner is an innovative class of engineered amendment specifically designed to improve soil health. It incorporates both organic and mineral components to provide substantial agricultural benefits, including improved soil structure, enhanced nutrient availability, and better water retention.",
    },
    {
      id: "2",
      category: "product",
      question: "What nutrients are included in the soil conditioner?",
      answer:
        "Our soil conditioner contains a comprehensive nutrient profile including: Primary macronutrients (N, P, K), Secondary macronutrients (Ca, Mg, S), Essential micronutrients (Boron, Chlorine, Copper, Iron, Manganese, Molybdenum, Nickel, Zinc), and organic matter with organic carbon for soil health.",
    },
    {
      id: "3",
      category: "product",
      question: "What forms are available for QL Eco Green products?",
      answer:
        "We offer our products in multiple forms: Powder form (most common, dark brown color), Granular form for easy broadcasting, and Liquid concentrate for precise application and foliar feeding.",
    },
    {
      id: "4",
      category: "application",
      question: "What are the recommended application rates?",
      answer:
        "Application rates vary based on soil conditions: Low Application (0.25-0.5 kg/ha) for light conditioning, Medium Application (0.5-1.25 kg/ha) recommended for optimal results, and High Application (1.25-2.5 kg/ha) for intensive soil rehabilitation. Consult our specialists for customized recommendations.",
    },
    {
      id: "5",
      category: "application",
      question: "When is the best time to apply the soil conditioner?",
      answer:
        "Optimal timing depends on your farming cycle: Pre-planting (2-4 weeks before planting), During planting (mix with soil), Growing season (side-dress application), or Post-harvest (to maintain soil health).",
    },
    {
      id: "6",
      category: "application",
      question: "How do I store the products properly?",
      answer:
        "Store in a cool, dry place away from direct sunlight, keep containers tightly sealed, avoid moisture and extreme temperatures, use within 2 years for optimal results, and keep away from children and livestock.",
    },
    {
      id: "7",
      category: "technical",
      question: "How does the soil conditioner improve soil health?",
      answer:
        "Our soil conditioner works through multiple mechanisms: Improving soil structure and porosity, increasing water holding capacity, enhancing CEC and nutrient uptake, promoting beneficial soil microorganisms, and helping maintain optimal soil pH levels.",
    },
    {
      id: "8",
      category: "technical",
      question: "Can I use this with other fertilizers?",
      answer:
        "Yes, our soil conditioner is compatible with most fertilizers and can enhance their effectiveness. We recommend reducing chemical fertilizer use by 20-30%, conducting soil tests before combining products, and consulting our technical team for specific combinations.",
    },
    {
      id: "9",
      category: "technical",
      question: "What soil types are suitable for this product?",
      answer:
        "QL Eco Green products are effective across various soil types: Clay soils (improves drainage), Sandy soils (increases retention), Loamy soils (maintains quality), Acidic soils (balances pH), and Alkaline soils (improves nutrient availability).",
    },
    {
      id: "10",
      category: "general",
      question: "Is QL Eco Green certified organic?",
      answer:
        "Our products are made from organic materials and follow organic principles, but certification varies by region. Contact us for specific organic certification status in your area.",
    },
    {
      id: "11",
      category: "general",
      question: "How long does it take to see results?",
      answer:
        "Initial improvements in soil structure can be seen within 2-4 weeks. Significant crop yield improvements are typically observed within one growing season, with continued benefits over multiple seasons.",
    },
    {
      id: "12",
      category: "general",
      question: "Do you offer technical support?",
      answer:
        "Yes, we provide comprehensive technical support including soil testing recommendations, application guidance, troubleshooting, and ongoing consultation through our team of agricultural specialists.",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: "fas fa-list" },
    { id: "product", name: "Product Information", icon: "fas fa-leaf" },
    { id: "application", name: "Application & Usage", icon: "fas fa-tools" },
    { id: "technical", name: "Technical Support", icon: "fas fa-cogs" },
    { id: "general", name: "General Information", icon: "fas fa-info-circle" },
  ];

  const filteredFAQs = selectedCategory === "all"
    ? faqData
    : faqData.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      {/* Category Filter */}
      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Browse by Category
            </h2>
            <p class="text-xl text-gray-600">
              Find answers quickly by selecting a category
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                class={`p-6 rounded-2xl text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary-500 text-white shadow-lg -translate-y-1"
                    : "bg-white text-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500">
                  <i class={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h3 class="text-lg font-semibold mb-2">{category.name}</h3>
                <p class="text-sm opacity-75">
                  {faqData.filter((faq) =>
                    category.id === "all" || faq.category === category.id
                  ).length} questions
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-6">
          <div class="space-y-6">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                class="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  class="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 class="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <i
                    class={`fas fa-chevron-down text-primary-500 transition-transform duration-300 ${
                      openFAQ === faq.id ? "rotate-180" : ""
                    }`}
                  >
                  </i>
                </button>
                {openFAQ === faq.id && (
                  <div class="px-8 pb-6">
                    <p class="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div class="text-center py-12">
              <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p class="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
