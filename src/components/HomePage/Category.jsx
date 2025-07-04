import React, { useState, useEffect } from 'react';


function Category() {


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




    const categories = [
    { name: 'Coats', link: '#coats' },
    { name: 'Dresses', link: '#dresses' },
    { name: 'Jackets', link: '#jackets' },
    { name: 'Boots', link: '#boots' },
    { name: 'Shirts', link: '#shirts' },
    { name: 'Trousers', link: '#trousers' },
    { name: 'Accessories', link: '#accessories' },
  ];



  return(
    <div className="flex flex-row">

      {/* left */}
      <div className="flex flex-col m-40 gap-8">

        <p className="text-[#CB6146] text-xl text-md">BROWSE CATEGORIES</p>

        <ul className="list-none p-0 m-0 w-full flex flex-col gap-8 " style={{ fontFamily: '"Playfair Display", serif' }}>
            {categories.map((category, index) => (
              <li key={category.name} className="mb-4 ">
                <a
                  href={category.link}
                  className={`text-gray-800 text-5xl hover:text-orange-900 transition-colors duration-200 block ${
                    index === 0 ? 'relative text-orange-900' : '' // 'Coats' is red and has a line
                  }`}
                >
                  {category.name}
                  {index === 0 && ( // Line under 'Coats'
                    <span className="absolute left-0 bottom-[-8px] w-12 h-0.5 bg-orange-900"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>


      </div>



      {/* right */}
      <div className="relative w-full md:w-2/3 min-h-[600px] mt-16">

        <div className="z-30 absolute top-0 right-0 w-[400px] h-[500px]  overflow-hidden"   style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <img src="https://s6.uupload.ir/files/006_d0ko.png" alt="" />
        </div>


        <div className="z-10 absolute bottom-[-5%] left-[60%] transform -translate-x-1/2 w-[400px] h-[500px]  overflow-hidden "  style={{ transform: `translate(-10%, ${scrollY * -0.05}px)` }}>
          <img src="https://s6.uupload.ir/files/005_s6su.png" alt="" />
        </div>
      </div>
    </div>
  )
  
}

export default Category;