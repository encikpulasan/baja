// Product Data
const products = [
  {
    id: 1,
    name: "QL Eco Green Organic Fertilizer - Powder (25kg)",
    category: "farm",
    type: "Organic Soil Conditioner",
    image:
      "https://qlecogreen.com/wp-content/uploads/2019/01/25kg_QLpowder_3D_web.png",
    price: "RM65.00",
    originalPrice: "RM75.00",
    rating: 4.9,
    reviews: 243,
    description:
      "Premium organic fertilizer made with 100% Effective Microorganism (EM) fermentation technology. SIRIM MS 1517:2012 certified with >65% organic matter for superior soil conditioning.",
    features: [
      "100% EM fermented organic matter",
      "SIRIM MS 1517:2012 certified",
      "Odourless and pathogen-free",
      "Solves soil acidification (pH 7-8.2)",
      "21-day heat treatment (60-70°C)",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">65%",
      "pH Range": "7.0-8.2",
      "Moisture Content": "25-30%",
      "Packaging": "25kg bags",
      "Application Rate": "250-300g/m² (vegetables)",
      "C:N Ratio": "25:1 max",
    },
    badges: ["SIRIM Certified", "100% EM Fermented", "Best Seller"],
    crops: ["vegetables", "fruits", "rice", "palm"],
    applicationMethods: ["broadcast", "sidedress"],
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "QL Eco Green Organic Fertilizer - Pellet (40kg)",
    category: "farm",
    type: "Organic Pellet",
    image:
      "https://qlecogreen.com/wp-content/uploads/2019/01/40kg_QLpallet_web.png",
    price: "RM95.00",
    originalPrice: "RM110.00",
    rating: 4.8,
    reviews: 187,
    description:
      "Convenient pellet form organic fertilizer with ±6mm particle size for easy application. Made from fermented chicken dung, rice husk, and saw dust through advanced EM technology.",
    features: [
      "±6mm uniform pellet size",
      "Easy to handle and apply",
      "65% organic matter content",
      "Improves soil microorganism activity",
      "Promotes root development",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">65%",
      "pH Range": "7.0-8.2",
      "Particle Size": "±6mm",
      "Packaging": "40kg bags",
      "Application Rate": "3-7kg per fruit tree",
      "C:N Ratio": "25:1 max",
    },
    badges: ["Uniform Pellets", "Premium Quality"],
    crops: ["fruits", "palm", "rubber", "vegetables"],
    applicationMethods: ["broadcast", "tree application"],
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "QL Eco Green Organic Hybrid Fertilizer - Pellet (25kg)",
    category: "farm",
    type: "Hybrid Organic",
    image:
      "https://qlecogreen.com/wp-content/uploads/2019/01/QL_hybrid_40kg_pellet2_s-2.png",
    price: "RM85.00",
    originalPrice: "RM95.00",
    rating: 4.7,
    reviews: 156,
    description:
      "Advanced hybrid organic fertilizer combining traditional organic matter with enhanced nutrient profiles for optimal plant performance and soil health improvement.",
    features: [
      "Hybrid organic formulation",
      "Enhanced nutrient availability",
      "Improved water absorption",
      "Reduces nutrient leaching",
      "Suitable for precision agriculture",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">50%",
      "pH Range": "7.0-8.2",
      "Particle Size": "±6mm",
      "Packaging": "25kg bags",
      "Application Rate": "200-300g/m²",
      "C:N Ratio": "25:1 max",
    },
    badges: ["Hybrid Technology", "Enhanced Formula"],
    crops: ["vegetables", "rice", "fruits", "palm"],
    applicationMethods: ["broadcast", "fertigation"],
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "QL Eco Green Organic Fertilizer - Retail Pack (1kg)",
    category: "retail",
    type: "Home Gardening",
    image: "images/product-hero.png",
    price: "RM2.40",
    originalPrice: "RM3.50",
    rating: 4.9,
    reviews: 512,
    description:
      "Perfect for home gardening and small-scale applications. Convenient 1kg retail pack with the same premium quality as commercial grades.",
    features: [
      "Convenient retail packaging",
      "Perfect for home gardens",
      "Same premium quality",
      "Easy to store and use",
      "Suitable for all plant types",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">50%",
      "pH Range": "7.0-8.2",
      "Packaging": "1kg sealed bag",
      "Application Rate": "50-100g per plant",
      "Shelf Life": "12 months",
      "Storage": "Keep dry, away from sunlight",
    },
    badges: ["Home Garden", "Retail Pack", "Value for Money"],
    crops: ["vegetables", "fruits", "flowers", "herbs"],
    applicationMethods: ["manual application", "potting mix"],
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "QL Eco Green Organic Fertilizer - Commercial (500kg)",
    category: "commercial",
    type: "Bulk Commercial",
    image:
      "https://qlecogreen.com/wp-content/uploads/2019/01/40kg_QLpallet_web.png",
    price: "RM1,200.00",
    originalPrice: "RM1,350.00",
    rating: 4.8,
    reviews: 89,
    description:
      "Large-scale commercial bulk packaging for plantation and commercial farming operations. Cost-effective solution for extensive agricultural applications.",
    features: [
      "Jumbo bag packaging",
      "Commercial scale quantity",
      "Cost-effective per kg",
      "Suitable for mechanized application",
      "Consistent quality assurance",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">65%",
      "pH Range": "7.0-8.2",
      "Packaging": "500kg jumbo bag",
      "Application Rate": "0.5-2.5kg/hectare",
      "Bulk Density": "0.6-0.8 g/cm³",
      "Particle Size": "Variable (powder/pellet)",
    },
    badges: ["Commercial Grade", "Bulk Package", "Cost Effective"],
    crops: ["palm", "rubber", "rice", "commercial vegetables"],
    applicationMethods: ["broadcast", "mechanical application"],
    inStock: true,
    featured: false,
  },
  {
    id: 6,
    name: "QL Eco Green Organic Fertilizer - Medium Pack (10kg)",
    category: "retail",
    type: "Mid-Range Pack",
    image:
      "https://qlecogreen.com/wp-content/uploads/2019/01/25kg_QLpowder_3D_web.png",
    price: "RM22.00",
    originalPrice: "RM28.00",
    rating: 4.7,
    reviews: 234,
    description:
      "Medium-sized packaging ideal for small to medium farms and serious home gardeners. Balances convenience with value for money.",
    features: [
      "Medium-sized convenience",
      "Ideal for small farms",
      "Good value proposition",
      "Easy handling size",
      "Moisture-proof packaging",
    ],
    specifications: {
      "Total Nitrogen (N)": ">1.5%",
      "Phosphorus (P₂O₅)": ">3.5%",
      "Potassium (K₂O)": "3-4%",
      "Organic Matter": ">50%",
      "pH Range": "7.0-8.2",
      "Packaging": "10kg bags",
      "Application Rate": "200-400g/m²",
      "Coverage": "25-50m² per bag",
      "Storage": "12 months shelf life",
    },
    badges: ["Mid-Range", "Popular Choice", "Good Value"],
    crops: ["vegetables", "fruits", "rice", "small plantation"],
    applicationMethods: ["broadcast", "sidedress"],
    inStock: true,
    featured: false,
  },
];

