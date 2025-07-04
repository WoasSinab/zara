import React, { useState } from 'react'
import HomeCard from '../HomePage/HomeCard';

function TopSeller() {
  const products = [
    { id: 1, imageUrl: "https://s6.uupload.ir/files/007_rio9.png", title:"X Trench Coat" , price:"$65"},
    { id: 2, imageUrl: "https://s6.uupload.ir/files/008_hhjj.png", title:"Golden Coat With Jacket", price:"$45" },
    { id: 3, imageUrl: "https://s6.uupload.ir/files/009_ge7.png", title:"Neo White Jacket", price:"$99" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="w-full">
      {/* Title */}
      <div className='flex items-center justify-center my-16 md:my-24 px-6 md:px-32'>
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
        <span className='px-4 md:px-8 text-zara-red text-sm md:text-lg font-semibold uppercase tracking-wider whitespace-nowrap'>
          TOP SELLER
        </span>
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
      </div>

      {/* Cards */}
      <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 px-6 md:px-32'>
        {products.map(product => (
          <HomeCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-center my-12 space-x-2 md:space-x-4'>
        {/* Left Arrow */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          className='p-2 text-[#CB6146] hover:text-red-700 transition-colors duration-200 disabled:opacity-40'
          disabled={currentPage === 1}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
          </svg>
        </button>

        {/* Pages */}
        <div className='flex space-x-2 md:space-x-4'>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full text-sm md:text-lg font-medium transition-all duration-200
              ${currentPage === page
                  ? "bg-red-100 text-[#CB6146]"
                  : "text-gray-600 hover:text-[#CB6146]"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          className='p-2 text-[#CB6146] hover:text-red-700 transition-colors duration-200 disabled:opacity-40'
          disabled={currentPage === totalPages}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TopSeller;
