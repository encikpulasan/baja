import { useState } from "preact/hooks";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (
      !formData.firstName || !formData.lastName || !formData.email ||
      !formData.message
    ) {
      setSubmitStatus("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      // Here you would normally send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus(
        "Thank you for your message! We'll get back to you soon.",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    } catch (error) {
      setSubmitStatus(
        "There was an error sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div class="bg-white p-8 rounded-2xl shadow-lg">
      <h2 class="text-3xl font-bold text-primary-500 mb-8">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} class="space-y-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="relative">
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onInput={(e) =>
                handleInputChange(
                  "firstName",
                  (e.target as HTMLInputElement).value,
                )}
              placeholder="First Name"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
            />
            <label
              for="firstName"
              class="absolute left-4 -top-2.5 text-sm text-primary-500 bg-white px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
            >
              First Name
            </label>
          </div>

          <div class="relative">
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onInput={(e) =>
                handleInputChange(
                  "lastName",
                  (e.target as HTMLInputElement).value,
                )}
              placeholder="Last Name"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
            />
            <label
              for="lastName"
              class="absolute left-4 -top-2.5 text-sm text-primary-500 bg-white px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
            >
              Last Name
            </label>
          </div>
        </div>

        <div class="relative">
          <input
            type="email"
            id="email"
            value={formData.email}
            onInput={(e) =>
              handleInputChange("email", (e.target as HTMLInputElement).value)}
            placeholder="Email Address"
            required
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
          />
          <label
            for="email"
            class="absolute left-4 -top-2.5 text-sm text-primary-500 bg-white px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
          >
            Email Address
          </label>
        </div>

        <div class="relative">
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onInput={(e) =>
              handleInputChange("phone", (e.target as HTMLInputElement).value)}
            placeholder="Phone Number"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent"
          />
          <label
            for="phone"
            class="absolute left-4 -top-2.5 text-sm text-primary-500 bg-white px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
          >
            Phone Number
          </label>
        </div>

        <div class="relative">
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) =>
              handleInputChange(
                "subject",
                (e.target as HTMLSelectElement).value,
              )}
            required
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300"
          >
            <option value="">Select Subject</option>
            <option value="product-inquiry">Product Inquiry</option>
            <option value="technical-support">Technical Support</option>
            <option value="pricing-quote">Pricing & Quotes</option>
            <option value="application-guidance">Application Guidance</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="general">General Questions</option>
          </select>
        </div>

        <div class="relative">
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onInput={(e) =>
              handleInputChange(
                "message",
                (e.target as HTMLTextAreaElement).value,
              )}
            placeholder="Your Message"
            required
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-300 peer placeholder-transparent resize-none"
          />
          <label
            for="message"
            class="absolute left-4 -top-2.5 text-sm text-primary-500 bg-white px-2 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500"
          >
            Your Message
          </label>
        </div>

        <div class="flex items-start space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              handleInputChange(
                "newsletter",
                (e.target as HTMLInputElement).checked,
              )}
            class="mt-1"
          />
          <label for="newsletter" class="text-sm text-gray-600">
            I would like to receive updates about new products and agricultural
            insights
          </label>
        </div>

        {submitStatus && (
          <div
            class={`p-4 rounded-lg ${
              submitStatus.includes("error") || submitStatus.includes("Please")
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {submitStatus}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          class={`w-full px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:-translate-y-1"
          }`}
        >
          {isSubmitting
            ? (
              <>
                <i class="fas fa-spinner fa-spin"></i>
                <span>Sending...</span>
              </>
            )
            : (
              <>
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </>
            )}
        </button>
      </form>
    </div>
  );
}
