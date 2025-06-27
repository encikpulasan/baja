// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');
const contactForm = document.querySelector('.contact-form');

// Mobile Navigation Toggle
function toggleMobileNav() {
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        
        // Toggle hamburger animation
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}

// Close mobile nav when clicking on links
function closeMobileNav() {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('nav-open');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Header scroll effect
function handleScroll() {
    const scrollY = window.scrollY;
    
    if (header) {
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Enhanced navigation functionality for cross-page links
function handleNavigation(e) {
    const targetHref = this.getAttribute('href');
    
    // If it's an external page link, allow normal navigation
    if (targetHref && !targetHref.startsWith('#')) {
        closeMobileNav();
        return true; // Allow normal navigation
    }
    
    // If it's an anchor link, handle smooth scrolling
    if (targetHref && targetHref.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetHref);
        
        if (targetSection) {
            const headerHeight = header ? header.offsetHeight : 80;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            updateActiveNavLink(targetHref);
        }
        
        // Close mobile nav if open
        closeMobileNav();
    }
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    if (navLinks) {
        navLinks.forEach(link => {
            link.classList.remove('active', 'text-primary-500', 'bg-primary-50');
            link.classList.add('text-gray-700');
            
            if (link.getAttribute('href') === activeId) {
                link.classList.add('active', 'text-primary-500', 'bg-primary-50');
                link.classList.remove('text-gray-700');
            }
        });
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
        
        // Show success message
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    }, 2000);
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification with Tailwind classes
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-24 right-6 z-50 max-w-sm opacity-0 transform translate-x-full transition-all duration-300 ease-in-out`;
    
    const bgColor = type === 'success' ? 'bg-green-50 border-green-500' : 
                    type === 'error' ? 'bg-red-50 border-red-500' : 
                    'bg-blue-50 border-blue-500';
    
    const iconColor = type === 'success' ? 'text-green-500' : 
                      type === 'error' ? 'text-red-500' : 
                      'text-blue-500';
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 
                 'fa-info-circle';
    
    notification.innerHTML = `
        <div class="flex items-center p-4 border-l-4 rounded-lg shadow-lg ${bgColor}">
            <i class="fas ${icon} ${iconColor} text-lg mr-3"></i>
            <span class="text-gray-800 flex-1">${message}</span>
            <button class="ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('opacity-0', 'translate-x-full');
        notification.classList.add('opacity-100', 'translate-x-0');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.add('opacity-0', 'translate-x-full');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button handler
    const closeBtn = notification.querySelector('button');
    closeBtn.addEventListener('click', () => {
        notification.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => notification.remove(), 300);
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Update active nav link based on visible section
                const sectionId = entry.target.getAttribute('id');
                if (sectionId) {
                    updateActiveNavLink(`#${sectionId}`);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Observe benefit cards for staggered animation
    const benefitCards = document.querySelectorAll('.bg-white.p-8.rounded-2xl');
    benefitCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Parallax effect for hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // Smooth scrolling for nav links
    if (navLinks && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavigation);
        });
    }
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMobileNav();
            }
        }
    });
    
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Scroll effects
    const debouncedScroll = debounce(() => {
        handleScroll();
        if (typeof handleParallax === 'function') {
            handleParallax();
        }
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // Intersection Observer for animations
    if (typeof setupIntersectionObserver === 'function') {
        setupIntersectionObserver();
    }
    
    // Initial scroll check
    handleScroll();
    
    // Add Tailwind-compatible animations
    addTailwindAnimations();
    
    // Set initial active nav link based on current page
    setInitialActiveNavLink();
    
    // Initialize mobile dropdowns
    initMobileDropdowns();
    
    // Initialize sales pitch interactions
    initializeSalesPitchInteractions();
    
    // Initialize mobile-friendly quick actions (collapsed by default on mobile)
    initializeMobileQuickActions();
    
    // Initialize visual comparison interactions
    initializeVisualComparisons();
    
    // Calculate initial ROI silently (no notification)
    setTimeout(() => {
        // Silent initial calculation
        const farmSize = parseFloat(document.getElementById('farmSize')?.value) || 10;
        const currentYield = parseFloat(document.getElementById('currentYield')?.value) || 5;
        const cropPrice = parseFloat(document.getElementById('cropPrice')?.value) || 2000;
        const fertilizerCost = parseFloat(document.getElementById('fertilizerCost')?.value) || 800;
        
        const yieldIncrease = 0.35;
        const fertilizerReduction = 0.4;
        const costPerHectare = 125;
        
        const additionalYield = currentYield * yieldIncrease * farmSize;
        const additionalRevenue = additionalYield * cropPrice;
        const fertilizerSavings = fertilizerCost * fertilizerReduction * farmSize;
        const investment = costPerHectare * farmSize;
        const netProfit = additionalRevenue + fertilizerSavings - investment;
        const roiPercentage = (netProfit / investment) * 100;
        
        // Update display silently
        if (document.getElementById('additionalRevenue')) {
            document.getElementById('additionalRevenue').textContent = `RM ${additionalRevenue.toLocaleString()}`;
        }
        if (document.getElementById('fertilizerSavings')) {
            document.getElementById('fertilizerSavings').textContent = `RM ${fertilizerSavings.toLocaleString()}`;
        }
        if (document.getElementById('investment')) {
            document.getElementById('investment').textContent = `RM ${investment.toLocaleString()}`;
        }
        if (document.getElementById('netProfit')) {
            document.getElementById('netProfit').textContent = `RM ${netProfit.toLocaleString()}`;
        }
        if (document.getElementById('roiPercentage')) {
            document.getElementById('roiPercentage').textContent = `${Math.round(roiPercentage).toLocaleString()}%`;
        }
    }, 500);
    
    // Initialize presentation controls
    const slideCounter = document.getElementById('slideCounter');
    if (slideCounter) {
        slideCounter.textContent = '1 / 7';
    }
});

// Set initial active nav link based on current page
function setInitialActiveNavLink() {
    if (navLinks && navLinks.length > 0) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            link.classList.remove('active', 'text-primary-500', 'bg-primary-50');
            link.classList.add('text-gray-700');
            
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html')) {
                link.classList.add('active', 'text-primary-500', 'bg-primary-50');
                link.classList.remove('text-gray-700');
            }
        });
    }
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile nav on resize
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
}, 250));

