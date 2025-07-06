import HeroProducts from "../components/ZaraProducts/HeroProducts"

function ZaraProducts() {
  return(
    <div>
      <div className="container mx-auto flex flex-col">
      <div className=" flex flex-row justify-between  my-12 mx-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 7.25h15M7.385 12h9.23m-6.345 4.75h3.46"/></svg>
        </div>
        <div className="flex justify-center">
          <h1 className="hidden lg:block relative lg:text-3xl text-xl z-10">THE NEW STUFF</h1>
          <p className="hidden lg:block absolute mt-[-1%] z-0 text-orange-800 opacity-20 text-3xl md:text-5xl lg:text-5xl font-bold"  style={{ fontFamily: '"Playfair Display", serif', }}>2223</p>
        </div>
        <div>
          <h1>Default Filters</h1>
        </div>
      </div>
        


        < HeroProducts />

      </div>
    </div>
  )
}

export default ZaraProducts