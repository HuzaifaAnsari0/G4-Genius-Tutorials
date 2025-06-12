import React, { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Phone, MapPin, Mail, Star, ChevronDown, Globe, Award, Clock, Target } from 'lucide-react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

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
      benefits: ['Faster Calculations', 'Improves Memory', 'Boosts Self-Confidence', 'Increases Speed and Accuracy', 'Cultivates an Interest in Numbers'],
      icon: '🧮'
    },
    {
      title: 'Creative Writing',
      age: '6 years onwards',
      tagline: 'Ink your thoughts, breathe life into words – your story is waiting to be told.',
      benefits: ['Enhanced Imagination', 'Improved Expression of Thoughts', 'Enhanced Self-Confidence', 'Better Communication Skills', 'Improved Fluency in the Language', 'Gives a Sense of Pride'],
      icon: '✍️'
    },
    {
      title: 'Calligraphy',
      age: 'All levels',
      tagline: 'Master over 60 scripts and styles',
      benefits: ['Develops Fine Motor Skills', 'Fosters Patience', 'Helps One to Focus', 'Builds Creativity'],
      icon: '🎨',
      special: 'Rs. 1500/month (12 sessions)'
    },
    {
      title: 'Phonics and Spellings',
      age: 'All ages',
      tagline: 'Build strong language foundations',
      benefits: ['Helps Get Correct Spellings and Pronunciation', 'Develops Oral and Written Skills'],
      icon: '🗣️'
    }
  ];

  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="animate-bounce"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-10 text-6xl opacity-10">📚</div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-20 text-4xl opacity-10">🎓</div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-40 left-20 text-5xl opacity-10">🧠</div>
        </FloatingElement>
        <FloatingElement delay={0.5}>
          <div className="absolute bottom-20 right-10 text-4xl opacity-10">⭐</div>
        </FloatingElement>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  G4 Genius Tutorials
                </h1>
                <p className="text-xs text-gray-300">10 Years of Excellence</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Academics', 'Courses', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="relative px-4 py-2 text-sm font-medium hover:text-yellow-300 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-orange-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-6">
                <Award className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">10 Years of Excellence</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
                G4 Genius
              </h1>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-200">
                Tutorials
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Inculcating the right study habits in <span className="text-yellow-300 font-semibold">STUDENTS</span>!!!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Globe className="h-12 w-12 text-blue-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Online & Offline</h3>
                <p className="text-gray-300">Flexible learning modes to suit your needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <BookOpen className="h-12 w-12 text-green-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Multiple Boards</h3>
                <p className="text-gray-300">IGCSE, ICSE, CBSE, SSC, HSC, A-Levels, IBDP</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Users className="h-12 w-12 text-purple-300 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Grades 5-12</h3>
                <p className="text-gray-300">Comprehensive coverage for all levels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.academics ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              📘 Academics
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Subjects */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">Subjects Taught</h3>
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div 
                      key={subject}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-lg">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-pink-300">Languages Offered</h3>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <div 
                      key={language}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-lg">{language}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boards */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-emerald-300">Boards Covered</h3>
                <div className="space-y-3">
                  {boards.map((board, index) => (
                    <div 
                      key={board}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-lg">{board}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grade Range */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20">
                <Target className="h-8 w-8 text-yellow-300" />
                <span className="text-2xl font-semibold">Grades 5 to 12</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra-Curricular Courses */}
      <section id="courses" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.courses ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
              🎨 Extra-Curricular Courses
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <div 
                  key={course.title}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{course.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-300 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">Age Group: {course.age}</p>
                      {course.special && (
                        <p className="text-sm text-yellow-300 font-semibold">{course.special}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 italic mb-6 text-lg">"{course.tagline}"</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-orange-200">Benefits:</h4>
                    <div className="grid gap-2">
                      {course.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="flex items-center space-x-2"
                        >
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="text-sm text-gray-200">{benefit}</span>
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
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-300 mb-4">Contact Person</h3>
                <p className="text-xl text-gray-200">Ms. Ramya V</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-2xl">
                  <Phone className="h-8 w-8 text-green-400" />
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="text-lg font-semibold">8451044606</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-2xl">
                  <MapPin className="h-8 w-8 text-red-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-300">Address</p>
                    <p className="text-sm leading-relaxed">
                      17/1/5, Sterling CHS, Bhawani Nagar,<br />
                      Marol Maroshi Road, Next to Marol Education Academy,<br />
                      Andheri East
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl">
                <p className="text-sm text-gray-300 mb-2">Calligraphy Contact:</p>
                <p className="text-lg font-semibold">8452957695</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-gradient-to-br from-slate-900/90 via-purple-900/50 to-indigo-900/70 backdrop-blur-lg border-t border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
                        <div className="text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                              <GraduationCap className="h-7 w-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                G4 Genius Tutorials
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

                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                          <h4 className="text-lg font-semibold text-white mb-6 relative">
                            Quick Links
                            <div className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto md:mx-0"></div>
                          </h4>
                          <div className="space-y-3">
                            {[
                              { label: 'Academics', id: 'academics' },
                              { label: 'IGCSE', id: 'academics' },
                              { label: 'CBSE/ICSE', id: 'academics' },
                              { label: 'Extra-Curricular', id: 'courses' },
                              { label: 'Vedic Math', id: 'courses' },
                              { label: 'Creative Writing', id: 'courses' }
                            ].map((link) => (
                              <div
                                key={link.label}
                                className="group cursor-pointer"
                                onClick={() => {
                                  const el = document.getElementById(link.id);
                                  if (el) {
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    el.classList.remove('animate-pop');
                                    // Trigger pop animation
                                    void el.offsetWidth;
                                    el.classList.add('animate-pop');
                                    setTimeout(() => {
                                      el.classList.remove('animate-pop');
                                    }, 600);
                                  }
                                }}
                              >
                                <span className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group-hover:translate-x-1 transform inline-block">
                                  {link.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact Info */}

            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Contact Info
                <div className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-gradient-to-r from-pink-400 to-red-400 mx-auto md:mx-0"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300">Ms. Ramya V</p>
                    <p className="text-white font-semibold">8451044606</p>
                  </div>
                </div>
                <div className="flex items-start justify-center md:justify-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                      17/1/5, Sterling CHS, Bhawani Nagar, Marol Maroshi Road, Andheri East
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">C</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Calligraphy</p>
                    <p className="text-white font-semibold">8452957695</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2025 G4 Genius Tutorials. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Empowering students for over a decade
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm font-medium">
                <span className="text-gray-400">Designed & Developed by </span>
                <a
                  href="https://tarlose.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-bold hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-300 relative group"
                >
                  Tarlose
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;