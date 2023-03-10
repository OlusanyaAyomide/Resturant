import React from 'react'
import { fakeHeader,PopularList } from '@/utils/constants'
import Resources from '@/public/exporter'
import SpecialCards from './SpecialCards'
import CentalHeader from '@/components/utility/CentalHeader'
import Image from 'next/image'
import Button from '@/components/utility/Button'

export default function SpecialAndPopular() {
  return (
    <section className='mt-16 cont'>
      <CentalHeader title="offer" header="Our Special Offer Dishes" paragraph={fakeHeader} />
        <div className='mt-4 flex flex-wrap'>
          <div className='flex justify-center md:justify-end w-full md:w-6/12'>
            <SpecialCards bg="bg-[#C6EAF2]" text={"Chicken Burger"} side="left" image={Resources.SpecialOffer01} star={Resources.WhiteStar} discount="9"/>
          </div>
          <div className='flex justify-center md:justify-start w-full md:w-6/12 mt-8 md:mt-0'>
            <SpecialCards bg="bg-[#D7D7d7]" text={"Chicken Pizza"} side="right" image={Resources.SpecialOffer02} star={Resources.BlackStar} discount="10"/>
          </div>
        </div>
        <div className='mt-12'>
          <CentalHeader title={"menu"} header="Popular Dishes" paragraph={fakeHeader} />
          <div className='mt-2 overflow-auto flex flex-wrap sm:flex-nowrap sm:pb-4 pt-6'>
            {PopularList.map((item,key)=>{
              return(
                <div key={key} className="w-6/12 sm:w-full px-2 mb-8 sm:mb-0">
                    <div className='w-full sm:w-[200px] md:w-[220px] lg:w-[270px]'>
                      <div className='h-[200px] rounded-sm overflow-hidden w-full'>
                        <Image src = {item.image} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}}/>
                      </div>
                      <div className='flex justify-between pt-1'>
                        <span className='h4text'>{item.title}</span>
                        <span className='h4text'>{item.price}</span>
                      </div>
                      <p className="ptext">{item.content}</p>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
        <div><span className="block text-center mt-4"><Button text={"See all dishes"} bg="text-r-yellow border border-r-yellow"/></span></div>
    </section>
  )
}
