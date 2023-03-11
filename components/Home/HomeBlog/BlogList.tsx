import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/utility/Button'

interface BlogProp{
    image:StaticImageData,
    title:String,
    heading:String,
    paragraph:String,
    viewmore?:Boolean
}

export default function BlogList({image,title,heading,paragraph,viewmore}:BlogProp) {
  return (
<div className={`mx-auto sm:w-10/12 sm:max-w-[450px] md:max-w-none md:w-full md:px-2 lg:max-w-[500px] ${!viewmore?"lg:ml-auto lg:mr-2 mb-8 md:mb-0":"lg:mr-auto lg:ml-2"} rounded-sm`}>
    <div className={`w-full h-[200px] ${!viewmore?"":"relative darkcover"}`}>
        <Image src={image} alt="" style={{objectFit:"cover",height:"100%",width:"100%"}}/>
        {viewmore && <div className='absolute inset-0 z-20 flex justify-center items-center'>
					<Button text="View More" bg={"border border-r-yellow text-r-yellow"}/>
          </div>}
    </div>
    <div className='pt-2 border border-[#c9bfbf border-t-none pb-4 px-2 md:px-4'>
        <span className='testimony mb-1'>{title}</span>
        <h1 className='h4text'>{heading}</h1>
        <p className='ptext mt-1'>{paragraph}</p>
    </div>
</div>
  )
}
