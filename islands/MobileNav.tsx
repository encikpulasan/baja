import { useState } from "preact/hooks";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCompany = () => {
    setCompanyOpen(!companyOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <div class="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        class={`hamburger flex flex-col cursor-pointer space-y-1 ${
          isOpen ? "active" : ""
        }`}
      >
        <span
          class={`w-6 h-0.5 bg-primary-500 rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        >
        </span>
        <span
          class={`w-6 h-0.5 bg-primary-500 rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        >
        </span>
        <span
          class={`w-6 h-0.5 bg-primary-500 rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        >
        </span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        class={`nav-menu absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a
          href="/"
          class="nav-link block px-6 py-4 text-primary-500 bg-primary-50 active"
        >
          Home
        </a>
        <a
          href="/products"
          class="nav-link block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
        >
          Products
        </a>

        {/* Company Section */}
        <div class="mobile-dropdown">
          <button
            onClick={toggleCompany}
            class="mobile-dropdown-toggle w-full flex justify-between items-center px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
          >
            <span>Company</span>
            <i
              class={`fas fa-chevron-down transition-transform duration-200 ${
                companyOpen ? "rotate-180" : ""
              }`}
            >
            </i>
          </button>
          <div
            class={`mobile-dropdown-content overflow-hidden transition-all duration-300 bg-gray-50 ${
              companyOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <a
              href="/about"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              About Us
            </a>
            <a
              href="/research"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              Research
            </a>
            <a
              href="/news"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              News
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div class="mobile-dropdown">
          <button
            onClick={toggleResources}
            class="mobile-dropdown-toggle w-full flex justify-between items-center px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
          >
            <span>Resources</span>
            <i
              class={`fas fa-chevron-down transition-transform duration-200 ${
                resourcesOpen ? "rotate-180" : ""
              }`}
            >
            </i>
          </button>
          <div
            class={`mobile-dropdown-content overflow-hidden transition-all duration-300 bg-gray-50 ${
              resourcesOpen ? "max-h-40" : "max-h-0"
            }`}
          >
            <a
              href="/training"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              Training
            </a>
            <a
              href="/faq"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              FAQ
            </a>
            <a
              href="/downloads"
              class="block px-10 py-3 text-gray-600 hover:text-primary-500 transition-colors"
            >
              Downloads
            </a>
          </div>
        </div>

        <a
          href="/contact"
          class="nav-link block px-6 py-4 text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
