"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Go Kashmir</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights as a visitor to our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, and contact details when you sign up for newsletters, inquiries, or travel guides. Additionally, we may collect non-personal information such as your IP address, browser type, and browsing behavior to improve our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          Your information is used to provide and improve our services, respond to your inquiries, send updates and newsletters, and personalize your experience on our website. We may also use anonymized data for research and analytics purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies and Tracking</h2>
        <p className="mb-4">
          Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and remember your preferences. You can disable cookies through your browser settings, but some features of our website may not function properly without them.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Sharing of Information</h2>
        <p className="mb-4">
          We do not sell your personal information to third parties. We may share your data with trusted service providers such as email services, analytics providers, or travel partners to improve our services and deliver a seamless experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites, including travel booking platforms and tourism partners. We are not responsible for the privacy practices of these external websites. Please review their privacy policies before sharing personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. You can also opt-out of receiving marketing communications from us at any time by contacting us at <a href="mailto:gokashmir.info@gmail.com" className="text-blue-600 underline">gokashmir.info@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet or electronic storage is completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Updates to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically to stay informed about how we protect your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: <a href="mailto:gokashmir.info@gmail.com" className="text-blue-600 underline">gokashmir.info@gmail.com</a>
        </p>
      </section>
      <Footer />
    </>
  );
}
