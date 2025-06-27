interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard(
  { icon, title, description }: BenefitCardProps,
) {
  return (
    <div class="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      <div class="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class={`${icon} text-white text-2xl`}></i>
      </div>
      <h4 class="text-xl font-bold text-primary-500 mb-4">{title}</h4>
      <p class="text-gray-600">{description}</p>
    </div>
  );
}
