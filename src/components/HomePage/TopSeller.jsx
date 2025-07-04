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
    <div>
      <div className='flex items-center justify-center my-24 px-32'>
        {/* Left Line */}
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>

        {/* Text */}
        <span className='px-8 text-zara-red text-lg font-semibold uppercase tracking-wider whitespace-nowrap'>
          TOP SELLER
        </span>

        {/* Right Line */}
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
      </div>

      <div>

        <div className='flex flex-row px-32'>
          {products.map(product => (
          <HomeCard key={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price}/>
        ))}
        </div>

      </div>

      <div>
        <div className='flex items-center justify-center my-12 space-x-4'>
          {/* Left Arrow */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className='p-2 text-[#CB6146] hover:text-red-700 transition-colors duration-200'
            disabled={currentPage === 1} // غیرفعال کردن فلش چپ در صفحه اول
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className='flex space-x-4'>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center w-14 h-14 rounded-full text-lg font-medium transition-all duration-200
              ${
                currentPage === page
                  ? "bg-red-100 text-[#CB6146]" // رنگ صورتی روشن برای پس‌زمینه و رنگ متن برای صفحه فعال
                  : "text-gray-600 hover:text-[#CB6146]" // رنگ خاکستری برای صفحات غیرفعال
              }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className='p-2 text-[#CB6146] hover:text-red-700 transition-colors duration-200'
            disabled={currentPage === totalPages} // غیرفعال کردن فلش راست در صفحه آخر
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSeller;
