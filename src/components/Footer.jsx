'use client'
import React,{useRef} from 'react'
import {AiOutlineGithub} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {ImLinkedin2} from "react-icons/im"
import { useInView } from "framer-motion"
import Link from 'next/link'
export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col items-center" 
    style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>

<h1>about me</h1>

<div className="flex justify-center space-x-5 my-7">
<AiOutlineGithub className="text-[30px] text-[rgb(151,151,151)]"/>

<ImLinkedin2 className="text-[30px] text-[rgb(151,151,151)]"/>

<BsInstagram className="text-[30px] text-[rgb(151,151,151)]"/>


</div>

<div className="text-white">© Copyright 2018 <Link href = "https://github.com/Kingsley1618" className="text-[blue]">Okeze Kingsley Nonso</Link>- All Rights Reserved</div>
    </div>

  )
}
