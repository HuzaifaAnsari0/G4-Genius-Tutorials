import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg'; // Update the path to your logo file

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Set active section based on current URL on initial load and when URL changes
        const determineActiveSection = () => {
            const path = window.location.pathname;
            const hash = window.location.hash.replace('#', '');
            
            if (path === '/about') {
                setActiveSection('about');
            } else if (path === '/') {
                setActiveSection(hash || 'home');
            } else if (path === '/donate') {
                setActiveSection('donate');
            } else if (hash) {
                setActiveSection(hash);
            }
        };

        determineActiveSection();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', determineActiveSection);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', determineActiveSection);
        };
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
        setMobileMenuOpen(false);
    };

    const handleNavItemClick = (item) => {
        setActiveSection(item.id);
        
        if (item.id === 'about') {
            window.location.href = '/about';
        } else if (item.id === 'home') {
            window.location.href = '/';
        } else {
            window.location.href = `/#${item.id}`;
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                 
                    <div className="flex items-center space-x-2">
                        <div
                            className={`h-12 w-12 rounded-lg overflow-hidden ${scrolled ? 'shadow-md' : ''}`}
                        >
                            <img src={logo} alt="Trust Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="font-bold text-xl leading-tight">
                            <span className="text-orange-500">Marol </span>
                            <span className={scrolled ? 'text-gray-800' : 'text-white'}>Human </span>
                            <span className="text-green-600">Welfare Trust</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center flex-1">
                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center justify-center space-x-1 pr-32">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavItemClick(item)}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-blue-600 text-white font-medium'
                                            : scrolled
                                            ? 'text-gray-700 hover:bg-gray-100'
                                            : 'text-white hover:bg-white/10'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={() => {
                                setActiveSection('donate');
                                window.location.href = '/donate';
                            }}
                            className={`px-6 py-2 rounded-lg transition duration-300 ${
                                activeSection === 'donate'
                                ? 'bg-blue-600 text-white font-medium'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                            }`}
                        >
                            Donate
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`p-2 rounded-lg ${
                                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg animate-slideDown">
                    <div className="px-4 py-2 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavItemClick(item)}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setActiveSection('donate');
                                window.location.href = '/donate';
                            }}
                            className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                                activeSection === 'donate'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                            }`}
                        >
                            Donate
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;