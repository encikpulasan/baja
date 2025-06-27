interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
  imageUrl?: string;
  backgroundGradient?: string;
  withStats?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  imageUrl,
  backgroundGradient = "bg-gradient-to-br from-gray-50 to-green-50",
  withStats = true,
}: HeroSectionProps) {
  return (
    <section
      className={`min-h-screen flex items-center ${backgroundGradient} relative overflow-hidden pt-20`}
    >
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute inset-0"
          style={{
            backgroundImage:
              `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234c745f" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div class="hero-content space-y-8 animate-fade-in-left">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {title}
            </span>
            {subtitle && (
              <>
                <br />
                <span class="text-gray-900">{subtitle}</span>
              </>
            )}
          </h1>
          <p class="text-xl text-gray-600 max-w-lg leading-relaxed">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div class="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {primaryButton.icon && <i class={primaryButton.icon}></i>}
                  <span>{primaryButton.text}</span>
                </a>
              )}
              {secondaryButton && (
                <a
                  href={secondaryButton.href}
                  class="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-primary-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  {secondaryButton.icon && <i class={secondaryButton.icon}></i>}
                  <span>{secondaryButton.text}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {imageUrl && (
          <div class="hero-image animate-fade-in-right">
            <div class="floating-card relative rounded-3xl overflow-hidden shadow-2xl animate-float">
              <img
                src={imageUrl}
                alt="Hero Image"
                class="w-full h-96 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
