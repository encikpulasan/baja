// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
});

// Animated Counter for Hero Statistics
function animateCounter(elementId, finalValue, duration = 2500) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const isNumber = !isNaN(finalValue);
  const hasPlus = finalValue.toString().includes("+");
  const hasK = finalValue.toString().includes("K");

  let numericValue;
  if (isNumber) {
    numericValue = parseInt(finalValue);
  } else {
    numericValue = parseInt(finalValue.replace(/[^\d]/g, ""));
  }

  let startValue = 0;
  const increment = numericValue / (duration / 16);

  const timer = setInterval(() => {
    startValue += increment;
    if (startValue >= numericValue) {
      element.textContent = finalValue;
      clearInterval(timer);
    } else {
      if (hasK) {
        element.textContent = `${Math.floor(startValue)}K${hasPlus ? "+" : ""}`;
      } else {
        element.textContent = Math.floor(startValue).toString();
      }
    }
  }, 16);
}

// Start counter animations when page loads with QL Eco Green data
window.addEventListener("load", () => {
  setTimeout(() => {
    animateCounter("years-experience", "2001");
    animateCounter("farmers", "1000+");
    animateCounter("partners", "15+");
  }, 1000);
});

// Crop Selector Functionality with QL Eco Green Recommendations
const cropRecommendations = {
  rice: {
    title: "Rice Cultivation Enhancement",
    content:
      "QL Eco Green 100% EM Organic Fertilizer improves rice yields through superior soil conditioning and nutrient availability. Apply 250-300g/m² (powder) or broadcast pellets at 500-750kg/hectare before planting. >65% organic matter content enhances soil microorganisms for optimal rice growth.",
  },
  palm: {
    title: "Palm Oil Productivity",
    content:
      "Boost palm oil yields with QL Eco Green's SIRIM-certified organic fertilizer. Apply 3-7kg per mature tree using pellet formula. The 100% EM fermentation technology improves root development and long-term palm health. pH range 7.0-8.2 optimizes nutrient uptake.",
  },
  vegetables: {
    title: "Vegetable Crop Excellence",
    content:
      "Achieve superior vegetable yields with QL Eco Green's odourless, pathogen-free organic fertilizer. Apply 250-300g/m² for optimal results. Enhanced with 21-day heat treatment (60-70°C) and >1.5% nitrogen content for vigorous vegetable growth.",
  },
  fruits: {
    title: "Fruit Quality Enhancement",
    content:
      "Increase fruit quality and yields using QL Eco Green's premium organic fertilizer. Apply 3-7kg per fruit tree with our convenient pellet formula. 100% EM fermented organic matter promotes beneficial microorganisms and ensures balanced nutrition for premium fruit production.",
  },
};

// Enhanced Crop Selector with Animation
document.querySelectorAll(".crop-selector").forEach((button) => {
  button.addEventListener("click", function () {
    const crop = this.dataset.crop;
    const recommendation = cropRecommendations[crop];

    if (!recommendation) return;

    // Update selected crop
    const selectedCropEl = document.getElementById("selected-crop");
    const recommendationContentEl = document.getElementById(
      "recommendation-content",
    );
    const recommendationEl = document.getElementById("crop-recommendation");

    if (selectedCropEl) {
      selectedCropEl.textContent = crop.charAt(0).toUpperCase() + crop.slice(1);
    }
    if (recommendationContentEl) {
      recommendationContentEl.textContent = recommendation.content;
    }

    // Show recommendation with animation
    if (recommendationEl) {
      recommendationEl.classList.remove("hidden");
      recommendationEl.style.opacity = "0";
      recommendationEl.style.transform = "translateY(10px)";

      setTimeout(() => {
        recommendationEl.style.transition = "all 0.3s ease";
        recommendationEl.style.opacity = "1";
        recommendationEl.style.transform = "translateY(0)";
      }, 10);
    }

    // Visual feedback for selected button
    document.querySelectorAll(".crop-selector").forEach((btn) => {
      btn.classList.remove("ring-2", "ring-accent", "bg-white/30");
      btn.classList.add("bg-white/20");
    });
    this.classList.remove("bg-white/20");
    this.classList.add("ring-2", "ring-accent", "bg-white/30");
  });
});

