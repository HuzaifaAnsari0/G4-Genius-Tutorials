import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TermsAndConditions = () => (
    <div>
        <Navbar scrollToSection={null} activeSection={null} />
  <div className="max-w-3xl mx-auto px-4 py-10 pt-28 text-gray-800">
    
    <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
      <span role="img" aria-label="document">📄</span> Terms &amp; Conditions
    </h1>
    <p className="text-sm text-gray-500 mb-6">Effective Date: June 12, 2025</p>
    <p className="mb-4">
      Welcome to G4 Genius Tutorials! By accessing or using our website and services, you agree to be bound by the following Terms and Conditions. Please read them carefully.
    </p>
    <ol className="list-decimal pl-5 space-y-4">
      <li>
        <strong>Use of the Website</strong><br />
        The website is intended to provide information about our academic and extra-curricular programs.<br />
        You agree to use the website lawfully, respectfully, and without causing harm or disruption to the content or services.
      </li>
      <li>
        <strong>Services Offered</strong><br />
        G4 Genius Tutorials provides offline and online coaching for students from Grades 5 to 12 across multiple boards including IGCSE, ICSE, CBSE, SSC, HSC, AS and A-Levels, and IBDP.<br />
        We also offer extra-curricular courses like Vedic Math, Creative Writing, Calligraphy, and Phonics.
      </li>
      <li>
        <strong>Enrollment &amp; Payment</strong><br />
        Enrollment in courses is subject to availability.<br />
        All fees once paid are non-refundable unless stated otherwise in writing.
      </li>
      <li>
        <strong>Intellectual Property</strong><br />
        All content, materials, logos, and branding on this website are the intellectual property of G4 Genius Tutorials.<br />
        You may not reuse or reproduce any content without prior written permission.
      </li>
      <li>
        <strong>Limitation of Liability</strong><br />
        While we strive to offer high-quality content and teaching, G4 Genius Tutorials is not liable for any damages or losses resulting from the use of this website or our services.
      </li>
      <li>
        <strong>Modifications</strong><br />
        We reserve the right to modify these terms at any time. Updates will be posted on this page.
      </li>
    </ol>
    <div className="mt-8">
      <p>If you have any questions, please contact us at:</p>
      <ul className="mt-2">
        <li>📞9137398377 / 8451044606</li>
        <li>📧 brilliantlearners2020@gmail.com</li>
      </ul>
    </div>

  </div>
      <Footer scrollToSection={null} />
  </div>
);

export default TermsAndConditions;