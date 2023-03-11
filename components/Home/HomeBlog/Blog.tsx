import CentalHeader from "@/components/utility/CentalHeader";
import BlogList from "./BlogList";
import Image from "next/image";
import { BlogIntro } from "@/utils/constants";

import React from 'react'


export default function Blog() {
  return (
    <section className="mt-16 cont">
        <CentalHeader title={"Blogs"} header="Be First Who Read News" paragraph={"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making."}/>
        <div className="mt-4 flex flex-wrap items-stretch">
          {BlogIntro.map((item,key)=>{
            return <div key={key} className="w-full h-full md:w-6/12">
                <BlogList {...item} />
            </div>   
          })}
        </div>
    </section> 
  )
}
