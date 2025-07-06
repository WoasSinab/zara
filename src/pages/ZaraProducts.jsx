import HeroProducts from "../components/ZaraProducts/HeroProducts"
import ZaraProCards from "../components/ZaraProducts/ZaraProCards";

function ZaraProducts() {

  const products = [
    {
      id: 1,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_1_zd2z.png",
      productNumber: "01",
      title: "POPPY SWEATER - MEDIUM GREY MELANGE",
      price: "$69.99"
    },
    {
      id: 2,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_2_u0bz.png", // تصویر دوم شما
      productNumber: "02",
      title: "VIANNEY DB BREASTED SHORT COAT - CAMEL",
      price: "$99.99"
    },
    {
      id: 3,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_3_kzq2.png", // تصویر سوم شما
      productNumber: "03",
      title: "POPPY SWEATER - DARK NAVY",
      price: "$59.99"
    },
    {
      id: 4,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_4_2n7n.png", // تصویر چهارم شما
      productNumber: "04",
      title: "POPPY SWEATER - MEDIUM GREY MELANGE",
      price: "$69.99"
    },
    {
      id: 5,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_5_nlfs.png", // تصویر پنجم شما
      productNumber: "05",
      title: "VIANNEY DB BREASTED SHORT COAT - CAMEL",
      price: "$99.99"
    },
    {
      id: 6,
      imageUrl: "https://s6.uupload.ir/files/image_5-removebg-preview_6_774a.png", // تصویر ششم شما
      productNumber: "06",
      title: "POPPY SWEATER - DARK NAVY",
      price: "$59.99"
    },
  ];



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


    <section className="w-full py-16 ">
      <div style={{ fontFamily: '"Playfair Display", serif' }}  className="mx-4 relative pb-12 font-bold flex flex-row text-3xl items-center">
        <h1 className=" ">Top Six</h1>
        <p className="font-medium text-8xl absolute left-14 z-0 text-[#CB6146] opacity-20">6</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center z-20 ">
        {products.map(product => (
          < ZaraProCards 
            key={product.id}
            imageUrl={product.imageUrl}
            productNumber={product.productNumber}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>

      </div>
    </div>
  )
}

export default ZaraProducts