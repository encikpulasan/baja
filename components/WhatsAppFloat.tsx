export default function WhatsAppFloat() {
  return (
    <>
      <div id="whatsapp-float" class="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/60163399989?text=Hello%20QL%20Eco%20Green!%20I'm%20interested%20in%20learning%20more%20about%20your%20soil%20conditioning%20solutions."
          target="_blank"
          class="whatsapp-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-3 group"
        >
          <i class="fab fa-whatsapp text-2xl"></i>
          <span class="whatsapp-text hidden group-hover:block bg-green-600 px-3 py-1 rounded-lg text-sm font-medium absolute right-full mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
            Chat with us on WhatsApp
          </span>
        </a>
      </div>

      <style>
        {`
          #whatsapp-float {
            animation: whatsapp-pulse 2s infinite;
          }

          @keyframes whatsapp-pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          .whatsapp-btn:hover {
            animation: none;
          }

          @media (max-width: 768px) {
            .whatsapp-text {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
