// src/components/WinterSec.jsx
import React, { useState, useEffect } from 'react'; // اضافه کردن useState و useEffect
import PreShopDivider from '../HomePage/PreShopDivider';

function WinterSec() {
  // مقادیر اولیه برای شمارشگر (می‌توانید اینها را تغییر دهید)
  const initialSeconds = 59;
  const initialMinutes = 14;
  const initialHours = 13;
  const initialDays = 25;

  // وضعیت‌های React برای نگهداری مقادیر شمارشگر
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  // useEffect برای منطق شمارش معکوس
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {

          return initialSeconds;
        }
        return prevSeconds - 1; 
      });

    }, 1000);


    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full my-24 bg-[#F9E9E6] px-4 md:px-32 flex flex-col lg:flex-row items-center justify-center"> {/* px-4 برای موبایل */}
      {/* Left Image Section */}
      <div className="w-full lg:w-1/4 my-8 lg:my-48 lg:mx-32"> 
        <img src="https://s6.uupload.ir/files/010_oy5z.png" alt="Winter Collection" className="w-full h-auto object-cover " />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col gap-8 md:gap-12 mx-4 md:mx-24 my-8 md:my-48 items-center lg:items-start text-center lg:text-left"> {/* mx-4/my-8 برای موبایل */}
        {/* Headline: WINTER is coming ... */}
        <div className="flex flex-col md:flex-row items-end gap-2 md:gap-6" style={{ fontFamily: '"Playfair Display", serif' }}>
          <h1 className="text-6xl md:text-8xl text-gray-800 leading-none">WINTER</h1>
          <p className="text-lg md:text-xl text-gray-600">is coming ...</p>
        </div>

        {/* Description Paragraph */}
        <p className="leading-relaxed text-gray-700 max-w-lg">
          Our winter sale starts on December 1st and continues until January 15th.
          Warm winter clothes, boots, jackets, blankets and many more items will be
          available with discounts up to 60% off!
        </p>

        {/* Countdown Cards */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mt-4"> {/* flex-wrap برای موبایل */}
          {/* Day Card */}
          <div className="flex flex-col bg-white p-6 md:p-8 items-center gap-4 md:gap-6 rounded-t-full shadow-md w-28 h-36 md:w-32 md:h-40">
            <h1 className="text-5xl md:text-6xl text-gray-800 leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>{days}</h1>
            <p className="text-base md:text-xl text-gray-400 italic">Day</p>
          </div>
          {/* Hours Card */}
          <div className="flex flex-col bg-white p-6 md:p-8 items-center gap-4 md:gap-6 rounded-t-full shadow-md w-28 h-36 md:w-32 md:h-40">
            <h1 className="text-5xl md:text-6xl text-gray-800 leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>{hours}</h1>
            <p className="text-base md:text-xl text-gray-400 italic">Hours</p>
          </div>
          {/* Minutes Card */}
          <div className="flex flex-col bg-white p-6 md:p-8 items-center gap-4 md:gap-6 rounded-t-full shadow-md w-28 h-36 md:w-32 md:h-40">
            <h1 className="text-5xl md:text-6xl text-gray-800 leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>{minutes}</h1>
            <p className="text-base md:text-xl text-gray-400 italic">Minutes</p>
          </div>
          {/* Seconds Card - With Animation */}
          <div className="flex flex-col bg-white p-6 md:p-8 items-center gap-4 md:gap-6 rounded-t-full shadow-md w-28 h-36 md:w-32 md:h-40">
            {/*
              'key={seconds}' باعث می‌شود React این <h1> را هر بار که 'seconds' تغییر می‌کند،
              به عنوان یک عنصر جدید در نظر بگیرد و انیمیشن CSS مجدداً اجرا شود.
            */}
            <h1 key={seconds} className="text-5xl md:text-6xl text-gray-800 leading-none animate-number-change" style={{ fontFamily: '"Playfair Display", serif' }}>
              {seconds < 10 ? `0${seconds}` : seconds} {/* برای نمایش 05 به جای 5 */}
            </h1>
            <p className="text-base md:text-xl text-gray-400 italic">Second</p>
          </div>
        </div>

        <div>
          < PreShopDivider />
        </div>
      </div>
    </div>
  );
}

export default WinterSec;