function Cart() {
  return (
    <div className="">
      {/* Product Items */}
      {[1, 2].map((_, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row justify-between mx-6 md:mx-20 lg:mx-40 my-6 lg:my-12 border border-gray-200"
        >
          <div className="flex flex-col sm:flex-row m-6 md:m-12 p-4 gap-6 md:gap-12">
            <div className="w-full sm:w-48 border border-gray-200 p-4 flex justify-center">
              <img
                src={
                  index === 0
                    ? "https://s6.uupload.ir/files/image_5-removebg-preview_1_sx0i.png"
                    : "https://s6.uupload.ir/files/image_5-removebg-preview_2_zemm.png"
                }
                alt=""
                className="w-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="font-normal my-2 text-gray-500 text-sm sm:text-base">
                  NORTH ZACKSUN
                </h1>
                <h2 className="font-medium text-lg sm:text-xl">
                  VIANNEY DB BREASTED SHIRT - CAMEL VERSION
                </h2>
              </div>
              <div className="flex flex-row gap-3 items-center mt-4">
                <div className="w-5 h-5 bg-cyan-950"></div>
                <p>XL</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:mx-16 mb-6 sm:mb-0">
            <div className="flex flex-row items-center gap-2">
              <p>x1</p>
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </g>
                </svg>
              </span>
            </div>
            <div className="hidden sm:block">|</div>
            <div>
              <h1 className="font-semibold text-2xl sm:text-3xl text-[#CB6146]">
                ${index === 0 ? "125" : "225"}
              </h1>
            </div>
          </div>
        </div>
      ))}

      {/* Dotted Separator */}
      <div className="mx-6 md:mx-20 lg:mx-40 border-b-2 border-dotted border-gray-300 h-px" />

      {/* Total Summary */}
      <div className="mx-6 md:mx-20 lg:mx-72 my-12 lg:my-24 flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-80">
          <div className="flex flex-col gap-4 text-base sm:text-lg lg:text-xl">
            <h1 className="font-medium text-3xl lg:text-4xl">Total</h1>
            <p>Price Delivery</p>
            <p>Taxes</p>
            <p>Total Promo</p>
          </div>

          <div className="flex flex-col gap-4 text-base sm:text-lg lg:text-xl">
            <h1 className="font-medium text-3xl lg:text-4xl">$450.00</h1>
            <p>Free</p>
            <p>$5.00</p>
            <p>$13.00</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-auto">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-700"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
              %
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <button className="w-full sm:w-auto bg-gray-800 text-white px-8 sm:px-16 lg:px-24 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
              Checkout Now
            </button>
            <img
              className="w-28 sm:w-32"
              src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
