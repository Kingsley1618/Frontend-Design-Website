import React ,{useState, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineFileText} from "react-icons/ai"
import {Drawer} from 'antd';
import {AiOutlineClose} from "react-icons/ai"
import {FaBars} from "react-icons/fa"
import {GrRotateLeft} from "react-icons/gr"
import {MdOutlineLaptop} from "react-icons/md"
import { usePathname } from 'next/navigation'
import {AiOutlineFolderOpen} from "react-icons/ai"

function Header() {
const pathname = usePathname()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <div className="bg-[rgb(51,51,51)] sticky top-0 w-[100%] z-1">
    <div className="flex justify-between w-[90%] h-[70px] items-center mx-auto space-x-[80px]">
        <div className="flex space-x-3 items-center"><Link href = "/" className="cursor-pointer"><img src = "/home.png" className="w-[60px] h-[60px]" /> </Link><Link href="/" className="font-bold text-[blue]">home</Link></div>



<ul className="text-white md:flex md:gap-x-6 items-center font-bold flex-wrap hidden">
<Link href = "/Activities" className={`hover:opacity-50 ${pathname === "/Activities"? "border-b-4 border-indigo-500 pb-2" : null}`}><li className="flex items items-center space-x-2"><AiOutlineFileText className="text-[28px]"/> <div className="text-[14px]">Curriculum UCV</div></li></Link>


<Link href="/Study"className={`hover:opacity-50 ${pathname === "/Study"? "border-b-4 border-indigo-500 pb-2" : null}`}><li className="flex items-center space-x-2"><GrRotateLeft className="text-[28px]"/> <div className="text-[14px]">Update us?</div></li></Link>



<Link href = "/Technologies" className={`hover:opacity-50 ${pathname === "/Technologies"? "border-b-4 border-indigo-500 pb-2" : null}`}><li className="flex items-center md:space-x-2"><MdOutlineLaptop className="text-[28px]"/> <div className="text-[14px]">New technologies</div></li></Link>

</ul>
<FaBars className="text-white md:hidden flex cursor-pointer text-[30px] font-bold" onClick = {showDrawer}/> 
    </div>
    <Drawer
        closable={false}
        onClose={onClose}
        open={open}
      
      >
        <AiOutlineClose className="block ml-auto text-[40px] cursor-pointer mb-2" onClick = {onClose}/>
        <ul className=" flex flex-col gap-y-8 items-center font-bold flex-wrap px-1">

<Link href = "/Activities" className={`w-[100%] hover:opacity-50 hover:bg-[black] py-2 px-3 rounded-3xl hover:text-white ${pathname === "/Activities"? "bg-[black] text-white": null}`}><li className="flex items items-center space-x-2"><AiOutlineFileText className="text-[28px]"/> <div className="text-[14px]">Curriculum UCV</div></li></Link>


<Link href="/Study" className={`w-[100%] hover:opacity-50 hover:bg-[black]  py-2 px-3 rounded-3xl hover:text-white ${pathname === "/Study"? "bg-[black] text-white": null}`}><li className="flex items-center space-x-2"><GrRotateLeft className="text-[28px]"/> <div className="text-[14px]">Update us?</div></li></Link>



<Link href = "/Technologies" className={`w-[100%] hover:opacity-50 hover:bg-[black] py-2 px-3 rounded-3xl hover:text-white ${pathname === "/Technologies"? "bg-[black] text-white": null}`}><li className="flex items-center md:space-x-2"><MdOutlineLaptop className="text-[28px]"/> <div className="text-[14px]">New technologies</div></li></Link>

</ul>
      </Drawer>

      
    </div>
  )
}

export default Header