// QL Eco Green Product Data
const products = [
  {
    id: 1,
    name: "QL Eco Green Organic Fertilizer - Powder (25kg)",
    category: "organic-fertilizer",
    type: "Premium Organic Fertilizer",
    form: "Powder (Dark Brown)",
    description:
      "Premium organic fertilizer made with 100% Effective Microorganism (EM) fermentation technology. SIRIM MS 1517:2012 certified with >65% organic matter for superior soil conditioning.",
    features: [
      "100% EM Fermented",
      "21-Day Heat Treatment (60-70°C)",
      "Odourless & Pathogen-Free",
      "SIRIM MS 1517:2012 Certified",
    ],
    applicationRate: "250-300g/m² (vegetables)",
    badge: "Best Seller",
    price: "RM65.00",
    benefits: [
      "Solves soil acidification (pH 7-8.2)",
      ">65% organic matter content",
      ">1.5% nitrogen, >3.5% phosphorus",
      "25:1 max C:N ratio",
    ],
  },
  {
    id: 2,
    name: "QL Eco Green Organic Fertilizer - Pellet (40kg)",
    category: "organic-fertilizer",
    type: "Organic Pellet",
    form: "Pellet (±6mm)",
    description:
      "Convenient pellet form organic fertilizer with ±6mm particle size for easy application. Made from fermented chicken dung, rice husk, and saw dust through advanced EM technology.",
    features: [
      "±6mm Uniform Pellet Size",
      "Easy to Handle & Apply",
      "65% Organic Matter",
      "Improves Soil Microorganisms",
    ],
    applicationRate: "3-7kg per fruit tree",
    badge: "Farm Scale",
    price: "RM95.00",
    benefits: [
      "pH range 7.0-8.2",
      "Promotes root development",
      "Enhances soil biology",
      "Convenient application",
    ],
  },
  {
    id: 3,
    name: "QL Eco Green Organic Hybrid Fertilizer - Pellet (25kg)",
    category: "organic-fertilizer",
    type: "Hybrid Organic",
    form: "Pellet (±6mm)",
    description:
      "Advanced hybrid organic fertilizer combining traditional organic matter with enhanced nutrient profiles for optimal plant performance and soil health improvement.",
    features: [
      "Hybrid Organic Formulation",
      "Enhanced Nutrient Availability",
      "Improved Water Absorption",
      "Reduces Nutrient Leaching",
    ],
    applicationRate: "200-300g/m²",
    badge: "Hybrid Tech",
    price: "RM85.00",
    benefits: [
      "Suitable for precision agriculture",
      "Enhanced nutrient availability",
      ">50% organic matter content",
      "pH range 7.0-8.2",
    ],
  },
  {
    id: 4,
    name: "QL Eco Green Organic Fertilizer - Retail Pack (1kg)",
    category: "organic-fertilizer",
    type: "Home Gardening",
    form: "Powder/Pellet",
    description:
      "Perfect for home gardening and small-scale applications. Convenient 1kg retail pack with the same premium quality as commercial grades.",
    features: [
      "Convenient Retail Packaging",
      "Perfect for Home Gardens",
      "Same Premium Quality",
      "Easy to Store & Use",
    ],
    applicationRate: "50-100g per plant",
    badge: "Value Pack",
    price: "RM2.40",
    benefits: [
      "Suitable for all plant types",
      "12 months shelf life",
      "Keep dry, away from sunlight",
      "Home garden friendly",
    ],
  },
  {
    id: 5,
    name: "QL Eco Green Organic Fertilizer - Commercial (500kg)",
    category: "organic-fertilizer",
    type: "Bulk Commercial",
    form: "Jumbo Bag",
    description:
      "Large-scale commercial bulk packaging for plantation and commercial farming operations. Cost-effective solution for extensive agricultural applications.",
    features: [
      "Jumbo Bag Packaging",
      "Commercial Scale Quantity",
      "Cost-Effective per kg",
      "Consistent Quality Assurance",
    ],
    applicationRate: "0.5-2.5kg/hectare",
    badge: "Commercial",
    price: "RM1,200.00",
    benefits: [
      "Suitable for mechanized application",
      "Bulk density 0.6-0.8 g/cm³",
      "Variable (powder/pellet)",
      "Cost effective for plantations",
    ],
  },
  {
    id: 6,
    name: "QL Eco Green Organic Fertilizer - Medium Pack (10kg)",
    category: "organic-fertilizer",
    type: "Mid-Range Pack",
    form: "Powder",
    description:
      "Medium-sized packaging ideal for small to medium farms and serious home gardeners. Balances convenience with value for money.",
    features: [
      "Medium Farm Size",
      "Value for Money",
      "Easy Handling",
      "Premium Quality",
    ],
    applicationRate: "100-200g/m²",
    badge: "Popular",
    price: "RM22.00",
    benefits: [
      "Perfect for small-medium farms",
      "Convenient 10kg packaging",
      "Same premium organic quality",
      "Cost effective solution",
    ],
  },
];

