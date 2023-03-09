import React from 'react'
import { pages } from '@/utils/constants'
import Link from 'next/link'
import { navIcons } from '@/utils/constants'
import BelowNavMobile from './BelowNavMobile'


export default function BelowNavBar() {
  return (
    <div className='py-3 border-t border-b border-base-text flex removecont cont bg-trans-black'>
        <div className='justify-between hidden md:flex md:w-full lg:w-8/12'>
        {pages.map((item,key)=>{
            return<button key ={key}> <Link href={`/${item.toLowerCase()}`}>
            {item}</Link></button>
        })}
        </div>
        <div className='hidden lg:flex text-lg  justify-end lg:w-4/12'>
            {navIcons.map((item,key)=>{
                return <span key ={key} className={`${key!==3?"ml-4":"ml-4"}`}>{item}</span>
            })}
        </div>
          <BelowNavMobile/>

    </div>
  )
}
