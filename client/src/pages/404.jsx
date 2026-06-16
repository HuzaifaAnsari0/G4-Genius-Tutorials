import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar scrollToSection={null} activeSection={null} />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
        <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-colors"
        >
          Go to Home
        </button>
      </main>
      <Footer scrollToSection={null} />
    </div>
  );
};

export default NotFound;