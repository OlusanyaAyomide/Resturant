import React, { useContext } from 'react'


interface OverLayProps{
    setOnOverlay:React.Dispatch<React.SetStateAction<boolean>>,
    setisNavActive:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Overlay({setOnOverlay,setisNavActive}:OverLayProps) {
  return (
    <div onClick={()=>{
      setOnOverlay(false)
      setisNavActive(false)
    }} className='fixed z-30 inset-0 bg-black/50 backdrop-blur-sm'></div>
  )
}
