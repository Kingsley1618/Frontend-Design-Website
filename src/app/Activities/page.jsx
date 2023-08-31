'use client'
import React,{useRef} from 'react'
import Header from "@/components/Header"
import {SlArrowDown} from "react-icons/sl"
import {SlArrowUp} from "react-icons/sl"
import {useOpen} from "@/hooks/useOpen"
import Footer from '@/components/Footer'
import Pensum from "@/components/Pensum"
import { useInView } from "framer-motion"

export default function Activities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const dropdown = useOpen()
  return (
    <div className="relative">
      
        <div className="wall w-full">
        <Header />

        <div className="max-w-[900px] px-7 block mx-auto z-[-1] text-white" ref={ref} 
style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          zIndex:-2,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>

<h1 className="font-bold text-[50px] sm:text-left text-center mt-6">Curriculum at UCV</h1>
<div>Currently the Central University of Venezuela is one of 
  the most prestigious universities in all of Venezuela.</div>

 <div className="text-[18px] mt-6">And it has been like that because of their teaching quality, that's right, they are very
   good at what they do. Here we leave you a brief summary as far as computing is concerned.</div>
        </div>

</div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-[85%] z-[-1] mx-auto gap-x-8 mt-[80px]"  ref={ref} 
style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
<div className="">
<h1 className="text-[30px] text-center">UCV computing</h1>

<div className="mt-8">
<div>
  <div onClick = {()=>dropdown.onOpen()} className="font-bold cursor-pointer flex bg-[rgb(247,247,247)] space-x-2 items-center px-6 text-[23px] border border-[rgb(223,223,223)] py-4">{dropdown.open ? <SlArrowDown /> : <SlArrowUp />} <div>Mission</div></div>
  {dropdown.open?<div className=""> <div className="my-5 text-[rgb(142,142,142)]">The formation of the Graduate of Computing continues
     to require a strong theoretical base that allows them
     to continue their further development, together with a strong 
     methodological knowledge and technological domain.</div>

<div className="text-[rgb(142,142,142)]">Computer science itself will be present as the fundamental tool in their training to achieve:</div>

<ul className="my-5 text-[rgb(118,118,118)]">
  <li className="font-bold">Skills</li>
  <li className="font-bold">Knowledge</li>
  <li className="font-bold">Attitudes</li>
  <li className="font-bold">Work values</li>
</ul>

<div className="text-[rgb(142,142,142)]">For professionals in the Computer area, knowing how to learn, knowing how to undertake and knowing how to be, is considered a new paradigm of higher education .</div></div>:null}
</div>



<div>
  <div onClick = {()=>dropdown.onOpenTwo()} className="font-bold cursor-pointer flex bg-[rgb(247,247,247)] space-x-2 items-center px-6 text-[23px] border border-[rgb(223,223,223)] py-4">{dropdown.openTwo ?<SlArrowDown /> :<SlArrowUp />}<div>Vision</div></div>
  {dropdown.openTwo?<div className=""> <div className="my-5 text-[rgb(142,142,142)]">To be an efficient and effective entity in the training of highly qualified professionals and integrated into the process of development and innovation in Computer Science and related applications, training
   that is developed through teaching, research and university extension.</div>
</div>:null}
</div>


<div>
  <div onClick = {()=>dropdown.onOpenThree()} className="font-bold cursor-pointer flex bg-[rgb(247,247,247)] space-x-2 items-center px-6 text-[23px] border border-[rgb(223,223,223)] py-4">{dropdown.openThree? <SlArrowDown /> :<SlArrowUp /> }<div>Mission</div></div>
  {dropdown.openThree?<div className=""> 

<ul className="my-5 text-[rgb(118,118,118)]">
  <li className="font-bold my-4">- Train professionals with a solid academic level in the different branches of Computing.
</li>
  <li className="font-bold my-4">- Train professionals, teachers and researchers of high quality and solid values.</li>
  <li className="font-bold my-4">- Maintain scientific exchanges with other national and international educational centers.</li>
  <li className="font-bold my-4">- Obtain financing for their research through the promotion of their projects.</li>
<li className="font-bold my-4">- Provide service to public institutions and private companies nationwide.</li>
<li className="font-bold my-4">- Provide advice and consultancy.</li>
<li className="font-bold my-4">- Develop projects in the different areas of competence of Computing.</li>
</ul>
</div>:null}
</div>






</div>
</div>



<div className="md:mt-0 mt-8">
  <img src = "/circus.jpg" alt = "circus" className="max-w-[100%]" />
</div>
        </div>


        
        <Pensum />


        <div className="bg-[rgb(46,46,46)] flex flex-col items-center  mt-[190px] py-[30px]">
        <Footer />
        </div>
    </div>
  )
}
