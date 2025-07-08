function Social() {
  return (
    <div className='mx-6 md:mx-40 my-16 md:my-40'>
      {/* Header */}
      <div className='flex flex-col md:flex-row items-center md:items-end gap-4'>
        <div className='w-40 md:w-56'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='Zara Logo' />
        </div>
        <p className='text-[#CB6146] text-xl md:text-2xl font-normal text-center md:text-left'>
          ON SOCIAL
        </p>
      </div>

      {/* Images */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-8 my-10 md:my-12'>
        <div>
          <img src='https://s6.uupload.ir/files/011_5r4o.png' alt='social 1' />
        </div>
        <div>
          <img src='https://s6.uupload.ir/files/012_l34u.png' alt='social 2' />
        </div>
        <div>
          <img src='https://s6.uupload.ir/files/013_4fx2.png' alt='social 3' />
        </div>
        <div className='flex flex-col justify-between gap-4'>
          <img src='https://s6.uupload.ir/files/014_a2z9.png' alt='social 4' />
          <a href="https://www.instagram.com/zara/" className='flex flex-row items-center text-[#CB6146] cursor-pointer'>
            <h1 className='font-normal text-base md:text-xl'>FOLLOW US ON INSTAGRAM</h1>
            <span className="ml-2">
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M17 7v10m0 0H7m10 0L7 7'
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className='px-0 md:px-40 pt-6 md:pt-12 flex justify-center'>
        <div className='w-full h-px bg-gray-200'></div>
      </div>
    </div>
  );
}

export default Social;
