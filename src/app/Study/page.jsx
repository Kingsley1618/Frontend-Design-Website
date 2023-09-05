'use client'
import React,{useRef}  from 'react'
import Header from "@/components/Header"
import { Carousel } from 'antd';
import {PiStudent} from "react-icons/pi"
import {AiOutlineStar} from "react-icons/ai"
import Footer from '@/components/Footer'
import { useInView } from "framer-motion"
import Image from "next/image"

export default function Study() {
    const scroll = useRef(null)
    const View = useInView(scroll, { once: true });

  return (
    <div>
<div className="study-back pb-[30px]">
    <Header />
    <div className="lg:max-w-[970px] max-w-[600px] w-[100%] z-[-1] text-white mx-auto block px-5">
<h1 className="text-[45px] font-bold lg:text-right text-center text-white">Should we upgrade?</h1>
<div className="lg:text-[26px] text-[19px] font-normal lg:text-right text-center my-6">One of the great weaknesses of the UCV is that it has lagged behind with
     respect to the new emerging technologies.</div>
<div className="text-[15px] lg:text-right text-center">
As we well know, technology has evolved exponentially over the years, 
leaving computer scientists constantly learning, with new tools and concepts 
that sounded crazy yesterday and not so much today. Below we show a brief 
reasoning of why the computing curriculum should be updated at the UCV
</div>
</div>
</div>


<div className="px-2">
<h1 className="text-[30px] text-center mt-[30px]">Some reasons to update the Pensum</h1>
<div className="text-[17px] my-5 text-center">Before knowing the benefits of an update in computer training at UCV, it is first necessary
     to know some reasons why to do it</div>

</div>

 <Carousel autoplay
style={{maxWidth:"600px",
width:"90%",
margin:"auto",
display:"block"
        }}>
    <div className="bg-[rgb(231,231,231)] max-w-[600px] w-[100%] text-center py-8 px-2 h-[200px]">
 <h1 className="font-bold text-[24px] block mx-auto my-auto">The curriculum has not been updated for 18 years</h1>
    <div>It is unjustifiable that a change of curriculum has not already been made knowing that it has varied in the years 1968, 1974, 1985 and the current one is from the year 2000,
         knowing already the varied changes that computing has had.</div>
         
    </div>
    <div className="bg-[rgb(231,231,231)] max-w-[600px] w-[100%] text-center py-8 px-2 h-[200px]">
 <h1 className="font-bold text-[24px] block mx-auto">New Tools</h1>
    <div>As technology advances, we realize that every time we can use many more comfortable, agile and simple work tools; In most of the subjects of the basic cycle, old techniques are used, with very old systems 
        and with great need for resources that in Venezuela we know are not easy to obtain.</div>
         
    </div>
    <div className="bg-[rgb(231,231,231)] max-w-[600px] w-[100%] text-center py-8 px-2 h-[200px]">
 <h1 className="font-bold text-[24px] block mx-auto ">Exponential Growth in Technologies</h1>
    
    <div>Another very important aspect is that computing is a career where you always have to study or you end up 
 in obsolescence. Every day new terms, tools, programming languages ​​come out that bring us ergonomics and ease when programming.</div>
         
    </div>

         
  
  </Carousel>

  <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 mt-[100px] w-[80%] block mx-auto">
<Image src = "/graduate.jpg" className="w-[100%] block mx-auto" alt="graduate"/>

<div>
<h1 className="text-[35px] lg:mt-0 mt-8">Benefits of an Upgrade</h1>

<div className="flex flex-col items-center">

<div>

    <div className="flex space-x-8 items-center"><PiStudent className="text-[rgb(20,157,204)] text-[90px]"/> <h1 className="text-[rgb(91,104,107)] font-bold">
All students would be influenced</h1></div>

    <div className="text-[rgb(144,144,144)] text-[16px] mt-5">What better way to gain prestige in the educational world than to offer a teaching of the latest technologies. A university that is at the forefront will always attract more people; both national and international companies, as well as young people who want to be part of the study house.</div>
</div>


<div>

    <div className="flex space-x-8 mt-4 items-center"><AiOutlineStar className="text-[rgb(20,157,204)] text-[90px]"/> <h1 className="text-[rgb(91,104,107)] font-bold">
    Gain popularity and prestige</h1></div>

    <div className="text-[rgb(144,144,144)] text-[16px] mt-5">When looking for a job, companies are moving to easy and agile tools for software development. As time goes by new tools are used. This brings students better preparation than teaching them an old programming language that very few companies are looking for.</div>
</div>


</div>
</div>
  </div>
  <div className="bg-[rgb(46,46,46)] flex flex-col items-center  mt-[190px] py-[30px]">
<Footer />
</div>
    </div>
  )
}