// Filter Functionality
function filterProducts(category) {
  const filteredProducts = category === "all"
    ? products
    : products.filter((product) => product.category === category);

  renderProducts(filteredProducts);

  // Update active filter button
  document.querySelectorAll(".filter-tab").forEach((btn) => {
    btn.classList.remove("active", "bg-primary", "text-white");
    btn.classList.add("bg-gray-100", "text-gray-700");
  });

  const activeBtn = document.querySelector(`[data-filter="${category}"]`);
  if (activeBtn) {
    activeBtn.classList.remove("bg-gray-100", "text-gray-700");
    activeBtn.classList.add("active", "bg-primary", "text-white");
  }
}

// Render Products
function renderProducts(productsToShow = products) {
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) return;

  productGrid.innerHTML = productsToShow
    .map(
      (product) => `
    <div class="bg-white rounded-2xl shadow-xl p-8 card-hover border border-gray-100 product-card" data-category="${product.category}">
      <div class="flex items-center justify-between mb-6">
        <div class="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">${product.badge}</div>
        <div class="text-primary text-lg font-bold">${product.type}</div>
      </div>
      
      <h3 class="text-xl font-bold text-dark mb-4">${product.name}</h3>
      <p class="text-gray-600 mb-6">${product.description}</p>
      
      <div class="space-y-3 mb-6">
        <div class="flex justify-between">
          <span class="text-gray-500">Form:</span>
          <span class="font-semibold">${product.form}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Application:</span>
          <span class="font-semibold">${product.applicationRate}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Price:</span>
          <span class="font-semibold text-primary">${product.price}</span>
        </div>
      </div>
      
      <div class="mb-6">
        <h4 class="font-semibold text-dark mb-3">Key Features:</h4>
        <div class="grid grid-cols-2 gap-2">
          ${
        product.features.map((feature) => `
            <div class="flex items-center text-sm text-gray-600">
              <i class="fas fa-check text-primary mr-2"></i>
              ${feature}
            </div>
          `).join("")
      }
        </div>
      </div>
      
      <button class="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
        Learn More
      </button>
    </div>
  `,
    )
    .join("");
}

// Success Stories Data - Authentic QL Eco Green Farmer Testimonials
const successStories = [
  {
    id: 1,
    farmerName: "Mr. Leong",
    location: "Gua Musang, Kelantan",
    crop: "Palm Oil",
    farmSize: "Estate Manager",
    program: "QL ECO GREEN Organic Fertilizer",
    results: "Soil restoration & reduced waterlogging",
    quote:
      "Chemical fertilizers ruined my soil over the years. Switching to QL ECO GREEN restored microbial activity and reduced waterlogging. Now, my palms are healthier long-term!",
    beforeCondition: "Chemical-damaged soil",
    afterCondition: "Restored microbial activity",
    yearImplemented: "2023",
  },
  {
    id: 2,
    farmerName: "Mr. Chin",
    location: "Kluang, Johor",
    crop: "Bananas",
    farmSize: "Commercial Farm",
    program: "QL ECO GREEN Organic Fertilizer",
    results: "Living soil with earthworms returned",
    quote:
      "Years of chemical use left my soil dead. Now, earthworms are back, and my bananas taste sweeter—proof of real organic nutrition!",
    beforeCondition: "Dead soil from chemicals",
    afterCondition: "Living soil with earthworms",
    yearImplemented: "2023",
  },
  {
    id: 3,
    farmerName: "Mr. Tan",
    location: "Ringlet, Cameron Highland",
    crop: "Gerbera Flowers",
    farmSize: "Export Farm",
    program: "QL ECO GREEN Organic Fertilizer",
    results: "Straighter stems, no deformities",
    quote:
      "Our highland soil was exhausted after decades of farming. After 6 months, QL ECO GREEN brought back earthworms and natural nutrients. Now our gerberas grow straighter stems with no deformities!",
    beforeCondition: "Exhausted highland soil",
    afterCondition: "Natural nutrients restored",
    yearImplemented: "2023",
  },
  {
    id: 4,
    farmerName: "Mr. Wong",
    location: "Brinchang, Cameron Highland",
    crop: "Butterhead Lettuce",
    farmSize: "Commercial Grower",
    program: "QL ECO GREEN Organic Fertilizer",
    results: "10% premium pricing from buyers",
    quote:
      "Since switching to QL ECO GREEN Organic Fertilizer, my butterhead lettuce stays crunchier for 3 extra days in cold storage. My Singapore buyers now pay 10% more for this premium quality!",
    beforeCondition: "Standard quality lettuce",
    afterCondition: "Premium export quality",
    yearImplemented: "2023",
  },
];

