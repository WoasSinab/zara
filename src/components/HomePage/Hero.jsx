
import React, { useState, useEffect } from 'react';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <section className="relative w-full h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden"> {/* h-[calc(100vh-64px)] برای پر کردن فضای باقی مانده بعد از هدر */}

      {/* Left Model Image Container */}
      <div
        className="absolute left-[5%] top-[10%] transform translate-x-[-10%] translate-y-[10%] md:left-[10%] lg:left-[15%] lg:top-[15%] z-10 w-[280px] h-[400px]"
        style={{ transform: `translateY(${scrollY * 0.15}px) translateX(var(--tw-translate-x))` }}
      >
        <img
          src="https://s6.uupload.ir/files/001_vaxu.png"
          alt="مدل سمت چپ"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>

      {/* Top Right Model Image Container */}
      <div
        className="absolute right-[5%] top-[5%] transform translate-x-[10%] translate-y-[5%] md:right-[10%] lg:right-[15%] lg:top-[10%] z-10 w-[280px] h-[400px]"
        style={{ transform: `translateY(${scrollY * 0.1}px) translateX(var(--tw-translate-x))` }}
      >
        <img
          src="https://s6.uupload.ir/files/003_48i0.png" 
          alt="مدل بالا راست"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-[20px] right-[-16px] w-40 h-40 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>

      {/* Bottom Right Model Image Container */}
      <div
        className="absolute right-[10%] bottom-[5%] transform translate-x-[10%] translate-y-[5%] md:right-[15%] lg:right-[20%] lg:bottom-[10%] z-10 w-[280px] h-[400px]"
        style={{ transform: `translateY(${scrollY * -0.05}px) translateX(var(--tw-translate-x))` }}
      >
        <img
          src="https://s6.uupload.ir/files/004_8pep.png" // User's bottom right model image
          alt="مدل پایین راست"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-[-30px] right-[0px] w-40 h-40 bg-orange-700 opacity-80 z-[-1] rounded-lg"></div>
      </div>


      {/* Main Content: Headline and Call to Action */}
      <div className="relative z-20 text-center max-w-2xl px-4">
        <p className="text-orange-600 text-sm italic mb-24 font-semibold">#Fall</p>

        <h2 className="text-5xl md:text-6xl italic text-gray-900 leading-tight mb-32" style={{ fontFamily: '"Playfair Display", serif' }}>
          Simplicity is the ultimate sophistication
        </h2>

        <button className="flex items-center mx-auto text-[#CB6146] font-semibold text-lg hover:text-orange-800 transition-colors duration-200">
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

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button className="relative flex items-center justify-start w-[180px] h-16 text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none">
          <div className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-gray-400 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3" />
            </svg>
          </div>
          <span className="ml-4 text-sm md:text-base font-medium bg-[#FFFCEE] px-4 py-1" style={{ transform: 'translateX(calc(-100% + 16px))' }}>
            Scroll Down
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;