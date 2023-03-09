import React from 'react'
import { Historytext } from '@/utils/constants'
import Image from 'next/image'
import Resources from '@/public/exporter'
import { BriefHistoryText } from '@/utils/constants'

export default function BottomHero() {
  return (
    <section className='bg-r-pink cont pt-32'>
        <div className='flex flex-wrap justify-center'>
          {Historytext.map((item,key)=>{return(
           <div className={`w-full sm:w-6/12 lg:w-4/12 px-4 ${key===1?"mt-8 sm:mt-0":""} flex ${key===2?"mt-8 lg:mt-0":""} items-center`} key={key}>
            <div className='w-[45px] h-[45px] bg-h1-text rounded-full p-2'>
                <div className='h-full w-full  overflow-hidden'>
                  <Image src={item.logo} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}} priority/>
                </div>
              </div>
              <div className='pl-3'>
                  <h1>{item.header}</h1>
                  <p>{item.text}</p>
              </div>
           </div>
          )})}
        </div>
        <div className='flex flex-wrap mt-16 items-center'>
            <div className='h-[350px] w-full md:w-6/12 md:pr-8 lg:pr-16'>
              <Image src={Resources.Sittings} alt ="" style={{objectFit:"cover",height:"100%",width:"100%"}} priority/>
            </div>
            <div className='md:border-l md:border-base-text md:pl-4 w-full md:w-6/12 mt-6 md:mt-0'>
                <div>
                  <h1 className='text-h1-text h3text'>Story</h1>
                  <p className='ptext'>{BriefHistoryText.story}</p>
                </div>
                <div className='flex flex-wrap mt-2'>
                    <div className='w-full sm:w-6/12 md:w-full lg:w-6/12'>
                      <h1 className='text-h1-text h3text'>1996</h1>
                      <p className='ptext'>{BriefHistoryText.year1}</p>
                    </div>
                    <div className='w-full sm:w-6/12 md:w-full lg:w-6/12 '>
                      <h1 className='text-h1-text h3text'>2023</h1>
                      <p className='ptext'>{BriefHistoryText.year2}</p>
                    </div>
                </div>
                <div className='w-full mt-4'>
                <h1 className='h3text'>Josefine</h1>
                <div className='h-[100px] w-[200px] relative right-8'>
                  <Image src={Resources.Josefine} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}} priority/>
                </div>
            </div>
            </div>
      
        </div>
    
    </section>
  )
}
