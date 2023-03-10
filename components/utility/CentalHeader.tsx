import React from 'react'

interface centralHeaderProps{
    title:String
    header?:String,
    paragraph?:String,

}

export default function CentalHeader({title,header,paragraph}:centralHeaderProps) {
  return (
    <div className='mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-7/12 '>
        <h1 className='text-center mb-2'><span className='testimony'>{title}</span></h1>
        {header && <h1 className='h3text text-center'>{header}</h1>}
        {paragraph && <p className='ptext text-center'>{paragraph}</p>}
    </div>
  )
}
