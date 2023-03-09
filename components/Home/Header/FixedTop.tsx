import Image from 'next/image'
import React from 'react'
import Resources from "../../../public/exporter"
import NavbarButton from './NavBarButton'
import Button from '@/components/utility/Button'

interface NavbarButtonProps{
    overlay:boolean,
    setOnOverlay:React.Dispatch<React.SetStateAction<boolean>>,
    isnavActive:boolean,
    setisNavActive:React.Dispatch<React.SetStateAction<boolean>>
}

export default function FixedTop(props:NavbarButtonProps) {
  return (
    <section className='bg-h1-text cont z-40 flex items-center py-1 fixed left-0 top-0 w-full'> 
      <span className='mr-1'>
        <NavbarButton {...props}/>
      </span>
      <div className='h-[50px] w-[120px]'>
        <div className='h-full'>
          <Image src ={Resources.Logo} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}} priority/>
        </div>
      </div>
      <div className='w-full flex justify-end'>
          <span className='ml-4'>
            <Button text={"Call - 987 654 321"} border={"border border-r-yellow"}/>
          </span>
          <span className='ml-4 hidden md:inline-block'>
            <Button text={"Reservations"} bg={"bg-r-yellow"} color="text-h1-text"/>
          </span>
      </div>
    </section>
  )
}
