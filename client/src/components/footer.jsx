import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Update the path if your logo is elsewhere
import { Phone, Mail, MapPin } from "lucide-react"; // Or your icon library

const Footer = ({ scrollToSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // If on home page, scroll to section
      if (scrollToSection) {
        scrollToSection(sectionId);
      }
    } else {
      // If on other pages, navigate to home page with section
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="pt-14 pb-8 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <img src={logo} alt="G4 Genius Logo" className="h-16 w-20" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  G4 GENIUS TUTORIALS
                </h3>
                <p className="text-xs text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Inculcating the right study habits in students with 10 years of
              dedicated excellence in education.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30">
                Online
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-400/30">
                Offline
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">
                Grades 5-12
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/privacy-policy"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
          {/* <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <div className="space-y-3">
              <a
                href="/privacy-policy"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div> */}

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a
                  href="https://wa.link/c1gtlw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                 9137398377 / 8451044606
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a
                  href="mailto:brilliantlearners2020@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  brilliantlearners2020@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <a
                  href="https://maps.google.com/?q=17/1/5+Sterling+CHS+Bhawani+Nagar+Marol+Maroshi+Road+Andheri+East"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-300"
                >
                  17/1/5, Sterling CHS, Bhawani Nagar,
                  <br />
                  Marol Maroshi Road, Andheri East
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} G4 Genius Tutorials. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Designed and developed by{" "}
            <a
              href="https://tarlose.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
            >
              Tarlose
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;