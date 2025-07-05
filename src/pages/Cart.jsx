function Cart() {
  return(
    <div className="">

      <div className="flex flex-row justify-between mx-40 my-12 border border-gray-200">

        <div className="flex flex-row m-12 p-4 gap-12">
          <div className="w-48 border border-gray-200 p-4">
            <img src="https://s6.uupload.ir/files/image_5-removebg-preview_1_sx0i.png" alt="" />
          </div>
          <div className="flex flex-col my-4 justify-between">

            <div>
            <h1 className="font-normal my-2 text-gray-500">NORTH ZACKSUN</h1>
            <h2 className="font-medium text-xl">VIANNEY DB BREASTED SHIRT - CAMEL VERSION</h2>
            </div>
            <div className="flex flex-row gap-3 items-center">
            <div className="w-5 h-5 bg-cyan-950"></div>
            <p>XL</p>
            </div>
            
          </div>
        </div>


        <div className="flex flex-row mx-16  items-center gap-10">
          <div className="flex flex-row  items-center gap-4">
            <p>x1</p>
            <span className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></g></svg>
            </span>
          </div>
          <h1>|</h1>
          <div>
            <h1 className="font-semibold text-3xl text-[#CB6146]">$125</h1>
          </div>
        </div>
      </div>

            <div className="flex flex-row justify-between mx-40 my-12 border border-gray-200">

        <div className="flex flex-row m-12 p-4 gap-12">
          <div className="w-48 border border-gray-200 ">
            <img src="https://s6.uupload.ir/files/image_5-removebg-preview_2_zemm.png" alt="" />
          </div>
          <div className="flex flex-col my-4 justify-between">

            <div>
            <h1 className="font-normal my-2 text-gray-500">NORTH ZACKSUN</h1>
            <h2 className="font-medium text-xl">VIANNEY DB BREASTED SHIRT - CAMEL VERSION</h2>
            </div>
            <div className="flex flex-row gap-3 items-center">
            <div className="w-5 h-5 bg-cyan-950"></div>
            <p>XL</p>
            </div>
            
          </div>
        </div>


        <div className="flex flex-row mx-16  items-center gap-10">
          <div className="flex flex-row  items-center gap-4">
            <p>x1</p>
            <span className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></g></svg>
            </span>
          </div>
          <h1>|</h1>
          <div>
            <h1 className="font-semibold text-3xl text-[#CB6146]">$225</h1>
          </div>
        </div>
      </div>

      <div className="mx-40 border-b-2 border-dotted border-gray-300 h-px"></div>

      
      <div className="mx-40 my-24 flex flex-row justify-between">
        <div className="flex flex-row gap-80">
          <div className="flex flex-col gap-12 text-xl">
            <h1 className="font-medium text-4xl">Total</h1>
            <p>Price Delivery</p>
            <p>Taxes</p>
            <p>Total Promo</p>
          </div>

          <div className="flex flex-col gap-12 text-xl">
            <h1 className="font-medium text-4xl">$450.00</h1>
            <p>Free</p>
            <p>$5.00</p>
            <p>$13.00</p>
          </div>

        </div>




        <div className="flex flex-col m-12 gap-8">

                <div className="relative w-full max-w-lg mb-8">
        <input
          type="text"
          placeholder="Promo Code"
          className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 text-gray-700"
        />
        {/* Percentage Icon */}
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
          %
        </span>
      </div>
          <div className="flex flex-row justify-between gap-24">
                    <button className="bg-gray-800 text-white px-12 py-4 rounded-lg text-lg font-semibold  hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
          Checkout Now
        </button>
            <img className="w-32" src="https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png" alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart