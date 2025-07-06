

// این کامپوننت حالا imageUrl, productNumber, title و price را به عنوان props دریافت می‌کند.
function NumberedProductCard({ imageUrl, productNumber, title, price }) {
  return (

    <div className="relative overflow-hidden border border-gray-200 flex flex-col mx-4">
      {/* عدد بزرگ در پس‌زمینه */}
      <p
        className="absolute  left-1/2 transform -translate-x-1/2  text-[10rem] md:text-[12rem] font-bold text-gray-200 opacity-70 z-0 select-none"
      >
        {productNumber}
      </p>

      {/* کانتینر تصویر: flex-grow برای اشغال فضای موجود، flex-shrink-0 برای جلوگیری از کوچک شدن */}
      <div className="relative flex-grow flex items-center justify-center p-20  z-10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain mt-8"
        />
        {/* آیکون + در گوشه بالا راست */}
        <button className="absolute top-2 right-2  bg-opacity-80 rounded-full w-16 h-16 flex items-center justify-center border border-gray-200 hover:bg-opacity-100 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* بخش متن (عنوان و قیمت) */}
      <div className="p-4 text-center z-10">
        <p className="text-gray-600 text-sm mb-1">{title}</p>
        <p className="text-[#CB6146] text-lg font-semibold">{price}</p>
      </div>
    </div>
  );
}

export default NumberedProductCard;