// Global variables
let currentProducts = [...products];
let selectedProducts = [];

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners();
  displayProducts();
  updateProductCount();
});

// Initialize Event Listeners
function initializeEventListeners() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Category cards
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      filterByCategory(category);
      updateActiveTab(category);
    });
  });

  // Filter tabs
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      filterProducts(filter);
      updateActiveTab(filter);
    });
  });

  // Search functionality
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  // Filter dropdowns
  const cropFilter = document.getElementById("crop-filter");
  const applicationFilter = document.getElementById("application-filter");

  if (cropFilter) cropFilter.addEventListener("change", applyFilters);
  if (applicationFilter) {
    applicationFilter.addEventListener("change", applyFilters);
  }

  // Clear filters
  const clearFilters = document.getElementById("clear-filters");
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      searchInput.value = "";
      cropFilter.value = "";
      applicationFilter.value = "";
      currentProducts = [...products];
      displayProducts();
      updateActiveTab("all");
    });
  }

  // Close modal
  document.addEventListener("click", (e) => {
    if (e.target.id === "product-modal") {
      closeModal();
    }
  });
}

// Display Products
function displayProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = currentProducts.map((product) => createProductCard(product))
    .join("");

  // Add event listeners to product cards
  grid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const productId = parseInt(card.dataset.productId);
      showProductModal(productId);
    });
  });
}

