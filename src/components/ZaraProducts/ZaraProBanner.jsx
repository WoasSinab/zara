import PreShopDivider from "../HomePage/PreShopDivider";

function ZaraProBanner() {
  return (
    <div className="flex flex-col lg:flex-row w-full my-12">
      <div className="lg:w-1/2 h-auto">
        <img src="https://s6.uupload.ir/files/014_hmi.png" alt="" />
      </div>


      <div className="bg-[#431C13] text-gray-200 lg:w-1/2 lg:p-24 p-8 flex flex-col gap-8">
        <p className="text-md font-light">LIMITED OFFER</p>
        <h1 className="lg:text-5xl text-3xl leading-16">30% Off Only This Friday And Get Special Gift </h1>
        
        < PreShopDivider />

      </div>
    </div>
  )
}

export default ZaraProBanner;