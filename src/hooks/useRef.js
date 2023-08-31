'use client'
import React,{useRef, useEffect} from 'react'

export function useReFunc() {
    const component = useRef()
function scrollFunc() {
    component.current.scrollIntoView({behavior : "smooth"})
}

return {
    scrollFunc : scrollFunc,
    component
}
}