// Create Product Card
function createProductCard(product) {
  const stockStatus = product.inStock
    ? '<span class="text-green-600 text-sm font-medium"><i class="fas fa-check-circle mr-1"></i>In Stock</span>'
    : '<span class="text-red-600 text-sm font-medium"><i class="fas fa-times-circle mr-1"></i>Out of Stock</span>';

  const badges = product.badges.map((badge) =>
    `<span class="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">${badge}</span>`
  ).join(" ");

  const discount = product.originalPrice
    ? Math.round(
      ((parseFloat(product.originalPrice.replace(/[^0-9.-]+/g, "")) -
        parseFloat(product.price.replace(/[^0-9.-]+/g, ""))) /
        parseFloat(product.originalPrice.replace(/[^0-9.-]+/g, ""))) * 100,
    )
    : 0;

  return `
        <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer relative" data-product-id="${product.id}">
            ${
    product.featured
      ? '<div class="absolute top-4 left-4 z-10 bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full">Featured</div>'
      : ""
  }
            ${
    discount > 0
      ? `<div class="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-${discount}%</div>`
      : ""
  }
            
            <div class="relative overflow-hidden">
                <div class="w-full h-48 bg-white flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
                        <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain">
                    </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute bottom-4 left-4 right-4">
                        <button class="w-full bg-white text-primary py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="p-6">
                <div class="flex flex-wrap gap-2 mb-3">
                    ${badges}
                </div>
                
                <h3 class="text-xl font-heading font-bold text-dark mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-3">${product.type}</p>
                
                <div class="flex items-center mb-3">
                    <div class="flex text-yellow-400 mr-2">
                        ${
    Array(5).fill(0).map((_, i) =>
      `<i class="fas fa-star ${
        i < Math.floor(product.rating) ? "" : "text-gray-300"
      }"></i>`
    ).join("")
  }
                    </div>
                    <span class="text-sm text-gray-600">${product.rating} (${product.reviews} reviews)</span>
                </div>
                
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description}</p>
                
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <span class="text-2xl font-bold text-primary">${product.price}</span>
                        ${
    product.originalPrice
      ? `<span class="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>`
      : ""
  }
                    </div>
                    ${stockStatus}
                </div>
                
                <div class="flex gap-2">
                    <button class="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                        <i class="fas fa-eye mr-2"></i>View Details
                    </button>
                    <button class="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors" onclick="event.stopPropagation(); toggleCompare(${product.id})">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter Functions
function filterProducts(category) {
  if (category === "all") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter((product) =>
      product.category === category
    );
  }
  displayedCount = 6;
  displayProducts();
  updateProductCount();
}

function filterByCategory(category) {
  filterProducts(category);

  // Scroll to products section
  document.querySelector("#products-grid").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function updateActiveTab(activeFilter) {
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    const filter = tab.dataset.filter;
    if (filter === activeFilter) {
      tab.classList.remove("bg-gray-100", "text-gray-700");
      tab.classList.add("bg-primary", "text-white");
    } else {
      tab.classList.remove("bg-primary", "text-white");
      tab.classList.add("bg-gray-100", "text-gray-700");
    }
  });
}

// Search Functionality
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm === "") {
    currentProducts = [...products];
  } else {
    currentProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm) ||
      product.features.some((feature) =>
        feature.toLowerCase().includes(searchTerm)
      )
    );
  }

  displayedCount = 6;
  displayProducts();
  updateProductCount();
}

// Apply Filters
function applyFilters() {
  const cropFilter = document.getElementById("crop-filter").value;
  const applicationFilter = document.getElementById("application-filter").value;
  const searchTerm = document.getElementById("product-search").value
    .toLowerCase();

  let filtered = [...products];

  // Apply search filter
  if (searchTerm) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm)
    );
  }

  // Apply crop filter
  if (cropFilter) {
    filtered = filtered.filter((product) => product.crops.includes(cropFilter));
  }

  // Apply application method filter
  if (applicationFilter) {
    filtered = filtered.filter((product) =>
      product.applicationMethods.includes(applicationFilter)
    );
  }

  currentProducts = filtered;
  displayedCount = 6;
  displayProducts();
  updateProductCount();
}

// Update Product Count
function updateProductCount() {
  // You can add a product count display here if needed
}

