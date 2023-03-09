import React, { useState } from 'react'
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
import { pages } from '@/utils/constants'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DropDownMotion } from '@/utils/xAnimation'

export default function BelowNavMobile() {
  const [isToggled,setIsToggled] = useState<boolean>(false)
  return (
    <div className='md:hidden flex justify-between w-full'>
    {pages.map((item,key)=>{
        if(key<3){
            return <button key ={key}> <Link href={`/${item.toLowerCase()}`}>
            {item}</Link></button>
        }
        else if(key==3){
            return <div className='relative flex  items-center' key={key}>Show {!isToggled?"more":"less"} <span className='text-lg ml-1 cursor-pointer' onClick={()=>{setIsToggled((prev=>!prev))}}>{!isToggled?<IoIosArrowDown/>:<IoIosArrowUp/>}</span>
            {isToggled && <motion.div className='absolute bg-h1-text z-30 top-[100%] overflow-hidden -right-0 rounded-md roundShadow pl-8 pr-2' variants={DropDownMotion} initial="initial" animate="animate">
              {pages.map((item,key)=>{
                return <button key={key} className="my-2"><Link href={`/${item.toLocaleLowerCase()}`}>{item}</Link></button>
              })}
            </motion.div>}
            </div>
        }
    })}

</div>
  )
}
