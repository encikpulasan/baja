interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  badge?: string;
  badgeColor?: string;
  specifications: Array<{
    label: string;
    value: string;
  }>;
}

export default function ProductCard({
  name,
  description,
  imageUrl,
  badge,
  badgeColor = "bg-primary-500",
  specifications,
}: ProductCardProps) {
  return (
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div class="relative">
        <img
          src={imageUrl}
          alt={name}
          class="w-full h-48 object-cover"
        />
        {badge && (
          <div
            class={`absolute top-4 left-4 ${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {badge}
          </div>
        )}
      </div>
      <div class="p-8">
        <h3 class="text-xl font-bold text-primary-500 mb-4">{name}</h3>
        <p class="text-gray-600 mb-6">{description}</p>

        <div class="space-y-3 mb-6">
          {specifications.map((spec, index) => (
            <div key={index} class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-500">
                {spec.label}
              </span>
              <span class="text-sm text-gray-900">{spec.value}</span>
            </div>
          ))}
        </div>

        <button class="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
