'use client'
import React from 'react'
import Header from "@/components/Header"
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsEmojiSmile} from "react-icons/bs"
import {useReFunc} from "@/hooks/useRef"
import Footer from '@/components/Footer'
import {TiDocumentText} from "react-icons/ti"
import {AiOutlineEye} from "react-icons/ai"
export const metadata = {
  title : "Technologies"
}
export default function Technology() {
const scrollView = useReFunc()
  return (
    <>
    <div className="cyber">
<Header />

<div className="max-w-[900px] text-center block md:ml-auto px-5 text-white mt-3">
<h1 className="text-[40px] font-bold">New technologies</h1>

<div className="lg:text-[25px] text-[15px]">In this section you will find the most up-to-date information on the world of computing, so that you are not left behind in your training as a Computer Science Graduate.
Scroll down to learn about teaching topics that may interest you</div>

</div>
<AiOutlineArrowDown onClick = {scrollView.scrollFunc} className="z-0 animate-bounce  hidden cursor-pointer bg-[rgb(125,122,124)] rounded-full p-4 text-white text-[70px] md:block mx-auto mt-[90px]"/>

</div>


<div>
<h1 className="text-[35px] mb-[60px] text-center">Things you need to know:</h1>

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[80%] mx-auto block gap-x-5" ref = {scrollView.component}>

<div>
<AiOutlineEye className="text-[60px] text-[rgb(112,112,112)]"/>

<h1 className="font-bold text-[14px] mt-6">Reading</h1>

<div className="mt-6 text-[14px]">You will be provided with a medium-sized reading, important points will be highlighted in bold. In less than 10 minutes you will have a basic notion of the terms.</div>

</div>



<div className="sm:mt-0 mt-6">
<BsEmojiSmile className="text-[60px] text-[rgb(112,112,112)]"/>

<h1 className="font-bold text-[14px] mt-6">Happy</h1>

<div className="mt-6 text-[14px]">ELI5 significa "Explícame como si tuviera cinco", es la manera en como te daremos a entender los términos si no los entendiste. Cuando lo veas ya sabrás que significa.</div>

</div>





<div className="sm:mt-0 mt-6 lg:mr-auto md:mx-auto block ">
<TiDocumentText className="text-[60px] text-[rgb(112,112,112)]"/>

<h1 className="font-bold text-[14px] mt-6">Document</h1>

<div className="mt-8 text-[14px]">Al finalizar la lectura, se te realizará un pequeño test, corto, con preguntas simples. Con la finalidad de saber si tienes una idea general de lo acabas de estudiar. Así sabrás si de verdad aprendiste</div>

</div>


</div>


</div>


<div>
<h1 className="text-[35px] mb-[60px] text-center">Select any of our latest topics</h1>


<div className='grid md:grid-cols-3 grid-cols-1 lg:w-[85%] md:w-[97%] w-[80%] mx-auto gap-x-8 gap-y-8'>

<div className="relative pt-8 px-1 md:pb-[70px] pb-8 w-[100%]" >
<img src="/blockchain.png" alt="blockchain" className="z-[-1] absolute object-cover top-0 w-[100%] h-[100%]"/>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>


<div className="relative pt-8 px-1 md:pb-[70px] pb-8 w-[100%]">
<img src="/learning.png" alt="blockchain" className="z-[-1] absolute object-cover top-0 w-[100%] h-[100%]"/>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>



<div className="relative pt-8 px-1 md:pb-[70px] pb-8 w-[100%]" >
<img src="/data.png" alt="blockchain" className="z-[-1] object-cover absolute top-0 w-[100%] h-[100%]"/>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>


<div className="relative pt-8 px-1 md:pb-[70px] pb-8 w-[100%]" >
    <div className="z-[-1] absolute top-0 w-[100%] overflow-x-hidden overflow-y-hidden h-[100%]">
<img src="/reality.png" alt="blockchain" className="object-cover max-w-[700px]"/>
</div>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>


<div className="relative pt-8 px-1 md:pb-[70px] pb-8 w-[100%]">
<img src="/internet.png" alt="blockchain" className="z-[-1] object-cover absolute top-0 w-[100%] h-[100%]"/>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>



<div className="relative pt-8 px-1 md:pb-[70px] pb-8">
<img src="/securitycyber.png" alt="blockchain" className="z-[-1] absolute top-0 w-[100%] h-[100%]"/>
<div className="z-10 text-white">
    <h1 className="font-bold text-[25px] text-center">Blockchain</h1>
    <div className="mt-8 text-center max-w-[200px] block mx-auto">A blockchain is a digital, decentralized and public ledger of all cryptocurrency transactions</div>
</div>
</div>

</div>

</div>


<div className="bg-[rgb(46,46,46)] flex flex-col items-center  mt-[190px] py-[30px]">
<Footer />
</div>
    </>
  )
}
