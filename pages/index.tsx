import React, { Fragment } from 'react'
import Header from '@/components/Home/Header/Header'
import TopHero from '@/components/Home/Hero/TopHero'
import BottomHero from '@/components/Home/Hero/BottomHero'
import SpecialOffer from '@/components/Home/Special/SpecialOffer'
import Testimonies from '@/components/Home/Testimonies/Testimonies'
import SpecialAndPopular from '@/components/Home/offers/SpecialOffer'
import Services from '@/components/Services/Services'
import Blog from '@/components/Home/HomeBlog/Blog'

export default function Home() {
  return (
  <Fragment>
    <div className='pb-20'>
    <Header/>
    <TopHero/>
    <BottomHero/>
    <SpecialOffer/>
    <Testimonies/>
    <SpecialAndPopular/>
    <Services/>
    <Blog/>
    </div>
  
  </Fragment>
  )
}
