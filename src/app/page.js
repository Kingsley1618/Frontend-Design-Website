'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Footer from "@/components/Footer"
import Link from 'next/link'
import Header from "@/components/Header"
import { useInView } from "framer-motion"


export default function Home() {
 
  const ref = useRef(null)
  
  const isInView = useInView(ref, { once: true });

  return (
    
    <main className="background relative">
      <img src="/background.jpg" className="absolute z-[-1] brightness-50 h-[100%] w-[100%]  overflow-x-hidden" alt="image-background"/>
<Header />
<div className="" ref={ref} 
style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>


<div className="mt-[100px] text-center text-white px-5">
<h1 className="font-bold text-[60px]">Lets learn together</h1>
<div className="max-w-[700px] text-[20px] block mx-auto text-center ">On this page you can learn about new emerging technologies, so you will not be left behind in the world of computing. We give you the opportunity to study the topics and we also offer you mini tests to make sure you have learned.
What are you waiting for?</div>
</div>

<Link href ="/Activities"><button type="button" className="text-white font-semibold max-w-[240px] w-[100%] py-4 bg-[rgb(13,103,134)] mt-8 block mx-auto rounded-3xl">Let us begin</button>
</Link>
        </div>
        <div className="bg-[rgb(46,46,46)] flex flex-col items-center  mt-[190px] py-[30px]">
        <Footer />
        </div>
    </main>
  )
}