// Add Tailwind-compatible CSS animations
function addTailwindAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        /* Custom animations for Tailwind */
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-fade-in-left {
            animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fade-in-right {
            animation: fadeInRight 1s ease-out;
        }
        
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        /* Mobile Navigation */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                padding-top: 2rem;
                transition: left 0.3s ease;
                z-index: 999;
                display: flex;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu .nav-link {
                width: 100%;
                text-align: center;
                padding: 1rem 2rem;
                margin: 0.5rem 0;
                border-radius: 0.5rem;
                transition: all 0.3s ease;
            }
            
            .nav-menu .nav-link:hover {
                background: rgba(76, 116, 95, 0.1);
                color: #4c745f;
            }
            
            .hamburger {
                z-index: 1001;
            }
            
            .hamburger span {
                transition: all 0.3s ease;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
                background-color: #4c745f;
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
                background-color: #4c745f;
            }
            
            body.nav-open {
                overflow: hidden;
            }
        }
        
        /* Header scroll effect */
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Active nav link styling */
        .nav-link.active {
            color: #4c745f;
            background: rgba(76, 116, 95, 0.1);
        }
        
        /* Navigation Dropdown Styles */
        .nav-dropdown {
            transform: translateY(0);
            pointer-events: none;
        }
        
        .group:hover .nav-dropdown {
            transform: translateY(0);
            pointer-events: auto;
        }
        
        .nav-dropdown-toggle:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(76, 116, 95, 0.2);
        }
        
        /* Mobile dropdown improvements */
        .mobile-dropdown.active .mobile-dropdown-content {
            border-top: 1px solid rgba(229, 231, 235, 0.5);
        }
        
        /* Form label animations */
        .peer:focus + label,
        .peer:not(:placeholder-shown) + label {
            transform: translateY(-2.5rem) scale(0.875);
            color: #4c745f;
        }
        
        /* Additional hover effects */
        .hover-lift {
            transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        /* ===== MODERN PRESENTATION MODE STYLES ===== */
        #presentationModal {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
            z-index: 9999 !important;
            overflow: hidden !important;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }
        
        #presentationModal.flex {
            display: flex !important;
        }
        
        #presentationModal.hidden {
            display: none !important;
        }
        
        /* Slide container with modern styling */
        #slideContainer {
            width: 100vw !important;
            height: 100vh !important;
            position: relative !important;
            overflow: hidden !important;
            perspective: 1000px !important;
        }
        
        /* Enhanced slide styling */
        .slide {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            display: none !important;
            align-items: center !important;
            justify-content: center !important;
            opacity: 0 !important;
            transform: translateX(100%) scale(0.95) !important;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
            padding: 3rem !important;
            box-sizing: border-box !important;
            background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
            backdrop-filter: blur(20px) !important;
            border-radius: 20px !important;
            margin: 2rem !important;
            box-shadow: 0 25px 50px rgba(76, 116, 95, 0.15), 0 0 0 1px rgba(76, 116, 95, 0.05) !important;
            border: 2px solid rgba(76, 116, 95, 0.1) !important;
        }
        
        /* Different background colors for different slide types */
        .slide[data-slide="1"] {
            background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
            border-color: rgba(76, 116, 95, 0.2) !important;
        }
        
        .slide[data-slide="2"] {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
            border-color: rgba(107, 114, 128, 0.2) !important;
        }
        
        .slide[data-slide="3"] {
            background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
            border-color: rgba(76, 116, 95, 0.2) !important;
        }
        
        .slide[data-slide="4"] {
            background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%) !important;
            border-color: rgba(244, 162, 97, 0.3) !important;
        }
        
        .slide[data-slide="5"] {
            background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
            border-color: rgba(76, 116, 95, 0.2) !important;
        }
        
        .slide[data-slide="6"] {
            background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
            border-color: rgba(107, 114, 128, 0.2) !important;
        }
        
        .slide[data-slide="7"] {
            background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
            border-color: rgba(76, 116, 95, 0.2) !important;
        }
        
        .slide.active {
            display: flex !important;
            opacity: 1 !important;
            transform: translateX(0) scale(1) !important;
        }
        
        .slide.prev {
            transform: translateX(-100%) scale(0.95) !important;
        }
        
        .slide.next {
            transform: translateX(100%) scale(0.95) !important;
        }
        
        /* Slide content with better spacing */
        .slide > div {
            max-width: 90vw !important;
            max-height: calc(100vh - 180px) !important;
            width: 100% !important;
            overflow-y: auto !important;
            padding: 2rem !important;
            box-sizing: border-box !important;
            scroll-behavior: smooth !important;
        }
        
        /* Enhanced typography for presentation with website colors */
        .slide h1 {
            font-size: clamp(2.5rem, 6vw, 5rem) !important;
            line-height: 1.1 !important;
            margin-bottom: 1.5rem !important;
            font-weight: 800 !important;
            color: #4c745f !important;
            text-shadow: 0 2px 4px rgba(76, 116, 95, 0.1) !important;
        }
        
        .slide h2 {
            font-size: clamp(2rem, 5vw, 3.5rem) !important;
            line-height: 1.2 !important;
            margin-bottom: 1.5rem !important;
            font-weight: 700 !important;
            color: #3d5f4c !important;
        }
        
        .slide h3 {
            font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
            line-height: 1.3 !important;
            margin-bottom: 1rem !important;
            font-weight: 600 !important;
            color: #2f4a3a !important;
        }
        
        .slide p, .slide li {
            font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
            line-height: 1.6 !important;
            margin-bottom: 1rem !important;
            color: #374151 !important;
        }
        
        /* Enhanced contact information visibility */
        .slide .space-y-4 p {
            color: #1f2937 !important;
            font-weight: 600 !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
        }
        
        .slide .grid.md\\:grid-cols-2 > div {
            color: #1f2937 !important;
            font-weight: 600 !important;
            background: rgba(255, 255, 255, 0.8) !important;
            padding: 1rem !important;
            border-radius: 12px !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(76, 116, 95, 0.2) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }
        
        .slide .grid.md\\:grid-cols-2 i {
            color: #4c745f !important;
        }
        
        /* Ensure all slide content has proper contrast */
        .slide div {
            color: #374151 !important;
        }
        
        /* Special styling for white overlay content */
        .slide .bg-white\\/10,
        .slide .bg-white\\/20 {
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(15px) !important;
            border: 1px solid rgba(76, 116, 95, 0.2) !important;
        }
        
        .slide .bg-white\\/10 *,
        .slide .bg-white\\/20 * {
            color: #1f2937 !important;
        }
        
        .slide .bg-white\\/10 .text-3xl,
        .slide .bg-white\\/20 .text-3xl {
            color: #4c745f !important;
            font-weight: 800 !important;
        }
        
        /* Modern navigation controls with website colors */
        .presentation-nav {
            position: fixed !important;
            bottom: 2rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            display: flex !important;
            align-items: center !important;
            gap: 1rem !important;
            background: rgba(76, 116, 95, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            border-radius: 50px !important;
            padding: 0.75rem 1.5rem !important;
            border: 1px solid rgba(240, 249, 244, 0.2) !important;
            z-index: 100 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 10px 25px rgba(76, 116, 95, 0.3) !important;
        }
        
        .presentation-nav:hover {
            background: rgba(61, 95, 76, 1) !important;
            transform: translateX(-50%) translateY(-5px) !important;
            box-shadow: 0 20px 40px rgba(76, 116, 95, 0.4) !important;
        }
        
        .presentation-nav button {
            width: 48px !important;
            height: 48px !important;
            border-radius: 50% !important;
            background: rgba(240, 249, 244, 0.15) !important;
            border: 1px solid rgba(240, 249, 244, 0.3) !important;
            color: #f0f9f4 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            transition: all 0.3s ease !important;
            font-size: 18px !important;
        }
        
        .presentation-nav button:hover {
            background: rgba(244, 162, 97, 0.8) !important;
            border-color: rgba(244, 162, 97, 1) !important;
            color: white !important;
            transform: scale(1.1) !important;
        }
        
        .presentation-nav button:disabled {
            opacity: 0.4 !important;
            pointer-events: none !important;
            background: rgba(47, 74, 58, 0.3) !important;
        }
        
        .slide-counter {
            color: #f0f9f4 !important;
            font-weight: 600 !important;
            font-size: 16px !important;
            min-width: 80px !important;
            text-align: center !important;
            padding: 0 1rem !important;
            background: rgba(244, 162, 97, 0.2) !important;
            border-radius: 20px !important;
            border: 1px solid rgba(244, 162, 97, 0.3) !important;
        }
        
        /* Modern slide indicators with website colors */
        .slide-indicators {
            position: fixed !important;
            bottom: 2rem !important;
            right: 2rem !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
            background: rgba(76, 116, 95, 0.9) !important;
            backdrop-filter: blur(15px) !important;
            border-radius: 20px !important;
            padding: 1rem 0.75rem !important;
            border: 1px solid rgba(240, 249, 244, 0.2) !important;
            z-index: 100 !important;
            box-shadow: 0 10px 25px rgba(76, 116, 95, 0.3) !important;
        }
        
        .slide-indicator {
            width: 12px !important;
            height: 12px !important;
            border-radius: 50% !important;
            background: rgba(240, 249, 244, 0.4) !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            border: 2px solid transparent !important;
        }
        
        .slide-indicator.active {
            background: #f4a261 !important;
            border-color: rgba(240, 249, 244, 0.5) !important;
            transform: scale(1.2) !important;
            box-shadow: 0 0 10px rgba(244, 162, 97, 0.5) !important;
        }
        
        .slide-indicator:hover {
            background: rgba(240, 249, 244, 0.8) !important;
            transform: scale(1.1) !important;
        }
        
        /* Modern exit button with website colors */
        .presentation-exit {
            position: fixed !important;
            top: 2rem !important;
            right: 2rem !important;
            width: 56px !important;
            height: 56px !important;
            border-radius: 50% !important;
            background: rgba(220, 38, 38, 0.9) !important;
            backdrop-filter: blur(15px) !important;
            border: 2px solid rgba(254, 226, 226, 0.3) !important;
            color: white !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            z-index: 100 !important;
            font-size: 20px !important;
            box-shadow: 0 10px 25px rgba(220, 38, 38, 0.3) !important;
        }
        
        .presentation-exit:hover {
            background: rgba(185, 28, 28, 1) !important;
            transform: scale(1.1) !important;
            box-shadow: 0 15px 30px rgba(220, 38, 38, 0.4) !important;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
            .slide {
                margin: 1rem !important;
                padding: 2rem !important;
                background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
                border: 2px solid rgba(76, 116, 95, 0.15) !important;
            }
            
            /* Mobile specific slide backgrounds */
            .slide[data-slide="1"] {
                background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
                border-color: rgba(76, 116, 95, 0.2) !important;
            }
            
            .slide[data-slide="2"] {
                background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
                border-color: rgba(107, 114, 128, 0.2) !important;
            }
            
            .slide[data-slide="3"] {
                background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
                border-color: rgba(76, 116, 95, 0.2) !important;
            }
            
            .slide[data-slide="4"] {
                background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%) !important;
                border-color: rgba(244, 162, 97, 0.3) !important;
            }
            
            .slide[data-slide="5"] {
                background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
                border-color: rgba(76, 116, 95, 0.2) !important;
            }
            
            .slide[data-slide="6"] {
                background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%) !important;
                border-color: rgba(107, 114, 128, 0.2) !important;
            }
            
            .slide[data-slide="7"] {
                background: linear-gradient(135deg, #f0f9f4 0%, #dcf4e8 100%) !important;
                border-color: rgba(76, 116, 95, 0.2) !important;
            }
            
            .slide > div {
                padding: 1.5rem !important;
                max-height: calc(100vh - 220px) !important;
            }
            
            .slide h1 {
                color: #4c745f !important;
                font-size: clamp(1.8rem, 8vw, 3rem) !important;
            }
            
            .slide h2 {
                color: #3d5f4c !important;
                font-size: clamp(1.4rem, 6vw, 2.2rem) !important;
            }
            
            .slide h3 {
                color: #2f4a3a !important;
                font-size: clamp(1.2rem, 5vw, 1.8rem) !important;
            }
            
            .slide p, .slide li {
                color: #374151 !important;
                font-size: clamp(0.9rem, 4vw, 1.3rem) !important;
            }
            
            .presentation-nav {
                bottom: 1rem !important;
                padding: 0.5rem 1rem !important;
                gap: 0.75rem !important;
                background: rgba(76, 116, 95, 0.98) !important;
            }
            
            .presentation-nav button {
                width: 44px !important;
                height: 44px !important;
                font-size: 16px !important;
                background: rgba(240, 249, 244, 0.2) !important;
                border: 1px solid rgba(240, 249, 244, 0.4) !important;
            }
            
            .presentation-nav button:hover {
                background: rgba(244, 162, 97, 0.9) !important;
            }
            
            .slide-counter {
                font-size: 14px !important;
                min-width: 60px !important;
                background: rgba(244, 162, 97, 0.3) !important;
                border: 1px solid rgba(244, 162, 97, 0.4) !important;
            }
            
            .slide-indicators {
                bottom: 1rem !important;
                right: 1rem !important;
                padding: 0.75rem 0.5rem !important;
                background: rgba(76, 116, 95, 0.95) !important;
            }
            
            .slide-indicator {
                width: 10px !important;
                height: 10px !important;
                background: rgba(240, 249, 244, 0.5) !important;
            }
            
            .slide-indicator.active {
                background: #f4a261 !important;
                box-shadow: 0 0 8px rgba(244, 162, 97, 0.6) !important;
            }
            
            .presentation-exit {
                top: 1rem !important;
                right: 1rem !important;
                width: 48px !important;
                height: 48px !important;
                font-size: 18px !important;
                background: rgba(220, 38, 38, 0.95) !important;
            }
            
            /* Mobile tap zones with website color theme */
            .tap-zone-left,
            .tap-zone-right {
                position: fixed !important;
                top: 0 !important;
                bottom: 0 !important;
                width: 25% !important;
                z-index: 50 !important;
                cursor: pointer !important;
                transition: background-color 0.2s ease !important;
            }
            
            .tap-zone-left {
                left: 0 !important;
                background: linear-gradient(to right, rgba(76, 116, 95, 0.05), transparent) !important;
            }
            
            .tap-zone-right {
                right: 0 !important;
                background: linear-gradient(to left, rgba(76, 116, 95, 0.05), transparent) !important;
            }
            
            .tap-zone-left:active {
                background: linear-gradient(to right, rgba(76, 116, 95, 0.15), transparent) !important;
            }
            
            .tap-zone-right:active {
                background: linear-gradient(to left, rgba(76, 116, 95, 0.15), transparent) !important;
            }
        }
        
        /* Animation keyframes */
        @keyframes slideInFromRight {
            from {
                opacity: 0;
                transform: translateX(100%) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }
        
        @keyframes slideInFromLeft {
            from {
                opacity: 0;
                transform: translateX(-100%) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }
        
        @keyframes slideOutToLeft {
            from {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
            to {
                opacity: 0;
                transform: translateX(-100%) scale(0.95);
            }
        }
        
        @keyframes slideOutToRight {
            from {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
            to {
                opacity: 0;
                transform: translateX(100%) scale(0.95);
            }
        }
        
        /* Fullscreen body adjustments */
        body.presentation-mode {
            overflow: hidden !important;
            position: fixed !important;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        /* Additional modern animations */
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(0.95);
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        
        /* Presentation loading animation */
        @keyframes presentationLoad {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(20px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        /* Enhanced slide animations */
        .slide.entering {
            animation: presentationLoad 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Presentation UI smooth reveals */
        .presentation-nav,
        .slide-indicators,
        .presentation-exit {
            animation: presentationLoad 1s ease-out 0.5s both;
        }
        
        /* Enhanced grid layouts */
        .slide .grid {
            gap: clamp(1rem, 3vw, 2.5rem) !important;
        }
        
        /* Modern card styling in slides with website colors */
        .slide .p-8, .slide .p-6, .slide .p-4 {
            padding: clamp(1.5rem, 4vw, 3rem) !important;
            border-radius: 16px !important;
            background: rgba(255, 255, 255, 0.9) !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid rgba(220, 244, 232, 0.6) !important;
            box-shadow: 0 4px 6px rgba(76, 116, 95, 0.05) !important;
            transition: all 0.3s ease !important;
            color: #1f2937 !important;
        }
        
        .slide .p-8 *, .slide .p-6 *, .slide .p-4 * {
            color: #1f2937 !important;
        }
        
        .slide .p-8:hover, .slide .p-6:hover, .slide .p-4:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 20px 25px rgba(76, 116, 95, 0.1) !important;
            border-color: rgba(76, 116, 95, 0.2) !important;
        }
    `;
    document.head.appendChild(style);
}

// Smooth reveal animations for sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        section.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});

// Mobile dropdown functionality
function initMobileDropdowns() {
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            const content = dropdown.querySelector('.mobile-dropdown-content');
            const icon = this.querySelector('.fas');
            
            // Close other dropdowns
            mobileDropdownToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    const otherDropdown = otherToggle.parentElement;
                    const otherContent = otherDropdown.querySelector('.mobile-dropdown-content');
                    const otherIcon = otherToggle.querySelector('.fas');
                    
                    otherContent.style.maxHeight = '0px';
                    otherIcon.style.transform = 'rotate(0deg)';
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            const isActive = dropdown.classList.contains('active');
            
            if (isActive) {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
                dropdown.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
                dropdown.classList.add('active');
            }
        });
    });
}

// Load saved notes from localStorage
function loadSavedNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('salesNotes') || '[]');
    if (savedNotes.length > 0) {
        const latestNotes = savedNotes[savedNotes.length - 1];
        
        // Populate form fields with latest notes
        if (document.getElementById('customerName')) document.getElementById('customerName').value = latestNotes.customerName || '';
        if (document.getElementById('farmLocation')) document.getElementById('farmLocation').value = latestNotes.farmLocation || '';
        if (document.getElementById('farmSizeNotes')) document.getElementById('farmSizeNotes').value = latestNotes.farmSize || '';
        if (document.getElementById('cropType')) document.getElementById('cropType').value = latestNotes.cropType || '';
        if (document.getElementById('customerChallenges')) document.getElementById('customerChallenges').value = latestNotes.challenges || '';
        if (document.getElementById('interestLevel')) document.getElementById('interestLevel').value = latestNotes.interestLevel || '';
        if (document.getElementById('nextSteps')) document.getElementById('nextSteps').value = latestNotes.nextSteps || '';
        if (document.getElementById('meetingNotes')) document.getElementById('meetingNotes').value = latestNotes.meetingNotes || '';
    }
}

// ======== SALES PITCH INTERACTIVE FUNCTIONS ========

// Animate soil health chart
function animateChart() {
    const canvas = document.getElementById('soilHealthChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Enhanced chart data with better colors
    const beforeData = [30, 25, 40, 20, 35]; // Before QL Eco Green
    const afterData = [85, 80, 90, 75, 88];  // After QL Eco Green
    const labels = ['pH Level', 'Nutrients', 'Organic Matter', 'Water Retention', 'Soil Structure'];
    
    // Website color scheme
    const beforeColor = '#ef4444'; // Red-500 for before
    const afterColor = '#4c745f';  // Primary green for after
    const textColor = '#374151';   // Gray-700 for text
    const gridColor = '#dcf4e8';   // Primary-100 for grid
    
    const barWidth = canvas.width / (labels.length * 2 + 1);
    const maxValue = 100;
    
    let animationProgress = 0;
    
    function drawChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set font
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'center';
        
        for (let i = 0; i < labels.length; i++) {
            const x1 = (i * 2 + 1) * barWidth;
            const x2 = (i * 2 + 2) * barWidth;
            
            // Before bars (red)
            const beforeHeight = (beforeData[i] / maxValue) * (canvas.height - 60) * animationProgress;
            ctx.fillStyle = beforeColor;
            ctx.fillRect(x1, canvas.height - 40 - beforeHeight, barWidth * 0.8, beforeHeight);
            
            // After bars (green)
            const afterHeight = (afterData[i] / maxValue) * (canvas.height - 60) * animationProgress;
            ctx.fillStyle = afterColor;
            ctx.fillRect(x2, canvas.height - 40 - afterHeight, barWidth * 0.8, afterHeight);
            
            // Labels
            ctx.fillStyle = textColor;
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText(labels[i], x1 + barWidth, canvas.height - 5);
            
            // Values
            if (animationProgress > 0.5) {
                ctx.fillStyle = beforeColor;
                ctx.fillText(Math.round(beforeData[i] * animationProgress), x1 + barWidth * 0.4, canvas.height - 45 - beforeHeight);
                ctx.fillStyle = afterColor;
                ctx.fillText(Math.round(afterData[i] * animationProgress), x2 + barWidth * 0.4, canvas.height - 45 - afterHeight);
            }
        }
        
        // Legend
        ctx.fillStyle = beforeColor;
        ctx.fillRect(20, 20, 15, 15);
        ctx.fillStyle = textColor;
        ctx.font = '12px Inter, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('Before QL Eco Green', 40, 32);
        
        ctx.fillStyle = afterColor;
        ctx.fillRect(180, 20, 15, 15);
        ctx.fillStyle = textColor;
        ctx.fillText('After QL Eco Green', 200, 32);
        
        animationProgress += 0.02;
        if (animationProgress <= 1) {
            requestAnimationFrame(drawChart);
        }
    }
    
    drawChart();
    showNotification('Soil health improvement animation started!', 'success');
}

// Calculate ROI function
function calculateROI() {
    const farmSize = parseFloat(document.getElementById('farmSize')?.value) || 10;
    const currentYield = parseFloat(document.getElementById('currentYield')?.value) || 5;
    const cropPrice = parseFloat(document.getElementById('cropPrice')?.value) || 2000;
    const fertilizerCost = parseFloat(document.getElementById('fertilizerCost')?.value) || 800;
    
    // Calculations
    const yieldIncrease = 0.35; // 35% average increase
    const fertilizerReduction = 0.4; // 40% reduction
    const costPerHectare = 125; // RM 125 per hectare
    
    const additionalYield = currentYield * yieldIncrease * farmSize;
    const additionalRevenue = additionalYield * cropPrice;
    const fertilizerSavings = fertilizerCost * fertilizerReduction * farmSize;
    const investment = costPerHectare * farmSize;
    const netProfit = additionalRevenue + fertilizerSavings - investment;
    const roiPercentage = (netProfit / investment) * 100;
    
    // Update display
    if (document.getElementById('additionalRevenue')) {
        document.getElementById('additionalRevenue').textContent = `RM ${additionalRevenue.toLocaleString()}`;
    }
    if (document.getElementById('fertilizerSavings')) {
        document.getElementById('fertilizerSavings').textContent = `RM ${fertilizerSavings.toLocaleString()}`;
    }
    if (document.getElementById('investment')) {
        document.getElementById('investment').textContent = `RM ${investment.toLocaleString()}`;
    }
    if (document.getElementById('netProfit')) {
        document.getElementById('netProfit').textContent = `RM ${netProfit.toLocaleString()}`;
    }
    if (document.getElementById('roiPercentage')) {
        document.getElementById('roiPercentage').textContent = `${Math.round(roiPercentage).toLocaleString()}%`;
    }
    
    // Only show notification when manually triggered (not on auto-calculation)
    const event = window.event;
    if (event && event.type === 'click') {
        showNotification('ROI calculation updated!', 'success');
    }
}

// Toggle comparison animations
function toggleComparison(element) {
    // Prevent event bubbling
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    // Find progress bars within this comparison item
    const progressBars = element.querySelectorAll('.yield-bar, .ph-bar, .organic-bar');
    
    if (progressBars.length === 0) {
        console.log('No progress bars found in element:', element);
        return;
    }
    
    progressBars.forEach(bar => {
        // Get current width or default to 0%
        const currentWidth = bar.style.width || '0%';
        
        if (currentWidth === '0%' || currentWidth === '') {
            // Show full progress based on bar type
            if (bar.classList.contains('yield-bar')) {
                bar.style.width = '74%'; // 5.8/7.8 = ~74%
            } else if (bar.classList.contains('ph-bar')) {
                bar.style.width = '85%'; // 6.8/8.0 = 85%
            } else if (bar.classList.contains('organic-bar')) {
                bar.style.width = '64%'; // 3.2/5.0 = 64%
            }
        } else {
            // Reset to 0
            bar.style.width = '0%';
        }
    });
    
    // Visual feedback
    element.classList.add('animate-pulse');
    setTimeout(() => {
        element.classList.remove('animate-pulse');
    }, 500);
    
    showNotification('Visual comparison toggled!', 'info');
}

// Download resource function
function downloadResource(type) {
    const resources = {
        'technical': {
            filename: 'QL_Eco_Green_Technical_Datasheet.pdf',
            content: `QL ECO GREEN TECHNICAL DATASHEET

PRODUCT SPECIFICATIONS:
- Product Name: QL Eco Green Organomineral Soil Conditioner
- Form: Powder
- Color: Dark Brown
- pH: 6.5-7.2
- Moisture Content: <12%
- Organic Matter: >45%

COMPOSITION:
- Organic Components: 45-55%
- Mineral Components: 35-45%
- Micronutrients: 5-10%
- Beneficial Microorganisms: >10^6 CFU/g

APPLICATION RATES:
- Low Application: 0.25-0.5 kg/ha
- Medium Application: 0.5-1.25 kg/ha (Recommended)
- High Application: 1.25-2.5 kg/ha

STORAGE CONDITIONS:
- Store in cool, dry place
- Avoid direct sunlight
- Shelf life: 24 months

CERTIFICATIONS:
- ISO 9001:2015
- SIRIM Certified
- DOA Approved

Contact: +603-7956 7399
Email: info@qlecogreen.com`
        },
        'calculator': {
            filename: 'QL_Eco_Green_ROI_Calculator.csv',
            content: `Farm Size (ha),Current Yield (t/ha),Crop Price (RM/t),Current Fertilizer Cost (RM/ha),Additional Revenue,Fertilizer Savings,Investment Cost,Net Profit,ROI %
10,5,2000,800,35000,3200,1250,36950,2956
20,4.5,2200,750,69300,6000,2500,72800,2912
50,6,1800,900,162000,18000,6250,173750,2780
100,5.5,2000,850,385000,34000,12500,406500,3252`
        },
        'cases': {
            filename: 'QL_Eco_Green_Case_Studies.pdf',
            content: `QL ECO GREEN SUCCESS STORIES

CASE STUDY 1: AHMAD IBRAHIM
Location: Kedah
Farm Size: 15 hectares
Crop: Rice
Results:
- Yield increase: 4.2 → 5.8 tons/hectare (38% increase)
- Additional revenue: RM 48,000 per season
- Investment: RM 1,875
- ROI: 2,456%

CASE STUDY 2: LIM CHONG WEI
Location: Cameron Highlands
Farm Size: 8 hectares
Crop: Vegetables (Cabbage, Lettuce)
Results:
- Quality premium: 45% higher prices
- Additional revenue: RM 32,000 per season
- Investment: RM 1,000
- ROI: 3,100%

CASE STUDY 3: SITI NURHALIZA
Location: Johor
Farm Size: 500 hectares
Crop: Palm Oil
Results:
- Yield increase: 35%
- Annual additional revenue: RM 2.1 million
- Investment: RM 62,500
- ROI: 3,260%

Contact: +603-7956 7399
Email: info@qlecogreen.com`
        },
        'brochure': {
            filename: 'QL_Eco_Green_Marketing_Brochure.pdf',
            content: `QL ECO GREEN - TRANSFORMING AGRICULTURE

REVOLUTIONARY SOIL CONDITIONING TECHNOLOGY

Key Benefits:
✓ 30-40% yield increase
✓ 50% reduction in chemical fertilizer use
✓ Improved soil health and structure
✓ Enhanced water retention
✓ Sustainable farming practices

Application:
- Easy application: 0.5-2.5 kg/hectare
- Works with all crop types
- Long-lasting effects (2-3 seasons)
- Compatible with existing practices

Investment Returns:
- Typical ROI: 2,500-3,500% in first season
- Payback period: 6-12 months
- Ongoing cost savings from reduced inputs

Why Choose QL Eco Green:
- ISO 9001:2015 certified
- SIRIM approved
- DOA registered
- 15+ years experience
- 1,200+ satisfied farmers

Get Started Today:
Phone: +603-7956 7399
Email: info@qlecogreen.com
Website: www.qlecogreen.com`
        }
    };
    
    const resource = resources[type];
    if (!resource) {
        showNotification('Resource not found!', 'error');
        return;
    }
    
    // Create and download file
    const blob = new Blob([resource.content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = resource.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification(`${resource.filename} downloaded successfully!`, 'success');
}

// Initialize form inputs with event listeners
function initializeSalesPitchInteractions() {
    // Auto-calculate ROI when inputs change (silent update)
    const roiInputs = ['farmSize', 'currentYield', 'cropPrice', 'fertilizerCost'];
    roiInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            // Use input event for silent auto-calculation
            input.addEventListener('input', () => {
                // Silent calculation - no notification
                const farmSize = parseFloat(document.getElementById('farmSize')?.value) || 10;
                const currentYield = parseFloat(document.getElementById('currentYield')?.value) || 5;
                const cropPrice = parseFloat(document.getElementById('cropPrice')?.value) || 2000;
                const fertilizerCost = parseFloat(document.getElementById('fertilizerCost')?.value) || 800;
                
                const yieldIncrease = 0.35;
                const fertilizerReduction = 0.4;
                const costPerHectare = 125;
                
                const additionalYield = currentYield * yieldIncrease * farmSize;
                const additionalRevenue = additionalYield * cropPrice;
                const fertilizerSavings = fertilizerCost * fertilizerReduction * farmSize;
                const investment = costPerHectare * farmSize;
                const netProfit = additionalRevenue + fertilizerSavings - investment;
                const roiPercentage = (netProfit / investment) * 100;
                
                // Update display silently
                if (document.getElementById('additionalRevenue')) {
                    document.getElementById('additionalRevenue').textContent = `RM ${additionalRevenue.toLocaleString()}`;
                }
                if (document.getElementById('fertilizerSavings')) {
                    document.getElementById('fertilizerSavings').textContent = `RM ${fertilizerSavings.toLocaleString()}`;
                }
                if (document.getElementById('investment')) {
                    document.getElementById('investment').textContent = `RM ${investment.toLocaleString()}`;
                }
                if (document.getElementById('netProfit')) {
                    document.getElementById('netProfit').textContent = `RM ${netProfit.toLocaleString()}`;
                }
                if (document.getElementById('roiPercentage')) {
                    document.getElementById('roiPercentage').textContent = `${Math.round(roiPercentage).toLocaleString()}%`;
                }
            });
        }
    });
    
    // Initialize comparison items for click interaction
    const comparisonItems = document.querySelectorAll('.comparison-item');
    comparisonItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleComparison(this);
        });
    });
    
    // Set up chart canvas if it exists
    const canvas = document.getElementById('soilHealthChart');
    if (canvas) {
        // Set initial canvas size
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        // Draw initial empty chart
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#f3f4f6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#6b7280';
        ctx.font = '16px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Click "Show Improvement" to see soil health benefits', canvas.width/2, canvas.height/2);
    }
    
    // Initialize presentation slide indicators
    updateSlideIndicators();
}

// Update slide indicators
function updateSlideIndicators() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (presentationMode) {
                goToSlide(index + 1);
            }
        });
    });
}

// Initialize mobile-friendly quick actions
function initializeMobileQuickActions() {
    const quickActions = document.getElementById('quickActions');
    const isMobile = window.innerWidth <= 768;
    
    if (quickActions && isMobile) {
        // Start collapsed on mobile
        quickActions.classList.add('collapsed');
        quickActionsCollapsed = true;
        
        // Update toggle icon
        const toggleIcon = document.getElementById('toggleIcon');
        if (toggleIcon) {
            toggleIcon.className = 'fas fa-chevron-left';
        }
    }
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile && quickActions) {
            // Auto-collapse on mobile
            if (!quickActionsCollapsed) {
                quickActions.classList.add('collapsed');
                quickActionsCollapsed = true;
                
                const toggleIcon = document.getElementById('toggleIcon');
                if (toggleIcon) {
                    toggleIcon.className = 'fas fa-chevron-left';
                }
            }
        }
    });
}

// Scroll to ROI Calculator section
function scrollToROICalculator() {
    // Find the ROI calculator section
    const roiSection = document.querySelector('section.py-16.bg-primary-50');
    
    if (roiSection) {
        // Get header height for offset
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 80;
        
        // Calculate scroll position
        const targetPosition = roiSection.offsetTop - headerHeight - 20;
        
        // Smooth scroll to the section
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Show notification
        showNotification('Scrolled to ROI Calculator - adjust values to see your farm\'s potential!', 'info');
        
        // Auto-collapse quick actions on mobile after scroll
        if (window.innerWidth <= 768) {
            const quickActions = document.getElementById('quickActions');
            if (quickActions && !quickActionsCollapsed) {
                toggleQuickActions();
            }
        }
    } else {
        showNotification('ROI Calculator section not found!', 'error');
    }
}

// ======== MODERN PRESENTATION MODE FUNCTIONS ========

let currentSlide = 1;
let totalSlides = 7;
let presentationMode = false;
let slideTransition = 'slide'; // 'slide', 'fade', 'zoom'
let autoAdvance = false;
let autoAdvanceInterval = null;

// Enhanced presentation configuration
const presentationConfig = {
    transitions: {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    autoAdvance: {
        enabled: false,
        duration: 30000 // 30 seconds per slide
    },
    gestures: {
        enabled: true,
        swipeThreshold: 50
    }
};

// Start modern presentation mode
function startPresentation() {
    const presentationModal = document.getElementById('presentationModal');
    if (!presentationModal) {
        showNotification('Presentation mode not available!', 'error');
        return;
    }
    
    // Initialize presentation
    presentationMode = true;
    currentSlide = 1;
    
    // Set up modal
    presentationModal.classList.remove('hidden');
    presentationModal.classList.add('flex');
    
    // Create modern presentation UI
    createPresentationUI();
    
    // Set up mobile tap zones
    if (window.innerWidth <= 768) {
        createMobileTapZones();
    }
    
    // Apply fullscreen styles
    document.body.classList.add('presentation-mode');
    document.body.style.overflow = 'hidden';
    
    // Prevent zooming on mobile
    updateViewportForPresentation();
    
    // Show first slide with animation
    showSlideWithTransition(1, 'initial');
    
    // Add event listeners
    addPresentationEventListeners();
    
    // Try to enter native fullscreen
    requestFullscreen(presentationModal);
    
    // Initialize slide indicators
    updateSlideIndicators();
    
    // Show welcome notification
    showNotification('🎯 Modern presentation started! Use gestures, keyboard, or navigation controls.', 'success');
    
    // Auto-announce current slide
    setTimeout(() => {
        announceSlide(1);
    }, 1000);
}

// Create modern presentation UI
function createPresentationUI() {
    const presentationModal = document.getElementById('presentationModal');
    
    // Remove old controls
    const oldControls = presentationModal.querySelectorAll('.absolute');
    oldControls.forEach(control => control.remove());
    
    // Create modern navigation bar
    const navBar = document.createElement('div');
    navBar.className = 'presentation-nav';
    navBar.innerHTML = `
        <button id="prevSlideBtn" onclick="previousSlide()" title="Previous slide (←)">
            <i class="fas fa-chevron-left"></i>
        </button>
        <div class="slide-counter" id="slideCounter">1 / ${totalSlides}</div>
        <button id="nextSlideBtn" onclick="nextSlide()" title="Next slide (→)">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    presentationModal.appendChild(navBar);
    
    // Create slide indicators
    const indicators = document.createElement('div');
    indicators.className = 'slide-indicators';
    for (let i = 1; i <= totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'slide-indicator';
        indicator.setAttribute('data-slide', i);
        indicator.onclick = () => goToSlide(i);
        indicator.title = `Go to slide ${i}`;
        indicators.appendChild(indicator);
    }
    presentationModal.appendChild(indicators);
    
    // Create modern exit button
    const exitBtn = document.createElement('button');
    exitBtn.className = 'presentation-exit';
    exitBtn.onclick = exitPresentation;
    exitBtn.title = 'Exit presentation (Esc)';
    exitBtn.innerHTML = '<i class="fas fa-times"></i>';
    presentationModal.appendChild(exitBtn);
}

// Create mobile tap zones
function createMobileTapZones() {
    const presentationModal = document.getElementById('presentationModal');
    
    // Left tap zone
    const leftZone = document.createElement('div');
    leftZone.className = 'tap-zone-left';
    leftZone.onclick = previousSlide;
    leftZone.title = 'Tap to go to previous slide';
    presentationModal.appendChild(leftZone);
    
    // Right tap zone
    const rightZone = document.createElement('div');
    rightZone.className = 'tap-zone-right';
    rightZone.onclick = nextSlide;
    rightZone.title = 'Tap to go to next slide';
    presentationModal.appendChild(rightZone);
}

// Enhanced slide transition function
function showSlideWithTransition(slideNumber, direction = 'next') {
    const slides = document.querySelectorAll('.slide');
    const targetSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
    
    if (!targetSlide) return;
    
    // Hide all slides first
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        if (index + 1 < slideNumber) {
            slide.classList.add('prev');
        } else if (index + 1 > slideNumber) {
            slide.classList.add('next');
        }
    });
    
    // Show target slide with animation
    setTimeout(() => {
        targetSlide.classList.add('active');
        
        // Add entrance animation based on direction
        if (direction === 'next') {
            targetSlide.style.animation = 'slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        } else if (direction === 'prev') {
            targetSlide.style.animation = 'slideInFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        } else {
            targetSlide.style.animation = 'slideInFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }
        
        // Clear animation after completion
        setTimeout(() => {
            targetSlide.style.animation = '';
        }, 600);
    }, 50);
    
    // Update navigation states
    updateNavigationStates();
}

// Enhanced navigation functions
function nextSlide() {
    if (!presentationMode) return;
    
    if (currentSlide < totalSlides) {
        const prevSlide = currentSlide;
        currentSlide++;
        showSlideWithTransition(currentSlide, 'next');
        updateSlideCounter();
        updateSlideIndicators();
        announceSlide(currentSlide);
        
        // Add smooth transition sound (if available)
        playTransitionSound('next');
    } else {
        // Gentle shake animation when at last slide
        shakeElement(document.getElementById('nextSlideBtn'));
        showNotification('Already at the last slide', 'info');
    }
}

function previousSlide() {
    if (!presentationMode) return;
    
    if (currentSlide > 1) {
        const prevSlide = currentSlide;
        currentSlide--;
        showSlideWithTransition(currentSlide, 'prev');
        updateSlideCounter();
        updateSlideIndicators();
        announceSlide(currentSlide);
        
        // Add smooth transition sound (if available)
        playTransitionSound('prev');
    } else {
        // Gentle shake animation when at first slide
        shakeElement(document.getElementById('prevSlideBtn'));
        showNotification('Already at the first slide', 'info');
    }
}

function goToSlide(slideNumber) {
    if (!presentationMode || slideNumber < 1 || slideNumber > totalSlides) return;
    
    const direction = slideNumber > currentSlide ? 'next' : 'prev';
    currentSlide = slideNumber;
    showSlideWithTransition(currentSlide, direction);
    updateSlideCounter();
    updateSlideIndicators();
    announceSlide(currentSlide);
    
    showNotification(`Jumped to slide ${slideNumber}`, 'info');
}

// Enhanced exit presentation
function exitPresentation() {
    if (!presentationMode) return;
    
    const presentationModal = document.getElementById('presentationModal');
    
    // Add exit animation
    presentationModal.style.animation = 'fadeOut 0.4s ease forwards';
    
    setTimeout(() => {
        presentationModal.classList.add('hidden');
        presentationModal.classList.remove('flex');
        presentationModal.style.animation = '';
        
        // Reset presentation state
        presentationMode = false;
        
        // Restore body styles
        document.body.classList.remove('presentation-mode');
        document.body.style.overflow = '';
        
        // Restore viewport
        restoreViewport();
        
        // Clear auto-advance if active
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
            autoAdvanceInterval = null;
        }
        
        // Remove keyboard navigation
        removePresentationEventListeners();
        
        // Exit fullscreen
        exitFullscreen();
        
        showNotification('Presentation ended successfully', 'success');
    }, 400);
}

// Enhanced keyboard navigation
function handlePresentationKeyboard(e) {
    if (!presentationMode) return;
    
    switch(e.key) {
        case 'ArrowRight':
        case ' ': // Spacebar
        case 'PageDown':
        case 'n': // Next
        case 'N':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
        case 'p': // Previous
        case 'P':
            e.preventDefault();
            previousSlide();
            break;
        case 'Escape':
            e.preventDefault();
            exitPresentation();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
        case 'f':
        case 'F':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'a':
        case 'A':
            e.preventDefault();
            toggleAutoAdvance();
            break;
        default:
            // Number keys 1-7 for direct slide navigation
            if (e.key >= '1' && e.key <= '7') {
                e.preventDefault();
                goToSlide(parseInt(e.key));
            }
            break;
    }
}

// Add presentation event listeners
function addPresentationEventListeners() {
    document.addEventListener('keydown', handlePresentationKeyboard);
    
    // Touch gesture support
    if (presentationConfig.gestures.enabled) {
        addTouchGestureSupport();
    }
    
    // Prevent context menu in presentation
    document.addEventListener('contextmenu', preventContextMenu);
    
    // Handle window resize
    window.addEventListener('resize', handlePresentationResize);
}

// Remove presentation event listeners
function removePresentationEventListeners() {
    document.removeEventListener('keydown', handlePresentationKeyboard);
    document.removeEventListener('contextmenu', preventContextMenu);
    window.removeEventListener('resize', handlePresentationResize);
    removeTouchGestureSupport();
}

// Touch gesture support
let touchStartX = 0;
let touchStartY = 0;

function addTouchGestureSupport() {
    const presentationModal = document.getElementById('presentationModal');
    
    presentationModal.addEventListener('touchstart', handleTouchStart, { passive: true });
    presentationModal.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function removeTouchGestureSupport() {
    const presentationModal = document.getElementById('presentationModal');
    if (presentationModal) {
        presentationModal.removeEventListener('touchstart', handleTouchStart);
        presentationModal.removeEventListener('touchend', handleTouchEnd);
    }
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Horizontal swipe detection
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > presentationConfig.gestures.swipeThreshold) {
        if (deltaX > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            previousSlide();
        }
    }
    
    // Reset touch coordinates
    touchStartX = 0;
    touchStartY = 0;
}

// Update navigation states
function updateNavigationStates() {
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 1;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSlide === totalSlides;
    }
}

// Update slide counter with animation
function updateSlideCounter() {
    const slideCounter = document.getElementById('slideCounter');
    if (slideCounter) {
        slideCounter.style.transform = 'scale(1.1)';
        slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
        
        setTimeout(() => {
            slideCounter.style.transform = 'scale(1)';
        }, 200);
    }
}

// Enhanced slide indicators
function updateSlideIndicators() {
    const indicators = document.querySelectorAll('.slide-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index + 1 === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// Utility functions
function updateViewportForPresentation() {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
}

function restoreViewport() {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    }
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.log('Exit fullscreen error:', err));
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function toggleFullscreen() {
    if (document.fullscreenElement) {
        exitFullscreen();
        showNotification('Exited fullscreen mode', 'info');
    } else {
        requestFullscreen(document.getElementById('presentationModal'));
        showNotification('Entered fullscreen mode', 'success');
    }
}

function preventContextMenu(e) {
    if (presentationMode) {
        e.preventDefault();
    }
}

function handlePresentationResize() {
    if (presentationMode && window.innerWidth <= 768) {
        // Recreate mobile tap zones if needed
        const existingZones = document.querySelectorAll('.tap-zone-left, .tap-zone-right');
        if (existingZones.length === 0) {
            createMobileTapZones();
        }
    }
}

// Enhanced features
function toggleAutoAdvance() {
    autoAdvance = !autoAdvance;
    
    if (autoAdvance) {
        autoAdvanceInterval = setInterval(() => {
            if (currentSlide < totalSlides) {
                nextSlide();
            } else {
                toggleAutoAdvance(); // Stop at end
            }
        }, presentationConfig.autoAdvance.duration);
        
        showNotification(`Auto-advance enabled (${presentationConfig.autoAdvance.duration / 1000}s per slide)`, 'success');
    } else {
        if (autoAdvanceInterval) {
            clearInterval(autoAdvanceInterval);
            autoAdvanceInterval = null;
        }
        showNotification('Auto-advance disabled', 'info');
    }
}

function announceSlide(slideNumber) {
    const slideNames = [
        'Welcome & Introduction',
        'The Challenge',
        'Our Solution',
        'Proven Results',
        'ROI Calculator',
        'Success Stories',
        'Next Steps'
    ];
    
    const slideName = slideNames[slideNumber - 1] || `Slide ${slideNumber}`;
    showNotification(`📊 ${slideName} (${slideNumber}/${totalSlides})`, 'info');
}

function playTransitionSound(direction) {
    // Subtle audio feedback (if audio context is available)
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(direction === 'next' ? 800 : 600, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Audio not available, ignore
    }
}

function shakeElement(element) {
    if (!element) return;
    
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// ======== SALES TEAM QUICK ACTIONS ========

let quickActionsCollapsed = false;
let notesPanelOpen = false;

// Toggle quick actions panel
function toggleQuickActions() {
    const quickActions = document.getElementById('quickActions');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (!quickActions || !toggleIcon) return;
    
    quickActionsCollapsed = !quickActionsCollapsed;
    
    if (quickActionsCollapsed) {
        quickActions.classList.add('collapsed');
        toggleIcon.className = 'fas fa-chevron-left';
    } else {
        quickActions.classList.remove('collapsed');
        toggleIcon.className = 'fas fa-tools';
    }
}

// Toggle notes panel
function toggleNotes() {
    const notesPanel = document.getElementById('notesPanel');
    if (!notesPanel) return;
    
    notesPanelOpen = !notesPanelOpen;
    
    if (notesPanelOpen) {
        notesPanel.classList.add('open');
        loadSavedNotes();
        
        // Add click outside to close functionality
        setTimeout(() => {
            document.addEventListener('click', handleClickOutsideNotes);
        }, 100);
        
        showNotification('Customer notes panel opened', 'info');
    } else {
        notesPanel.classList.remove('open');
        document.removeEventListener('click', handleClickOutsideNotes);
        showNotification('Customer notes panel closed', 'info');
    }
}

// Handle clicking outside notes panel to close it
function handleClickOutsideNotes(event) {
    const notesPanel = document.getElementById('notesPanel');
    const quickActions = document.getElementById('quickActions');
    
    // Don't close if clicking inside the notes panel or on the notes button
    if (notesPanel && 
        !notesPanel.contains(event.target) && 
        !quickActions?.contains(event.target) &&
        !event.target.closest('.quick-actions')) {
        
        toggleNotes();
    }
}

// Schedule follow-up
function scheduleFollowUp() {
    const customerName = document.getElementById('customerName')?.value || 'Customer';
    const now = new Date();
    const followUpDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 1 week from now
    
    const followUpText = `Follow-up scheduled for ${customerName} on ${followUpDate.toDateString()}`;
    
    // Create calendar event (basic implementation)
    const calendarEvent = {
        title: `Follow-up: ${customerName} - QL Eco Green`,
        start: followUpDate.toISOString(),
        description: 'Follow up on QL Eco Green soil conditioner discussion'
    };
    
    showNotification(`Follow-up scheduled for ${followUpDate.toDateString()}`, 'success');
    
    // You can integrate with calendar APIs here
    console.log('Calendar event:', calendarEvent);
}

// Generate proposal
function generateProposal() {
    const customerName = document.getElementById('customerName')?.value || 'Valued Customer';
    const farmSize = document.getElementById('farmSizeNotes')?.value || '10';
    const cropType = document.getElementById('cropType')?.value || 'Various crops';
    
    const proposalContent = `PROPOSAL FOR ${customerName.toUpperCase()}

QL ECO GREEN SOIL CONDITIONING SOLUTION

Farm Details:
- Size: ${farmSize} hectares
- Crop Type: ${cropType}
- Date: ${new Date().toDateString()}

Recommended Solution:
- Product: QL Eco Green Organomineral Soil Conditioner
- Application Rate: 1.25 kg/hectare
- Total Quantity Needed: ${parseFloat(farmSize) * 1.25} kg
- Investment: RM ${parseFloat(farmSize) * 125}

Expected Benefits:
- Yield increase: 30-40%
- Reduced fertilizer costs: 40%
- Improved soil health
- Long-term sustainability

Next Steps:
1. Soil testing (FREE)
2. Trial application (1 hectare)
3. Full implementation

Contact: +603-7956 7399
Email: info@qlecogreen.com

Valid for 30 days from date of issue.`;
    
    // Download proposal
    const blob = new Blob([proposalContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `QL_Eco_Green_Proposal_${customerName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Proposal generated and downloaded!', 'success');
}

// Send email
function sendEmail() {
    const customerName = document.getElementById('customerName')?.value || 'Customer';
    const farmSize = document.getElementById('farmSizeNotes')?.value || '10';
    
    const subject = `QL Eco Green Solution for ${customerName}`;
    const body = `Dear ${customerName},

Thank you for your interest in QL Eco Green soil conditioning solutions.

Based on our discussion about your ${farmSize} hectare farm, I wanted to follow up with some key information:

Key Benefits for Your Farm:
• 30-40% yield increase potential
• Significant reduction in chemical fertilizer costs
• Improved soil health and sustainability
• ROI typically achieved within 6-12 months

Next Steps:
1. FREE soil assessment
2. Customized application plan
3. Trial program available

I'd be happy to schedule a follow-up call or farm visit to discuss this further.

Best regards,
QL Eco Green Sales Team
Phone: +603-7956 7399
Email: info@qlecogreen.com`;
    
    // Create mailto link
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    showNotification('Email template opened in your email client!', 'success');
}

// View customer info
function viewCustomerInfo() {
    const customerName = document.getElementById('customerName')?.value || 'No name entered';
    const farmLocation = document.getElementById('farmLocation')?.value || 'No location entered';
    const farmSize = document.getElementById('farmSizeNotes')?.value || 'No size entered';
    const cropType = document.getElementById('cropType')?.value || 'No crop type entered';
    const interestLevel = document.getElementById('interestLevel')?.value || 'Not specified';
    
    const infoSummary = `CUSTOMER INFORMATION SUMMARY

Name: ${customerName}
Location: ${farmLocation}
Farm Size: ${farmSize} hectares
Crop Type: ${cropType}
Interest Level: ${interestLevel}

Generated on: ${new Date().toLocaleString()}`;
    
    // Show in a modal or alert
    alert(infoSummary);
    showNotification('Customer information displayed!', 'info');
}

// Save notes
function saveNotes() {
    const notesData = {
        timestamp: Date.now(),
        customerName: document.getElementById('customerName')?.value || '',
        farmLocation: document.getElementById('farmLocation')?.value || '',
        farmSize: document.getElementById('farmSizeNotes')?.value || '',
        cropType: document.getElementById('cropType')?.value || '',
        challenges: document.getElementById('customerChallenges')?.value || '',
        interestLevel: document.getElementById('interestLevel')?.value || '',
        nextSteps: document.getElementById('nextSteps')?.value || '',
        meetingNotes: document.getElementById('meetingNotes')?.value || ''
    };
    
    // Get existing notes
    const existingNotes = JSON.parse(localStorage.getItem('salesNotes') || '[]');
    existingNotes.push(notesData);
    
    // Save to localStorage
    localStorage.setItem('salesNotes', JSON.stringify(existingNotes));
    
    showNotification('Notes saved successfully!', 'success');
}

// Export notes
function exportNotes() {
    const notesData = JSON.parse(localStorage.getItem('salesNotes') || '[]');
    
    if (notesData.length === 0) {
        showNotification('No notes to export!', 'error');
        return;
    }
    
    let exportContent = 'QL ECO GREEN - SALES NOTES EXPORT\n';
    exportContent += '=' .repeat(50) + '\n\n';
    
    notesData.forEach((note, index) => {
        exportContent += `MEETING ${index + 1} - ${new Date(note.timestamp).toLocaleString()}\n`;
        exportContent += '-'.repeat(30) + '\n';
        exportContent += `Customer: ${note.customerName}\n`;
        exportContent += `Location: ${note.farmLocation}\n`;
        exportContent += `Farm Size: ${note.farmSize} hectares\n`;
        exportContent += `Crop Type: ${note.cropType}\n`;
        exportContent += `Interest Level: ${note.interestLevel}\n`;
        exportContent += `Challenges: ${note.challenges}\n`;
        exportContent += `Next Steps: ${note.nextSteps}\n`;
        exportContent += `Meeting Notes: ${note.meetingNotes}\n\n`;
    });
    
    // Download the notes
    const blob = new Blob([exportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `QL_Eco_Green_Sales_Notes_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Sales notes exported successfully!', 'success');
}

// Request sample
function requestSample() {
    const customerName = document.getElementById('customerName')?.value || prompt('Enter customer name:') || 'Customer';
    const farmLocation = document.getElementById('farmLocation')?.value || prompt('Enter farm location:') || 'Location';
    
    const sampleRequest = `SAMPLE REQUEST

Customer: ${customerName}
Location: ${farmLocation}
Date: ${new Date().toDateString()}
Requested by: Sales Team

Sample Package:
- 500g QL Eco Green soil conditioner
- Application instructions
- Measurement tools
- Trial tracking sheet

Shipping Instructions:
Please arrange delivery to customer location.

Contact: +603-7956 7399
Email: info@qlecogreen.com`;
    
    console.log('Sample request:', sampleRequest);
    showNotification(`Sample request generated for ${customerName}!`, 'success');
    
    // In a real application, this would send to your fulfillment system
}

// Schedule demo
function scheduleDemo() {
    const customerName = document.getElementById('customerName')?.value || prompt('Enter customer name:') || 'Customer';
    const preferredDate = prompt('Enter preferred demo date (DD/MM/YYYY):') || 'TBD';
    
    const demoSchedule = `DEMO SCHEDULED

Customer: ${customerName}
Preferred Date: ${preferredDate}
Demo Type: On-farm demonstration
Duration: 2-3 hours

Demo Agenda:
1. Soil assessment
2. Product explanation
3. Application demonstration
4. Q&A session
5. Trial setup

Preparation Required:
- Soil samples
- Application equipment
- Product samples
- Demonstration materials

Contact: +603-7956 7399
Email: info@qlecogreen.com`;
    
    console.log('Demo scheduled:', demoSchedule);
    showNotification(`Demo scheduled for ${customerName} on ${preferredDate}!`, 'success');
}

// Initialize visual comparison interactions
function initializeVisualComparisons() {
    const comparisonItems = document.querySelectorAll('.comparison-item');
    
    comparisonItems.forEach(item => {
        // Add click event listener
        item.addEventListener('click', function(e) {
            e.preventDefault();
            toggleComparison(this);
        });
        
        // Add touch event listener for mobile devices
        item.addEventListener('touchend', function(e) {
            e.preventDefault();
            toggleComparison(this);
        });
        
        // Add visual feedback for interaction
        item.style.cursor = 'pointer';
        item.style.userSelect = 'none';
    });
} 