import PreShopDivider from "../HomePage/PreShopDivider";

function ZaraProBanner() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-1/2 h-auto">
        <img src="https://s6.uupload.ir/files/014_hmi.png" alt="" />
      </div>


      <div className="bg-[#431C13] text-gray-200 w-1/2 p-24 flex flex-col gap-8">
        <p className="text-xl font-light">LIMITED OFFER</p>
        <h1 className="text-5xl leading-16">30% Off Only This Friday And Get Special Gift </h1>
        
        < PreShopDivider />

      </div>
    </div>
  )
}

export default ZaraProBanner;