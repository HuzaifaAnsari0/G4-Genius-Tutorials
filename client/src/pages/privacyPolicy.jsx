import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const PrivacyPolicy = () => (
    <div>
      <Navbar scrollToSection={null} activeSection={null} />
  <div className="max-w-3xl mx-auto px-4 py-10 pt-24 text-gray-800">
    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
      <span role="img" aria-label="lock">🔐</span> Privacy Policy
    </h1>
    <p className="text-sm text-gray-500 mb-6">Effective Date: June 12, 2025</p>
    <p className="mb-4">
      G4 Genius Tutorials is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
    </p>
    <ol className="list-decimal pl-5 space-y-4">
      <li>
        <strong>Information We Collect</strong><br />
        We may collect the following information when you contact us, enroll in a course, or interact with our website:<br />
        <ul className="list-disc pl-5 mt-2">
          <li>Name, phone number, email address</li>
          <li>Student's academic level and board</li>
          <li>Feedback and testimonials</li>
          <li>Usage data from our website (e.g., pages visited)</li>
        </ul>
      </li>
      <li>
        <strong>How We Use Your Information</strong><br />
        We use your data to:<br />
        <ul className="list-disc pl-5 mt-2">
          <li>Provide academic services and support</li>
          <li>Contact you regarding courses or inquiries</li>
          <li>Improve our website and offerings</li>
          <li>Share achievements (with consent) in testimonials or academic dashboards</li>
        </ul>
      </li>
      <li>
        <strong>Data Sharing</strong><br />
        We do not sell or rent your personal information.<br />
        Your data may be shared with teachers or staff for academic purposes only.<br />
        We may share information if required by law or to protect our rights.
      </li>
      <li>
        <strong>Security</strong><br />
        We implement appropriate security measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.
      </li>
      <li>
        <strong>Cookies</strong><br />
        We may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.
      </li>
      <li>
        <strong>Your Rights</strong><br />
        You may contact us to:<br />
        <ul className="list-disc pl-5 mt-2">
          <li>Access or correct your data</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of communications</li>
        </ul>
      </li>
      <li>
        <strong>Updates to This Policy</strong><br />
        This policy may be updated periodically. Changes will be reflected on this page with the updated effective date.
      </li>
    </ol>
    <div className="mt-8">
      <p>If you have privacy-related questions, contact us at:</p>
      <ul className="mt-2">
        <li>📧 brilliantlearners2020@gmail.com</li>
        <li>📞9137398377 / 8451044606</li>
      </ul>
    </div>
  </div>
        <Footer scrollToSection={null} />
        </div>
);

export default PrivacyPolicy;