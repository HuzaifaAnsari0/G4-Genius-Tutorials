import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Phone, MapPin, Mail, Star, ChevronDown, Globe, Award, Clock, Target, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import image1 from '../assets/image1.jpeg';
import contact from '../assets/contact.png';
import AchievementDashboard from '../components/achievement';
import navlogo from '../assets/navlogo.png';
import logo from '../assets/logo.png';
// import Testimonials from '../components/testimonials';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const subjects = ['Physics', 'Chemistry', 'Biology', 'Math', 'Social Studies'];
  const languages = ['English', 'French', 'Hindi', 'Marathi'];
  const boards = ['IGCSE', 'ICSE', 'CBSE', 'SSC', 'HSC', 'AS and A-Levels', 'IBDP'];

  const courses = [
    {
      title: 'Vedic Math',
      age: '10 years onwards',
      tagline: 'Discover the magic of numbers – Vedic Math makes calculations faster, easier, and fun!',
      benefits: ['Faster Calculations', 'Improves Memory', 'Boosts Self-Confidence', 'Increases Speed and Accuracy', 'Cultivates an Interest in Numbers','Enhances Problem-Solving and Analytical Thinking'],
      icon: '🧮',
      gradient: 'from-blue-100 to-cyan-50'
    },
    {
      title: 'Creative Writing',
      age: '6 years onwards',
      tagline: 'Ink your thoughts, breathe life into words – your story is waiting to be told.',
      benefits: ['Enhanced Imagination', 'Improved Expression of Thoughts', 'Enhanced Self-Confidence', 'Better Communication Skills', 'Improved Fluency in the Language', 'Gives a Sense of Pride'],
      icon: '✍️',
      gradient: 'from-orange-100 to-yellow-50'
    },
    {
      title: 'Calligraphy',
      age: '10 years onwards',
      tagline: 'Master over 60 scripts and styles',
      benefits: ['Develops Fine Motor Skills', 'Fosters Patience', 'Helps One to Focus', 'Builds Creativity'],
      icon: '🎨',
    //   special: 'Rs. 1500/month (12 sessions)',
      gradient: 'from-purple-100 to-pink-50'
    },
    {
      title: 'Phonics and Spellings',
      age: 'All ages',
      tagline: 'Build strong language foundations',
      benefits: ['Helps Get Correct Spellings and Pronunciation', 'Develops Oral and Written Skills','Enhances reading fluency and comprehension','Builds confidence in speaking and writing'],
      icon: '🗣️',
      gradient: 'from-green-100 to-emerald-50'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years of Excellence', icon: Award },
    { number: '500+', label: 'Students Taught', icon: Users },
    { number: '7', label: 'Boards Covered', icon: BookOpen },
    { number: '100%', label: 'Success Rate', icon: Target }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={navlogo} alt="G4 Genius Logo" className="h-12 w-14" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  G4 GENIUS TUTORIALS
                </h1>
                <p className="text-xs text-orange-600 font-medium">10 Years of Excellence</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Academics', id: 'academics' },
                { name: 'Courses', id: 'courses' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'About', id: 'about' },
                  { name: 'Academics', id: 'academics' },
                  { name: 'Courses', id: 'courses' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-6 py-3 mb-8 border border-orange-200">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-semibold text-orange-800">Trusted by 500+ Students</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
                G4 Genius
                <span className="block text-blue-600">Tutorials</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Inculcating the right study habits in <span className="text-orange-600 font-bold">STUDENTS</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('academics')}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Courses
                </button>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Online & Offline</h3>
                <p className="text-gray-600">Flexible learning modes to suit your schedule and preferences</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Multiple Boards</h3>
                <p className="text-gray-600">IGCSE, ICSE, CBSE, SSC, HSC, A-Levels, IBDP coverage</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Grades 5-12</h3>
                <p className="text-gray-600">Comprehensive education for all secondary levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-blue-600">G4 Genius</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over a decade of excellence in education, we are committed to nurturing young minds and building strong academic foundations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At G4 Genius Tutorials, we believe in inculcating the right study habits in students. Our personalized approach ensures that each student receives the attention they deserve, helping them excel in their academic journey.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Personalized learning approach',
                    'Experienced and qualified teachers',
                    'Comprehensive curriculum coverage',
                    'Regular assessments and feedback',
                    'Small batch sizes for better attention'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-3 h-96 flex items-center justify-center">
                  <img src={image1} alt="Genius Tutorials" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  500+<br />Students
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AchievementDashboard />

      {/* Academics Section */}
        <section id="academics" className="pt-14 pb-6 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-100">
          <div className="max-w-7xl mx-auto">
            <div className={`transform transition-all duration-1000 ${isVisible.academics ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              📚 Academic <span className="text-blue-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic support across multiple boards and subjects
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Subjects */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Subjects Taught</h3>
                </div>
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div 
                      key={subject}
                      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 border border-blue-100"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Languages Offered</h3>
                </div>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <div 
                      key={language}
                      className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 border border-orange-100"
                    >
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{language}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boards Covered */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Boards Covered</h3>
                </div>
                <div className="space-y-3">
                  {boards.map((board, index) => {
                    // Only show dropdown for first 4 boards (IGCSE, ICSE, CBSE, SSC)
                    const hasDropdown = index < 4;
                    return (
                      <div key={board} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => {
                            if (hasDropdown) {
                              setIsVisible((prev) => ({
                                ...prev,
                                [`board_${index}`]: !prev[`board_${index}`],
                              }));
                            }
                          }}
                          className="flex items-center space-x-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-all duration-300 border border-cyan-100 font-medium text-gray-700 focus:outline-none w-full"
                        >
                          <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                          <span>{board}</span>
                          {hasDropdown && (
                            <span className="ml-auto flex items-center">
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  isVisible[`board_${index}`] ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          )}
                        </button>
                        {/* Subjects for each board */}
                        {hasDropdown && isVisible[`board_${index}`] && (
                          <div className="ml-6 mt-2 space-y-2">
                            {(() => {
                              switch (board) {
                                case "SSC":
                                  return [
                                    "English",
                                    "Hindi",
                                    "Marathi",
                                    "French",
                                    "Science 1 and 2",
                                    "Algebra and Geometry",
                                    "History and Geography",
                                  ].map((subject) => (
                                    <div
                                      key={subject}
                                      className="flex items-center space-x-2 p-2 bg-cyan-100 rounded hover:bg-cyan-200 text-sm"
                                    >
                                      <BookOpen className="h-4 w-4 text-cyan-600" />
                                      <span>{subject}</span>
                                    </div>
                                  ));
                                case "ICSE":
                                  return [
                                    "English",
                                    "Physics",
                                    "Chemistry",
                                    "Biology",
                                    "Mathematics",
                                    "Social Science",
                                  ].map((subject) => (
                                    <div
                                      key={subject}
                                      className="flex items-center space-x-2 p-2 bg-cyan-100 rounded hover:bg-cyan-200 text-sm"
                                    >
                                      <BookOpen className="h-4 w-4 text-cyan-600" />
                                      <span>{subject}</span>
                                    </div>
                                  ));
                                case "CBSE":
                                  return [
                                    "English",
                                    "Physics",
                                    "Chemistry",
                                    "Biology",
                                    "Mathematics",
                                    "Social Science",
                                  ].map((subject) => (
                                    <div
                                      key={subject}
                                      className="flex items-center space-x-2 p-2 bg-cyan-100 rounded hover:bg-cyan-200 text-sm"
                                    >
                                      <BookOpen className="h-4 w-4 text-cyan-600" />
                                      <span>{subject}</span>
                                    </div>
                                  ));
                                case "IGCSE":
                                  return (
                                    <>
                                      {[
                                        "English (FLE /ESL)",
                                        "French",
                                        "Physics",
                                        "Chemistry",
                                        "Biology",
                                        "Mathematics",
                                        "Global Perspectives",
                                      ].map((subject) => (
                                        <div
                                          key={subject}
                                          className="flex items-center space-x-2 p-2 bg-cyan-100 rounded hover:bg-cyan-200 text-sm"
                                        >
                                          <BookOpen className="h-4 w-4 text-cyan-600" />
                                          <span>{subject}</span>
                                        </div>
                                      ))}
                                      <div className="mt-4 bg-cyan-50 border border-cyan-200 rounded-lg p-3">
                                        <div className="flex items-center mb-1">
                                          <Award className="h-4 w-4 text-cyan-500 mr-2" />
                                          <span className="font-semibold text-cyan-700 text-sm">
                                            Cambridge Primary & Lower Secondary Checkpoint
                                          </span>
                                        </div>
                                        <p className="text-xs text-gray-600 mb-1">
                                          Training & complete guidance provided for:
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                          {["English", "Science", "Math"].map((subject) => (
                                            <span
                                              key={subject}
                                              className="inline-flex items-center px-2 py-1 bg-cyan-100 text-cyan-700 rounded text-xs"
                                            >
                                              <BookOpen className="h-3 w-3 mr-1" />
                                              {subject}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </>
                                  );
                                default:
                                  return null;
                              }
                            })()}
                          </div>
                        )}
                      </div>
                    );
                    })}
                  </div>
                  </div>
                  
                </div>
              </div>
              </div>
              
            </section>

            {/* Extra-Curricular Courses */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                🎨 Extra-Curricular <span className="text-blue-600">Courses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Develop creativity and essential life skills beyond academics
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className={`bg-gradient-to-br ${course.gradient} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100`}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl bg-white rounded-2xl p-3 shadow-sm">{course.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Age Group: {course.age}</p>
                      {course.special && (
                        <p className="text-sm text-orange-600 font-semibold bg-orange-100 px-3 py-1 rounded-full inline-block">{course.special}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{course.tagline}"</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Benefits:</h4>
                    <div className="grid gap-3">
                      {course.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="flex items-start space-x-3"
                        >
                          <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In <span className="text-cyan-400">Touch</span>
              </h2>
              <p className="text-xl text-gray-300">
                Ready to start your learning journey? Contact us today!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 gap-10">
              <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                  src={contact}
                  alt="Contact G4 Genius"
                  className="rounded-2xl shadow-lg object-cover border-4 border-cyan-400"
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
              {/* Contact Info Section */}
              <div className="w-full md:w-1/2">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Contact Person</h3>
                  <p className="text-xl text-white">Ms. Ramya V</p>
                </div>
                <div className="grid gap-8 mb-8">
                  <div className="flex items-center space-x-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <a
                        href="https://wa.link/c1gtlw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-white hover:text-green-400 transition-colors duration-300"
                      >
                        8452957695 / 8451044606
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mt-1">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-2">Address</p>
                      <a
                        href="https://maps.google.com/?q=17/1/5+Sterling+CHS+Bhawani+Nagar+Marol+Maroshi+Road+Andheri+East"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-relaxed text-white hover:text-blue-400 transition-colors duration-300"
                      >
                        17/1/5, Sterling CHS, Bhawani Nagar,<br />
                        Marol Maroshi Road, Next to Marol Education Academy,
                        Andheri East
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-white/20">
                  <p className="text-sm text-gray-300 mb-2">Calligraphy Contact:</p>
                  <a
                    href="https://wa.link/c1gtlw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-white hover:text-green-400 transition-colors duration-300"
                  >
                    8451044606 / 8452957695
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                Inculcating the right study habits in students with 10 years of dedicated excellence in education.
              </p>
              <div className="flex justify-center md:justify-start space-x-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30">Online</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-400/30">Offline</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-400/30">Grades 5-12</span>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { label: 'About Us', id: 'about' },
                  { label: 'Academics', id: 'academics' },
                  { label: 'Extra-Curricular', id: 'courses' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

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
                    8452957695 / 8451044606
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
                    17/1/5, Sterling CHS, Bhawani Nagar,<br />
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
              Designed and developed by{' '}
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
    </div>
  );
};

export default Home;