import MobileNav from "../islands/MobileNav.tsx";

export default function Header() {
  return (
    <header class="header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <nav class="py-4">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <i class="fas fa-leaf text-white text-lg"></i>
            </div>
            <span class="text-xl font-bold text-primary-500">QL Eco Green</span>
          </div>

          <ul class="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="/"
                class="nav-link px-4 py-2 rounded-lg font-medium text-primary-500 bg-primary-50 transition-all duration-300 active"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                class="nav-link px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                Products
              </a>
            </li>

            {/* Company Dropdown */}
            <li class="relative group">
              <button class="nav-dropdown-toggle px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 flex items-center">
                Company
                <i class="fas fa-chevron-down ml-1 text-sm group-hover:rotate-180 transition-transform duration-200">
                </i>
              </button>
              <div class="nav-dropdown absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/about"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors rounded-t-lg"
                >
                  About Us
                </a>
                <a
                  href="/research"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                >
                  Research
                </a>
                <a
                  href="/news"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors rounded-b-lg"
                >
                  News
                </a>
              </div>
            </li>

            {/* Resources Dropdown */}
            <li class="relative group">
              <button class="nav-dropdown-toggle px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 flex items-center">
                Resources
                <i class="fas fa-chevron-down ml-1 text-sm group-hover:rotate-180 transition-transform duration-200">
                </i>
              </button>
              <div class="nav-dropdown absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/training"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors rounded-t-lg"
                >
                  Training
                </a>
                <a
                  href="/faq"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/downloads"
                  class="block px-4 py-3 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors rounded-b-lg"
                >
                  Downloads
                </a>
              </div>
            </li>

            <li>
              <a
                href="/contact"
                class="nav-link px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
