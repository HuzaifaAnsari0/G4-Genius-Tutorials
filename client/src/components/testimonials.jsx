import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Aarav Mehta",
        role: "Parent",
        company: "N/A",
        image: "https://images.unsplash.com/photo-1603415526960-f8f7f54c1c1b?w=80&h=80&fit=crop&crop=face",
        text: "My son's performance in Math and Science improved dramatically within 3 months of joining G4 Genius Tutorials. The personal attention and regular feedback make a huge difference.",
        rating: 5,
        verified: true,
        outcome: "Academic Improvement"
    },
    {
        id: 2,
        name: "Ishita Nair",
        role: "IGCSE Student",
        company: "Grade 10",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&h=80&fit=crop&crop=face",
        text: "Thanks to the structured teaching and amazing guidance, I scored an A* in Chemistry and Physics. The tutors are so approachable and well-prepared!",
        rating: 5,
        verified: true,
        outcome: "Top Grades"
    },
    {
        id: 3,
        name: "Dev Shah",
        role: "HSC Commerce Student",
        company: "Grade 12",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
        text: "I was struggling with Accounts and Economics, but the online sessions were interactive and very easy to follow. Scored over 90% in finals!",
        rating: 5,
        verified: true,
        outcome: "Exam Success"
    },
    {
        id: 4,
        name: "Neha Kulkarni",
        role: "Creative Writing Student",
        company: "Age 11",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face",
        text: "Creative writing classes helped me express myself better and build confidence. I even got selected for the school magazine team!",
        rating: 5,
        verified: true,
        outcome: "Confidence Boost"
    },
    {
        id: 5,
        name: "Rahul Patel",
        role: "JEE Aspirant",
        company: "Grade 11",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        text: "The JEE preparation course was exceptional. Mock tests and doubt-clearing sessions helped me understand complex Physics concepts easily.",
        rating: 5,
        verified: true,
        outcome: "Competitive Exam Prep"
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (isHovered) return;

        intervalRef.current = setInterval(() => {
            if (scrollRef.current) {
                const containerWidth = scrollRef.current.clientWidth;
                const scrollAmount = containerWidth * 0.8;
                const { scrollLeft, scrollWidth } = scrollRef.current;
                if (scrollLeft + containerWidth >= scrollWidth - 50) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ 
                        left: scrollAmount, 
                        behavior: 'smooth' 
                    });
                }
            }
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [isHovered]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.clientWidth;
            const scrollAmount = containerWidth * 0.8;
            if (direction === 'left') {
                scrollRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                scrollRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        What Our <span className="text-blue-600">Community</span> Says
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                        Real stories from students and parents who have experienced success with G4 Genius Tutorials
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div 
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden xs:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="hidden xs:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:text-blue-700" />
                    </button>

                    {/* Testimonials Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-3 sm:pb-4 px-2 xs:px-6 sm:px-12 hide-scrollbar"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="min-w-[85vw] max-w-[90vw] xs:min-w-[320px] xs:w-[320px] sm:min-w-[340px] sm:w-[340px] md:min-w-[350px] md:w-[350px] flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-6 border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 scroll-snap-align-start"
                                style={{ scrollSnapAlign: 'start' }}
                            >
                                {/* Header with profile and verification */}
                                <div className="flex items-start mb-3 sm:mb-4">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name} profile`}
                                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-100 shadow-sm object-cover"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3b82f6&color=fff`;
                                            }}
                                        />
                                        {testimonial.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-0.5 sm:p-1">
                                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-3 sm:ml-4 flex-1">
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900">{testimonial.name}</h3>
                                        <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                                        {testimonial.company !== "N/A" && (
                                            <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Testimonial text */}
                                <blockquote className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
                                    "{testimonial.text}"
                                </blockquote>

                                {/* Footer with rating and outcome */}
                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                                    <div className="flex items-center space-x-0.5 sm:space-x-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                                    i < testimonial.rating
                                                        ? 'text-yellow-400 fill-current'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[10px] sm:text-xs text-blue-600 font-semibold bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded-full">
                                        {testimonial.outcome}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-500">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                            <span className="text-xs sm:text-sm">Verified Reviews</span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                            <span className="text-xs sm:text-sm">5.0 Average Rating</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
    .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 639px) {
        .scroll-snap-align-start {
            scroll-snap-align: start;
        }
    }
    @media (max-width: 375px) {
        .scroll-snap-align-start {
            min-width: 88vw !important;
            max-width: 92vw !important;
        }
    }
    @media (max-width: 320px) {
        .scroll-snap-align-start {
            min-width: 96vw !important;
            max-width: 99vw !important;
        }
    }
`}</style>

        </section>
    );
};

export default Testimonials;