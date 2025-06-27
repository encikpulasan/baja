export default function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <i class="fas fa-leaf text-white text-lg"></i>
              </div>
              <span class="text-xl font-bold">QL Eco Green</span>
            </div>
            <p class="text-gray-300 leading-relaxed max-w-md">
              Pioneering sustainable agriculture solutions for a healthier
              planet and more productive farming.
            </p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="/"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-6">Support</h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="/downloads"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-300">
            &copy; 2024 QL Eco Green. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              class="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
