import React from 'react'
import { TestimoniesList } from '@/utils/constants'
import Image from 'next/image'
import Resources from '@/public/exporter'

export default function Testimonies() {
  return (
    <section className='text-white-text bg-h1-text cont mt-12 pt-16'>
      <span className='testimony'>Testimonies</span>
      <h1 className='h3text text-white-text'>What our client say</h1>
      <p className='ptext text-white-text mb-6'>We love to hear from customers, so please leave a comment or say hello in an email.</p>
      <div className='flex overflow-auto'>
        {TestimoniesList.map((item,key)=>{
          return(
            <div key={key}>
              <div className='w-[300px] px-2 mb-4'>
                <div className='bg-[#343942] rounded-sm p-2'>
                  <div className='flex items-center pb-4 border-b border-white-text'>
                    <div>
                      <div className='h-[35px] w-[35px] rounded-full overflow-hidden'>
                        <Image src={item.image} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}}/>
                      </div>
                    </div>
                    <div className='w-full pl-2'>
                      <h1 className='h4text text-white-text mb-0'>{item.name}</h1>
                      <p className='ptext text-r-yellow'>{item.location}</p>
                    </div>
                  </div>
                  <p className='ptext text-white-text mt-4'>{item.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='removecont h-[300px] mt-16'>
          <Image src ={Resources.Testimony} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}}/>
      </div>
    </section>
  )
}

