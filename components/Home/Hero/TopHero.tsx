import React from 'react'
import Button from '@/components/utility/Button'
import { Typography } from '@/utils/constants'
import Resources from '@/public/exporter'
import Image from 'next/image'
export default function TopHero() {
  return (
    <section className='bg-h1-text cont text-white-text'>
        <div className='flex flex-wrap items-center'>
          <div className='w-full md:w-6/12 py-20 md:py-0'>
            <h1 className='welcome-text mb-2 text-white'><span>Welcome to</span><br/><span>Restaurantate</span></h1>
            <p>{Typography.header}</p>
            <div className='mt-2'>
              <span><Button text="View More" border={"border border-r-yellow"}/></span>
            </div>
          </div>
          <div className='w-full md:w-6/12'>
              <div className='mx-auto w-[350px] md:w-[330px] lg:w-[350px] h-[400px] rounded-tl-[200px] rounded-tr-[200px] border-[18px]  border-[#3E434A] border-b-0'>
                <div className='h-full'>
                  <div className='w-full shadow-trans-black shadow-xl h-[115%] overflow-hidden rounded-tl-[200px] rounded-tr-[200px] '>
                    <Image src={Resources.CafeView} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}} priority/>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}
