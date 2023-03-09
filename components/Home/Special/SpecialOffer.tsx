import React from 'react'
import { Typography,SpecialOffersList } from '@/utils/constants'
import Image from 'next/image'
import Resources from '@/public/exporter'
import Button from '@/components/utility/Button'

export default function SpecialOffer() {

  return (
    <section className='mt-16 cont'>
        <h1 className='text-base font-infant mb-4'>Menu</h1>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-5/12 lg:w-4/12'>
            <div className='w-full md:w-full md:pr-2'>
              <h1 className='h3text'>Try Our Special Offer</h1>
              <p className='ptext'>{Typography.header}</p>
              <div className='h-[400px] sm:w-[350px] md:w-full mt-4'>
                  <Image src={Resources.Special} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}} priority/>
              </div>
            </div>
            <span className="inline-block mt-4"><Button text={"See All Dishes"} border="border border-r-yellow text-r-yellow"/></span>
          </div>
          <div className='w-full md:w-7/12 lg:w-8/12 md:pl-4 mt-8 md:mt-0'>
        {SpecialOffersList.map((item,key)=>{
          return(
            <div key={key}>
              <h1 className="h3text">{item.heading}</h1>
              {item.mealList.map((item,key)=>{
                return(
                  <div key={key} className="flex items-center my-4">
                  <div>
                    <div className='w-[35px] h-[35px] rounded-full overflow-hidden'>
                      <Image src={item.image} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}} priority/>
                    </div>
                  </div>
                  <div className='w-full pl-2'>
                    <h1 className='h4text'>{item.header}</h1>
                    <div className='flex justify-between'>
                      <p className='ptext whitespace-nowrap'>{item.text}</p>
                      <div className='w-full h-[1px] mx-2 relative top-3 border rounded-full border-dotted border-[#c9bfbf] dots'>
                      </div>
                      <span className='ptext'>${item.price}</span>
                    </div>
                  </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
      </div>

    </section>
  )
}
