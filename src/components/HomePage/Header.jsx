function Header() {
  return (
    <header>
      <div className='container mx-auto flex items-center justify-between h-16 border-b-2 border-gray-200 px-4 sm:px-6 lg:px-10'>
        {/* Burger Menu */}
        <div className='w-6 sm:w-8'>
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
        </div>

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
          <button className='w-6 sm:w-7'>
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
          <div className='w-6 sm:w-7'>
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
          </div>
          <div className='w-6 sm:w-7'>
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
