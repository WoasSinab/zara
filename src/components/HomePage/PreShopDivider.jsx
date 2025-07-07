
function PreShopDivider() {
  return (
    <div className='flex items-center justify-between my-8 w-full'>
      <button
        className='bg-white text-black px-8 py-3 rounded-md border-2 border-zara-red text-zara-red font-semibold whitespace-nowrap
        hover:bg-orange-700 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zara-red focus:ring-opacity-50'
        style={{
          boxShadow: "4px 4px 0px 0px #CB6146", 
        }}
      >
        Pre shop
      </button>
    </div>
  );
}

export default PreShopDivider;