// Product Modal Functions
function showProductModal(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("product-modal");
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = createModalContent(product);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function createModalContent(product) {
  const stockStatus = product.inStock
    ? '<span class="text-green-600 font-medium"><i class="fas fa-check-circle mr-1"></i>In Stock</span>'
    : '<span class="text-red-600 font-medium"><i class="fas fa-times-circle mr-1"></i>Out of Stock</span>';

  return `
        <div class="relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
                <i class="fas fa-times text-gray-600"></i>
            </button>
            
            <div class="grid lg:grid-cols-2 gap-8 p-8">
                <div>
                    <div class="w-full h-64 bg-white rounded-xl mb-6 flex items-center justify-center p-4">
                    <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain">
                </div>
                    
                    <div class="space-y-4">
                        <h4 class="text-lg font-semibold text-dark">Key Features</h4>
                        <ul class="space-y-2">
                            ${
    product.features.map((feature) =>
      `<li class="flex items-start">
                                    <i class="fas fa-check text-primary mt-1 mr-3"></i>
                                    <span class="text-gray-700">${feature}</span>
                                </li>`
    ).join("")
  }
                        </ul>
                    </div>
                </div>
                
                <div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${
    product.badges.map((badge) =>
      `<span class="bg-primary text-white text-xs px-3 py-1 rounded-full">${badge}</span>`
    ).join("")
  }
                    </div>
                    
                    <h2 class="text-3xl font-heading font-bold text-dark mb-2">${product.name}</h2>
                    <p class="text-lg text-gray-600 mb-4">${product.type}</p>
                    
                    <div class="flex items-center mb-6">
                        <div class="flex text-yellow-400 mr-3">
                            ${
    Array(5).fill(0).map((_, i) =>
      `<i class="fas fa-star ${
        i < Math.floor(product.rating) ? "" : "text-gray-300"
      }"></i>`
    ).join("")
  }
                        </div>
                        <span class="text-gray-600">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    
                    <p class="text-gray-700 mb-6 leading-relaxed">${product.description}</p>
                    
                    <div class="bg-light rounded-xl p-6 mb-6">
                        <h4 class="text-lg font-semibold text-dark mb-4">Specifications</h4>
                        <div class="grid grid-cols-2 gap-4">
                            ${
    Object.entries(product.specifications).map(([key, value]) =>
      `<div>
                                    <span class="text-sm text-gray-600 block">${key}</span>
                                    <span class="font-medium text-dark">${value}</span>
                                </div>`
    ).join("")
  }
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <span class="text-3xl font-bold text-primary">${product.price}</span>
                            ${
    product.originalPrice
      ? `<span class="text-lg text-gray-500 line-through ml-3">${product.originalPrice}</span>`
      : ""
  }
                        </div>
                        ${stockStatus}
                    </div>
                    
                    <div class="flex gap-4">
                        <button class="flex-1 bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors ${
    !product.inStock ? "opacity-50 cursor-not-allowed" : ""
  }" ${!product.inStock ? "disabled" : ""}>
                            <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                        </button>
                        <button class="bg-accent text-dark px-6 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition-colors">
                            <i class="fas fa-phone mr-2"></i>Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Comparison Functions
function toggleCompare(productId) {
  const index = selectedProducts.indexOf(productId);

  if (index > -1) {
    selectedProducts.splice(index, 1);
  } else {
    if (selectedProducts.length < 3) {
      selectedProducts.push(productId);
    } else {
      alert("You can compare up to 3 products at a time.");
      return;
    }
  }

  updateComparisonUI();
}

function updateComparisonUI() {
  // Update comparison table if products are selected
  if (selectedProducts.length > 0) {
    displayComparison();
  }
}

function displayComparison() {
  const comparisonTable = document.getElementById("comparison-table");
  if (!comparisonTable || selectedProducts.length === 0) return;

  const compareProducts = selectedProducts.map((id) =>
    products.find((p) => p.id === id)
  );

  comparisonTable.innerHTML = `
        <div class="min-w-full">
            <div class="grid grid-cols-${compareProducts.length + 1} gap-4">
                <div class="font-semibold text-dark p-4">Features</div>
                ${
    compareProducts.map((product) =>
      `<div class="text-center p-4">
                        <div class="w-16 h-16 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center p-1">
                    <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain">
                </div>
                        <h4 class="font-semibold text-sm">${product.name}</h4>
                        <p class="text-xs text-gray-600">${product.price}</p>
                    </div>`
    ).join("")
  }
                
                <div class="p-4 font-medium">Price</div>
                ${
    compareProducts.map((product) =>
      `<div class="p-4 text-center font-bold text-primary">${product.price}</div>`
    ).join("")
  }
                
                <div class="p-4 font-medium">Rating</div>
                ${
    compareProducts.map((product) =>
      `<div class="p-4 text-center">${product.rating}/5</div>`
    ).join("")
  }
                
                <div class="p-4 font-medium">Stock Status</div>
                ${
    compareProducts.map((product) =>
      `<div class="p-4 text-center">
                        <span class="${
        product.inStock ? "text-green-600" : "text-red-600"
      } font-medium">
                            ${product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>`
    ).join("")
  }
            </div>
            
            <div class="text-center mt-6">
                <button onclick="clearComparison()" class="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                    Clear Comparison
                </button>
            </div>
        </div>
    `;
}

function clearComparison() {
  selectedProducts = [];
  const comparisonTable = document.getElementById("comparison-table");
  if (comparisonTable) {
    comparisonTable.innerHTML = `
            <div class="text-center text-gray-500 py-12">
                <i class="fas fa-balance-scale text-4xl mb-4"></i>
                <p>Select products to compare their features, specifications, and benefits.</p>
                <button class="bg-primary text-white px-6 py-3 rounded-full font-semibold mt-4 hover:bg-green-700 transition-colors">
                    Start Comparing
                </button>
            </div>
        `;
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to category cards
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
});

// Initialize category cards animation
document.querySelectorAll(".category-card").forEach((card, index) => {
  card.style.transform = "translateY(20px)";
  card.style.opacity = "0";
  card.style.transition = `all 0.6s ease ${index * 0.1}s`;
});
