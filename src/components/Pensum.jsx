import React,{useRef} from 'react'
import {HiOutlineDocumentText} from "react-icons/hi"
import { useInView } from "framer-motion"
import {FaComputer} from "react-icons/fa"
function Pensum() {
    const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-[76%] mx-auto block gap-x-8 mt-[80px]"
    ref={ref} 
    style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>

        <div className="">
<h1 className="text-[50px]">Curriculum in Undergraduate</h1>
<div className="text-[20px] text-[rgb(118,118,118)]">In order to graduate as a bachelor, the student will have to take:</div>

<img src ="/instrumental.jpg" alt = "instrument" className="block max-w-[100%]"/>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-7">
            <div className="flex flex-col">
                <HiOutlineDocumentText className="text-[80px] text-[rgb(20,157,204)]"/>
                <div className="self-center">
                <h1 className="font-bold text-center">Compulsory Subjects</h1>
                    <div>Basics so that the student has a notion of the career</div>
                </div>
            </div>



            <div className="flex flex-col">

                <HiOutlineDocumentText className="text-[80px] text-[rgb(20,157,204)]"/> 

                <div className="self-center">
                <h1 className="font-bold text-center">Elective electives</h1>
                    <div>Of four that are supposed to be changed every 3 years</div>
                </div>
            </div>




            <div className="flex flex-col">
            <HiOutlineDocumentText className="text-[80px] text-[rgb(20,157,204)]"/> 

<div className="self-center">
<h1 className="font-bold text-center">Electives or Electives</h1>
    <div>Among which you can choose those necessary to get the required mention</div>
</div>
            </div>




          
            <div className="flex flex-col">
            <HiOutlineDocumentText className="text-[80px] text-[rgb(20,157,204)]"/> 

<div className="self-center">
<h1 className="font-bold text-center">Electives or Electives</h1>
    <div>Among which you can choose those necessary to get the required mention</div>
</div>
            </div>


            </div>
    

    </div>
  )
}

export default Pensum