import React, { useState } from 'react';
import SideMenu from '../HomePage/SideMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // وضعیت برای باز/بسته بودن نوار جستجو

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false); // اگر منو باز شد، جستجو بسته شود
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false); // اگر جستجو باز شد، منو بسته شود
  };

  return (
    <header className=" text-gray-800 w-full border-b border-gray-200 py-4 md:py-6 lg:py-8">
      <div className='container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-10'>
        {/* Burger Menu Button */}
        <button onClick={toggleMenu} className='w-6 sm:w-8 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200'>
          <svg
            className='text-gray-700 w-full h-auto'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5'
            />
          </svg>
        </button>

        {/* Logo */}
        <div className='w-20 sm:w-28'>
          <img
            className='mx-auto'
            src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg'
            alt='Zara Logo'
          />
        </div>

        {/* Icons */}
        <div className='flex items-center gap-3 sm:gap-6'>
          {/* Search Icon - حالا با کلیک فعال می‌شود */}
          <button onClick={toggleSearch} className='w-6 sm:w-7 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200'>
            <svg
              className='text-gray-700 w-full h-auto'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z'
              />
            </svg>
          </button>
          {/* User Icon - در موبایل پنهان، در sm به بالا نمایش داده می‌شود */}
          <button className='hidden sm:block w-6 sm:w-7 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200'>
            <svg
              className='text-gray-700 w-full h-auto'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0'
              />
            </svg>
          </button>
          {/* Shopping Bag Icon - در موبایل پنهان، در sm به بالا نمایش داده می‌شود */}
          <button className='hidden sm:block w-6 sm:w-7 p-1 rounded-md hover:bg-gray-100 transition-colors duration-200'>
            <svg
              className='text-gray-700 w-full h-auto'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='m19.26 9.696l1.385 9A2 2 0 0 1 18.67 21H5.33a2 2 0 0 1-1.977-2.304l1.385-9A2 2 0 0 1 6.716 8h10.568a2 2 0 0 1 1.977 1.696ZM14 5a2 2 0 1 0-4 0'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Input Field - به صورت کشویی ظاهر می‌شود */}
      <div
        className={`w-full bg-gray-50 transition-all duration-300 ease-in-out overflow-hidden ${
          isSearchOpen ? 'max-h-20 py-4 border-b border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* کامپوننت SideMenu */}
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;