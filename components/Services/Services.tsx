import React from 'react'
import { fakeHeader,servicesList } from '@/utils/constants'
import Image from 'next/image'

export default function Services() {
  return (
    <section className='mt-16 cont bg-h1-text py-28 flex flex-wrap text-white-text'>
        <div className='w-full lg:w-5/12 mb-4 md:mb-0'>
            <div className='mx-auto lg:mx-0 w-full sm:w-10/12 md:w-9/12 lg:w-10/12  '>
              <h1 className='text-center lg:text-left'><span className='testimony'>What We Offer</span></h1>
              <h3 className='h3text text-white-text text-center lg:text-left'>Our Great Service</h3>
              <p className="ptext text-white text-center lg:text-left mb-8 lg:mb-0">{fakeHeader}</p>
            </div>
        </div>
        <div className='lg:w-7/12 flex mx-auto w-fit overflow-auto pb-4 sm:pb-0'>
            {servicesList.map((item,key)=>{
              return(
                <div>
                  <div className='mx-2 h-[150px] w-[150px] border-[12px] border-[#323841]' key={key}>
                    <div className='h-[85px] flex items-center justify-center'>
                      <div className='h-[75px] w-[50px]'>
                        <Image src={item.image} alt="" style={{
                          objectFit:"contain",height:"100%",width:"100%"
                        }}/>
                      </div>
                    </div>
                    <div className='h-[41px] flex items-center justify-center'>{item.text}</div>
                </div>
                </div>
      
              )
            })}
        </div>
    </section>
  )
}
//323841