import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface SpecialProps{
  bg:String,
  image:StaticImageData,
  star:StaticImageData,
  side:String,
  text:String,
  discount:String,
}

export default function SpecialCards({bg,image,star,side,text,discount}:SpecialProps) {
  return (
    <div className={`w-[350px] lg:w-[450px] p-4 flex ${side==="left"?"md:mr-2 lg:mr-4":"md:ml-2 lg:ml-4"} items-center ${bg} rounded-sm`}>
      <div className='w-[50%]'>
        <div className='h-[100px] flex items-center'>
            <div className='h-[60px] w-[60px] rounded-full relative z-0 ml-4'>
              <div className='absolute inset-0 rounded-full'>
                <Image src={star} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}}/>
              </div>
              <div className='absolute inset-0 rounded-full flex flex-col items-center -rotate-12'>
                <span className={`block mt-4 text-[10px] leading-[4px]  ${side==="left"?"":"text-white"}`}>ONLY</span>
                <h1 className='text-2xl mt-[2px'><span className={`${side==="left"?"text-h1-text":"text-white"}`}>$</span><span className={`${side==="left"?"text-[#FF7D85]":"text-white"}`}>{discount}</span></h1>
            </div>
            </div>
     
        </div>
        <div>
        <span className='testimony text-deeprblack decoration-deeprblack my-2 before:border-deeprblack'>50% offer going</span>
        <h1 className='h3text'>{text}</h1>
        <p className='ptext'>Lorem Ipsum is that it has a more-or-less normal</p>
        </div>
      </div>
      <div className='w-[50%]'>
        <div className='h-full'>
          <Image src={image} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}} priority/>
        </div>
      </div>
   

  </div>
  )
}