// Render Success Stories
function renderSuccessStories() {
  const storiesContainer = document.getElementById("carousel-track");
  if (!storiesContainer) return;

  storiesContainer.innerHTML = successStories
    .map(
      (story) => `
    <div class="story-slide w-full flex-shrink-0">
      <div class="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-12">
        <!-- Profile Header -->
        <div class="text-center mb-8">
          <div class="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <i class="fas fa-user text-white text-3xl"></i>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold text-dark mb-3">${story.farmerName}</h3>
          <div class="flex items-center justify-center text-gray-600 mb-4">
            <i class="fas fa-map-marker-alt mr-2 text-primary"></i>
            <span class="text-lg">${story.location}</span>
          </div>
          <div class="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-base font-semibold">
            ${story.crop} Farmer
          </div>
        </div>

        <!-- Main Quote -->
        <div class="text-center">
          <blockquote class="text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
            "${story.quote}"
          </blockquote>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Carousel Functionality
let currentSlide = 0;
let carouselInterval;

function updateCarousel() {
  const container = document.getElementById("carousel-track");
  const slides = document.querySelectorAll(".story-slide");

  if (!container || slides.length === 0) return;

  // Each slide takes full width
  const slideWidth = container.offsetWidth;
  container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".carousel-indicator");
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add("bg-primary", "scale-125");
      indicator.classList.remove("bg-gray-300", "hover:bg-gray-400");
    } else {
      indicator.classList.remove("bg-primary", "scale-125");
      indicator.classList.add("bg-gray-300", "hover:bg-gray-400");
    }
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".story-slide");
  if (slides.length === 0) return;

  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
  updateIndicators();
}

function prevSlide() {
  const slides = document.querySelectorAll(".story-slide");
  if (slides.length === 0) return;

  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateCarousel();
  updateIndicators();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  updateIndicators();
}

function startCarousel() {
  carouselInterval = setInterval(nextSlide, 6000); // 6 seconds for longer reading time
}

function stopCarousel() {
  clearInterval(carouselInterval);
}

// Initialize carousel
function initializeSuccessStories() {
  renderSuccessStories();

  // Create indicators
  const indicatorsContainer = document.getElementById("carousel-indicators");
  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = successStories
      .map(
        (_, index) => `
        <button class="carousel-indicator w-3 h-3 rounded-full transition-all duration-300 ${
          index === 0 ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
        }" data-slide="${index}"></button>
      `,
      )
      .join("");

    // Add click events to indicators
    document.querySelectorAll(".carousel-indicator").forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const slideIndex = parseInt(e.target.dataset.slide);
        goToSlide(slideIndex);
        stopCarousel();
        startCarousel();
      });
    });
  }

  // Add navigation button events
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopCarousel();
      startCarousel();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopCarousel();
      startCarousel();
    });
  }

  // Pause on hover
  const storiesContainer = document.getElementById("carousel-track");
  if (storiesContainer) {
    storiesContainer.addEventListener("mouseenter", stopCarousel);
    storiesContainer.addEventListener("mouseleave", startCarousel);
  }

  // Start auto-play
  startCarousel();

  // Handle window resize
  window.addEventListener("resize", () => {
    updateCarousel();
  });
}

// Smooth Scrolling for Navigation Links
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

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();
  initializeSuccessStories();

  // Add filter button events if they exist
  document.querySelectorAll(".filter-tab").forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      filterProducts(filter);
    });
  });

  // Improved parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-bg");
    if (heroSection) {
      const heroHeight = heroSection.offsetHeight;
      if (scrolled < heroHeight) {
        // Apply subtle parallax effect only when hero is visible
        heroSection.style.transform = `translateY(${scrolled * 0.15}px)`;
      } else {
        // Reset transform when scrolled past hero to prevent overlap
        heroSection.style.transform = "translateY(0)";
      }
    }
  });
});

// Form Submission Handler (if contact form exists)
function handleFormSubmission(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert(
        "Thank you for your interest in QL Eco Green! We'll contact you soon.",
      );
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Initialize form handlers
document.addEventListener("DOMContentLoaded", () => {
  handleFormSubmission("contact-form");
  handleFormSubmission("quote-form");
});

// Print/PDF functionality
function printPage() {
  window.print();
}

// Add print button event if it exists
document.addEventListener("DOMContentLoaded", () => {
  const printBtn = document.getElementById("print-btn");
  if (printBtn) {
    printBtn.addEventListener("click", printPage);
  }
});
