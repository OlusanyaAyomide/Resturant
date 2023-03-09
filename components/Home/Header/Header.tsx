import React,{useState} from 'react'
import Resources from "../../../public/exporter"
import Image from 'next/image'
import Button from '../../utility/Button'
import {AiOutlineShoppingCart} from "react-icons/ai"
import BelowNavBar from './BelowNavBar'
import Overlay from './OverLay'
import { useInView } from 'react-intersection-observer'
import FixedTop from './FixedTop'

interface HeaderProp{
    title?:String
}
export default function Header({title}:HeaderProp) {
  const [overlay,setOnOverlay] = useState<boolean>(false)
  const [isnavActive,setisNavActive] = useState<boolean>(false)
  const {ref,inView} = useInView()
  console.log(overlay)
  return (
  <header className='bg-h1-text text-white-text cont relative z-10'>
    <div className='flex items-center'>
      <div className='hidden md:flex md:w-4/12 items-center'>
			  <div><Button text={"Call - 987 654 321 "} border="border border-r-yellow"/></div>
      </div>
        <div className='w-full  md:block md:w-4/12'>
			<div>
				<div className='w-full h-[120px] md:h-[150px]'>
					<Image src={Resources.Logo} alt="" style={{objectFit:"contain",height:"100%",width:"100%"}} priority/>
				</div>
			</div>
		</div>
        <div className='hidden md:block md:w-4/12'>
			<div className='flex items-center justify-end w-full'>
				<span className='text-xl mr-4'><AiOutlineShoppingCart/></span>
				<Button text={"Reservation"} color="text-h1-text" bg="bg-r-yellow"></Button>
			</div>
		</div>
    </div>
    <div ref={ref}>
      <BelowNavBar/>
    </div>
    {!inView && <FixedTop setOnOverlay={setOnOverlay} setisNavActive={setisNavActive} isnavActive={isnavActive} overlay={overlay}/>}
	{title && <div className='font-infant flex justify-center text-4xl py-8 sm:text-5xl lg:text-[60px] md:text-[50px] lg:leading-[46.26px]'>
		<span>{title}</span>
		</div>}
    {overlay && <Overlay setOnOverlay={setOnOverlay} setisNavActive={setisNavActive}/>}
  </header>
  )
}
