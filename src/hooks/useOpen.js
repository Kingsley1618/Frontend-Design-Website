'use client'
import {useState} from "react"
export function useOpen() {
const [open, setOpen] = useState(false)
const [openTwo, setOpenTwo] = useState(false)
const [openThree, setOpenThree] = useState(false)
function openDropdown() {
    setOpen(open=> !open)
    if(openTwo || openThree === true) {
        setOpenTwo(false)
        setOpenThree(false)
    }
   
}

function openDropdownTwo() {
    setOpenTwo(open=> !open)
    if(open || openThree === true) {
        setOpen(false)
        setOpenThree(false)
    }
}

function openDropdownThree() {
    setOpenThree(open=> !open)
    if(openTwo || open === true) {
        setOpenTwo(false)
        setOpen(false)
    }
}

return {
    open,
    onOpenTwo: openDropdownTwo,
    onOpenThree: openDropdownThree,
    openTwo,
    openThree,
    onOpen : openDropdown
}
}