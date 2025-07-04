function OurStory() {
  return (
    <div>
      <div className='flex items-center justify-center my-24 px-32'>
        {/* Left Line */}
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>

        {/* Text */}
        <span className='px-8 text-zara-red text-lg font-semibold uppercase tracking-wider whitespace-nowrap'>
          OUR STORY
        </span>

        {/* Right Line */}
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
      </div>

      <div className='flex flex-row gap-8 justify-between px-40 my-32'>
        <div>
          <h1
            className='text-6xl leading-[6rem] text-[#CB6146]'
            style={{ fontFamily: '"Great Vibes", serif' }}
          >
            "a Fashion Giant Built from <br></br> Humble Beginnings”
          </h1>
        </div>

        <div className='flex flex-col gap-10 text-xl leading-8'>
          <p>
            Zara was started by Amancio Ortega in 1975. His first shop <br></br> was in central A
            Coruña, in Galicia, Spain, where the <br /> company is still based. He initially called
            it Zorba after the <br /> classic 1964 film Zorba the Greek, but after learning there{" "}
            <br /> was a bar with the same name two blocks ...
          </p>

          <div className='flex flex-row cursor-pointer text-[#CB6146] font-medium items-end'>
            <h1>Full Story</h1>
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
      <div className='px-40 flex justify-center'>
        <div className='w-full h-px bg-gray-200'></div>
      </div>
    </div>
  );
}

export default OurStory;
