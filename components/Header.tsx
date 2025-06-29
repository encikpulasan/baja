import MobileNav from "../islands/MobileNav.tsx";

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  // Helper function to check if a path is active
  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  // Helper function to check if any dropdown item is active
  const isDropdownActive = (paths: string[]) => {
    return paths.some((path) => isActive(path));
  };

  // Helper function to get nav link classes
  const getNavLinkClasses = (path: string) => {
    const baseClasses =
      "nav-link px-4 py-2 rounded-lg font-medium transition-all duration-300";
    const activeClasses = "text-primary-500 bg-primary-50";
    const inactiveClasses =
      "text-gray-700 hover:text-primary-500 hover:bg-primary-50";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  // Helper function to get dropdown button classes
  const getDropdownButtonClasses = (paths: string[]) => {
    const baseClasses =
      "nav-dropdown-toggle px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center";
    const activeClasses = "text-primary-500 bg-primary-50";
    const inactiveClasses =
      "text-gray-700 hover:text-primary-500 hover:bg-primary-50";

    return `${baseClasses} ${
      isDropdownActive(paths) ? activeClasses : inactiveClasses
    }`;
  };

  // Helper function to get dropdown item classes
  const getDropdownItemClasses = (
    path: string,
    isFirst = false,
    isLast = false,
  ) => {
    const baseClasses = "block px-4 py-3 transition-colors";
    const activeClasses = "text-primary-500 bg-primary-50";
    const inactiveClasses =
      "text-gray-700 hover:text-primary-500 hover:bg-primary-50";
    const roundingClasses = isFirst
      ? "rounded-t-lg"
      : isLast
      ? "rounded-b-lg"
      : "";

    return `${baseClasses} ${
      isActive(path) ? activeClasses : inactiveClasses
    } ${roundingClasses}`;
  };

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
                class={getNavLinkClasses("/")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                class={getNavLinkClasses("/products")}
              >
                Products
              </a>
            </li>

            {/* Company Dropdown */}
            <li class="relative group">
              <button
                class={getDropdownButtonClasses([
                  "/about",
                  "/research",
                  "/news",
                  "/project-overview",
                ])}
              >
                Company
                <i class="fas fa-chevron-down ml-1 text-sm group-hover:rotate-180 transition-transform duration-200">
                </i>
              </button>
              <div class="nav-dropdown absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/about"
                  class={getDropdownItemClasses("/about", true)}
                >
                  About Us
                </a>
                <a
                  href="/research"
                  class={getDropdownItemClasses("/research")}
                >
                  Research
                </a>
                <a
                  href="/news"
                  class={getDropdownItemClasses("/news")}
                >
                  News
                </a>
                <a
                  href="/project-overview"
                  class={getDropdownItemClasses(
                    "/project-overview",
                    false,
                    true,
                  )}
                >
                  Project Overview
                </a>
              </div>
            </li>

            {/* Resources Dropdown */}
            <li class="relative group">
              <button
                class={getDropdownButtonClasses([
                  "/training",
                  "/faq",
                  "/downloads",
                ])}
              >
                Resources
                <i class="fas fa-chevron-down ml-1 text-sm group-hover:rotate-180 transition-transform duration-200">
                </i>
              </button>
              <div class="nav-dropdown absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a
                  href="/training"
                  class={getDropdownItemClasses("/training", true)}
                >
                  Training
                </a>
                <a
                  href="/faq"
                  class={getDropdownItemClasses("/faq")}
                >
                  FAQ
                </a>
                <a
                  href="/downloads"
                  class={getDropdownItemClasses("/downloads", false, true)}
                >
                  Downloads
                </a>
              </div>
            </li>

            <li>
              <a
                href="/contact"
                class={getNavLinkClasses("/contact")}
              >
                Contact
              </a>
            </li>
          </ul>

          <MobileNav currentPath={currentPath} />
        </div>
      </nav>
    </header>
  );
}
