import React, { Fragment } from 'react'
import Header from '@/components/Home/Header/Header'
import TopHero from '@/components/Home/Hero/TopHero'
import BottomHero from '@/components/Home/Hero/BottomHero'
import SpecialOffer from '@/components/Home/Special/SpecialOffer'


export default function Home() {
  return (
  <Fragment>
    <div className='pb-20'>
    <Header/>
    <TopHero/>
    <BottomHero/>
    <SpecialOffer/>
    </div>
  
  </Fragment>
  )
}
