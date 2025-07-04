function Social() {  return (
    <div className='m-40'>
      <div className='flex flex-row items-end gap-4'>
        <div className='w-56'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' alt='' />
        </div>
        <p className='text-[#CB6146] text-2xl font-normal'>ON SOCIAL</p>
      </div>

      <div className='flex flex-row gap-8 my-12'>
        <div>
          <img src='https://s6.uupload.ir/files/011_5r4o.png' alt='' />
        </div>
        <div>
          <img src='https://s6.uupload.ir/files/012_l34u.png' alt='' />
        </div>
        <div>
          <img src='https://s6.uupload.ir/files/013_4fx2.png' alt='' />
        </div>
        <div className='flex flex-col justify-between'>
          <img src='https://s6.uupload.ir/files/014_a2z9.png' alt='' />
          <div className='flex flex-row items-end text-[#CB6146] cursor-pointer'>
            <h1 className='font-normal text-xl'>FOLLOW US ON INSTAGRAM</h1>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                <path
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='1.5'
                  d='M17 7v10m0 0H7m10 0L7 7'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className='px-40 pt-12 flex justify-center'>
        <div className='w-full h-px bg-gray-200'></div>
      </div>
    </div>
  );
}

export default Social;
