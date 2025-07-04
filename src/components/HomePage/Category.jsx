import React, { useState, useEffect } from 'react';

function Category() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Coats', link: '#coats' },
    { name: 'Dresses', link: '#dresses' },
    { name: 'Jackets', link: '#jackets' },
    { name: 'Boots', link: '#boots' },
    { name: 'Shirts', link: '#shirts' },
    { name: 'Trousers', link: '#trousers' },
    { name: 'Accessories', link: '#accessories' },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full px-6 lg:px-40 py-20 gap-12">
      
      {/* left */}
      <div className="flex flex-col gap-8 w-full lg:w-1/2">
        <p className="text-[#CB6146] text-lg md:text-xl font-semibold">BROWSE CATEGORIES</p>

        <ul
          className="list-none flex flex-col gap-6"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {categories.map((category, index) => (
            <li key={category.name}>
              <a
                href={category.link}
                className={`block text-gray-800 text-3xl md:text-4xl lg:text-5xl hover:text-orange-900 transition-colors duration-200 ${
                  index === 0 ? 'relative text-orange-900' : ''
                }`}
              >
                {category.name}
                {index === 0 && (
                  <span className="absolute left-0 bottom-[-6px] w-12 h-0.5 bg-orange-900"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* right */}
      <div className="relative w-full lg:w-1/2 min-h-[600px] lg:min-h-[600px] flex flex-col items-center gap-8 lg:block">
        
        {/* Top Image */}
        <div
          className="relative lg:absolute top-0 right-0 w-[260px] sm:w-[320px] lg:w-[400px] h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden z-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <img
            src="https://s6.uupload.ir/files/006_d0ko.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Bottom Image */}
        <div
          className="relative lg:absolute bottom-[-5%] left-1/2 lg:transform lg:-translate-x-1/2 w-[260px] sm:w-[320px] lg:w-[400px] h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden z-10"
          style={{ transform: `translate(-10%, ${scrollY * -0.05}px)` }}
        >
          <img
            src="https://s6.uupload.ir/files/005_s6su.png"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
