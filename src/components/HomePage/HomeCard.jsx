import React from "react";
function HomeCard({ imageUrl, title, price }) {
  return (
    <div className='flex flex-col gap-6 w-full p-12'>
      <div>
        <img
          src={imageUrl || "https://placehold.co/400x500/E9E9E9/333333?text=Product"}
          alt='Product Image'
        ></img>
        <div></div>
      </div>

      <div className='flex flex-row justify-between'>
        <h3 className='text-xl font-medium text-gray-700 text-start'>{title}</h3>
        <h2 className='font-medium text-lg text-[#CB6146]'>{price}</h2>
      </div>

      <div className='flex justify-center'>
        <div className='w-full h-px bg-gray-200'></div>
      </div>

      <div className='flex flex-row cursor-pointer text-[#CB6146] font-medium'>
        <h1>SHOW DETAIL</h1>
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
  );
}

export default HomeCard;
