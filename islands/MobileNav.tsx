import { useState } from "preact/hooks";

interface MobileNavProps {
  currentPath: string;
}

export default function MobileNav({ currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  // Helper function to get nav link classes
  const getNavLinkClasses = (path: string) => {
    const baseClasses = "block px-6 py-3 text-lg font-medium transition-colors";
    const activeClasses = "text-primary-500 bg-primary-50";
    const inactiveClasses =
      "text-gray-700 hover:text-primary-500 hover:bg-primary-50";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div class="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        class="mobile-menu-btn p-2 rounded-lg text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen
            ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )
            : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          class="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        class={`mobile-menu fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="flex flex-col h-full">
          {/* Mobile menu header */}
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <i class="fas fa-leaf text-white"></i>
              </div>
              <span class="text-lg font-bold text-primary-500">
                QL Eco Green
              </span>
            </div>
            <button
              onClick={closeMenu}
              class="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>

          {/* Mobile navigation links */}
          <nav class="flex-1 overflow-y-auto">
            <div class="py-4">
              <a
                href="/"
                onClick={closeMenu}
                class={getNavLinkClasses("/")}
              >
                <i class="fas fa-home mr-3"></i>
                Home
              </a>

              <a
                href="/products"
                onClick={closeMenu}
                class={getNavLinkClasses("/products")}
              >
                <i class="fas fa-seedling mr-3"></i>
                Products
              </a>

              {/* Company Section */}
              <div class="border-t border-gray-200 mt-4 pt-4">
                <div class="px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Company
                </div>
                <a
                  href="/about"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/about")}
                >
                  <i class="fas fa-building mr-3"></i>
                  About Us
                </a>
                <a
                  href="/research"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/research")}
                >
                  <i class="fas fa-microscope mr-3"></i>
                  Research
                </a>
                <a
                  href="/news"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/news")}
                >
                  <i class="fas fa-newspaper mr-3"></i>
                  News
                </a>
                <a
                  href="/project-overview"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/project-overview")}
                >
                  <i class="fas fa-rocket mr-3"></i>
                  Project Overview
                </a>
              </div>

              {/* Resources Section */}
              <div class="border-t border-gray-200 mt-4 pt-4">
                <div class="px-6 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Resources
                </div>
                <a
                  href="/training"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/training")}
                >
                  <i class="fas fa-graduation-cap mr-3"></i>
                  Training
                </a>
                <a
                  href="/faq"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/faq")}
                >
                  <i class="fas fa-question-circle mr-3"></i>
                  FAQ
                </a>
                <a
                  href="/downloads"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/downloads")}
                >
                  <i class="fas fa-download mr-3"></i>
                  Downloads
                </a>
              </div>

              <div class="border-t border-gray-200 mt-4 pt-4">
                <a
                  href="/contact"
                  onClick={closeMenu}
                  class={getNavLinkClasses("/contact")}
                >
                  <i class="fas fa-phone mr-3"></i>
                  Contact
                </a>
              </div>
            </div>
          </nav>

          {/* Mobile menu footer */}
          <div class="border-t border-gray-200 p-6">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              onClick={closeMenu}
            >
              <i class="fab fa-whatsapp mr-2"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
