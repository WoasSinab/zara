import React, { useState } from 'react'
import HomeCard from "../HomePage/HomeCard";


function ZaraProTopSeller() {

    const products = [
    { id: 1, imageUrl: "https://s6.uupload.ir/files/011_zaei.png", title:"X Trench Coat" , price:"$65"},
    { id: 2, imageUrl: "https://s6.uupload.ir/files/012_c6if.png", title:"Golden Coat With Jacket", price:"$45" },
    { id: 3, imageUrl: "https://s6.uupload.ir/files/013_4d9j.png", title:"Neo White Jacket", price:"$99" },
  ];



  return (

    <div className="flex flex-col py-12">
      <div
            style={{ fontFamily: '"Playfair Display", serif' }}
            className='mx-4 relative font-bold flex flex-row text-3xl items-center'
          >
            <h1 className=' '>Top Seller</h1>
            <p className='font-medium text-8xl absolute left-10 z-0 text-[#CB6146] opacity-20' style={{ fontFamily: '"Great Vibes", serif' }}>Seller</p>
          </div>


          {/* Cards */}
      <div className='flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 '>
        {products.map(product => (
          <HomeCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>

  );
}

export default ZaraProTopSeller;