function OurStory() {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className='flex items-center justify-center my-16 md:my-24 px-6 md:px-32'>
        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>

        <span className='px-4 md:px-8 text-zara-red text-base md:text-lg font-semibold uppercase tracking-wider whitespace-nowrap'>
          OUR STORY
        </span>

        <div className='flex-grow border-t border-gray-300 relative'>
          <span className='absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-300'></span>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row gap-8 justify-between px-6 md:px-40 my-16 md:my-32'>
        <div className='text-center md:text-left'>
          <h1
            className='text-3xl md:text-6xl leading-[3rem] md:leading-[6rem] text-[#CB6146]'
            style={{ fontFamily: '"Great Vibes", serif' }}
          >
            "a Fashion Giant Built from <br className='hidden md:block' /> Humble Beginnings”
          </h1>
        </div>

        <div className='flex flex-col gap-6 text-base md:text-xl leading-7 md:leading-8'>
          <p>
            Zara was started by Amancio Ortega in 1975. His first shop <br className='hidden md:block' /> was in central A Coruña, in Galicia, Spain, where the <br className='hidden md:block' /> company is still based. He initially called it Zorba after the <br className='hidden md:block' /> classic 1964 film Zorba the Greek, but after learning there <br className='hidden md:block' /> was a bar with the same name two blocks ...
          </p>

          <div className='flex flex-row items-center gap-2 text-[#CB6146] font-medium cursor-pointer'>
            <a href="https://en.wikipedia.org/wiki/Zara" className="text-base md:text-lg">Full Story</a>
            <span>
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
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='px-6 md:px-40 flex justify-center'>
        <div className='w-full h-px bg-gray-200'></div>
      </div>
    </div>
  );
}

export default OurStory;
