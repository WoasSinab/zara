import React, { useState, useEffect } from 'react';

function Category() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

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
    <section className="w-full py-12 md:py-20  flex flex-col md:flex-row justify-center items-start px-4 md:px-8 lg:px-40">

      <div className="flex flex-col items-start w-full md:w-1/3 my-8 md:my-0 md:mr-16 lg:mr-24">
        <p className="text-[#CB6146] text-base md:text-xl font-semibold uppercase tracking-wider mb-4 md:mb-8">BROWSE CATEGORIES</p>

        <ul className="list-none p-0 m-0 w-full flex flex-col gap-4 md:gap-8" style={{ fontFamily: '"Playfair Display", serif' }}>
          {categories.map((category, index) => (
            <li key={category.name} className="mb-2 md:mb-4">
              <a
                href={category.link}
                className={`text-gray-800 text-3xl md:text-5xl hover:text-orange-900 transition-colors duration-200 block ${
                  index === 0 ? 'relative text-orange-900' : ''
                }`}
              >
                {category.name}
                {index === 0 && (
                  <span className="absolute left-0 bottom-[-4px] md:bottom-[-8px] w-8 h-0.5 bg-orange-900"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full md:w-2/3 min-h-0 md:min-h-[600px] mt-8 md:mt-16">

        <div
          className="hidden md:block z-30 absolute top-0 right-0 w-[400px] h-[500px] overflow-hidden"
          style={!isMobile ? { transform: `translateY(${scrollY * 0.1}px)` } : {}}
        >
          <img src="https://s6.uupload.ir/files/006_d0ko.png" alt="Product 1" className="w-full h-full object-cover" />
        </div>

        <div
          className="hidden md:block z-10 absolute bottom-[-5%] left-[50%] md:left-[60%] transform -translate-x-1/2 w-[400px] h-[500px] overflow-hidden"
          style={!isMobile ? { transform: `translate(-50%, ${scrollY * -0.15}px)` } : {}}
        >
          <img src="https://s6.uupload.ir/files/005_s6su.png" alt="Product 2" className="w-full h-full object-cover" />
        </div>

        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md text-center z-40">
          <p className="text-gray-500 text-xs uppercase tracking-wide">IDSF</p>
          <p className="text-gray-800 text-lg font-semibold">C356x</p>
        </div>
      </div>
    </section>
  );
}

export default Category;