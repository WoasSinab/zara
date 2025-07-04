import React, { useState, useEffect } from 'react';


function Hero() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Left Image */}
      <div
        className="absolute left-[2%] top-[10%] sm:left-[5%] md:left-[10%] lg:left-[15%] lg:top-[15%] z-10 w-[180px] sm:w-[220px] md:w-[280px] h-[260px] sm:h-[320px] md:h-[400px]"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <img
          src="https://s6.uupload.ir/files/001_vaxu.png"
          alt="مدل سمت چپ"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-[-40px] left-[-30px] w-28 h-28 sm:w-32 sm:h-32 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>

      {/* Top Right Image */}
      <div
        className="absolute right-[2%] top-[5%] sm:right-[5%] md:right-[10%] lg:right-[15%] lg:top-[10%] z-10 w-[180px] sm:w-[220px] md:w-[280px] h-[260px] sm:h-[320px] md:h-[400px]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <img
          src="https://s6.uupload.ir/files/003_48i0.png"
          alt="مدل بالا راست"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-[16px] right-[-12px] w-28 h-28 sm:w-32 sm:h-32 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>

      {/* Bottom Right Image */}
      <div
        className="absolute right-[4%] bottom-[5%] sm:right-[8%] md:right-[15%] lg:right-[20%] lg:bottom-[10%] z-10 w-[180px] sm:w-[220px] md:w-[280px] h-[260px] sm:h-[320px] md:h-[400px]"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      >
        <img
          src="https://s6.uupload.ir/files/004_8pep.png"
          alt="مدل پایین راست"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-[-24px] right-[0px] w-28 h-28 sm:w-32 sm:h-32 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>

      {/* Main Text */}
      <div className="relative z-20 text-center max-w-xl px-4">
        <p className="text-orange-600 text-xs sm:text-sm italic mb-10 sm:mb-20 font-semibold">#Fall</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl italic text-gray-900 leading-snug sm:leading-tight mb-16 sm:mb-32" style={{ fontFamily: '"Playfair Display", serif' }}>
          Simplicity is the ultimate sophistication
        </h2>
        <button className="flex items-center mx-auto text-[#CB6146] font-semibold text-base sm:text-lg hover:text-orange-800 transition-colors duration-200">
          Explore Collections
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button className="relative flex items-center justify-start w-[160px] sm:w-[180px] h-12 sm:h-16 text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none">
          <div className="flex items-center justify-center w-24 sm:w-32 h-24 sm:h-32 rounded-full border-2 border-gray-400 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 sm:h-6 w-5 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3" />
            </svg>
          </div>
          <span className="ml-4 text-xs sm:text-sm md:text-base font-medium bg-[#FFFCEE] px-3 sm:px-4 py-1" style={{ transform: 'translateX(calc(-100% + 16px))' }}>
            Scroll Down
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
