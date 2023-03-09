import React,{useContext,useEffect,useState} from 'react'
import { toggleCenter,toggleAnimation } from '@/utils/xAnimation'
import { motion,useAnimation } from 'framer-motion'

interface NavbarButtonProps{
    overlay:boolean,
    setOnOverlay:React.Dispatch<React.SetStateAction<boolean>>,
    isnavActive:boolean,
    setisNavActive:React.Dispatch<React.SetStateAction<boolean>>
}
export default function NavbarButton({setOnOverlay,setisNavActive,isnavActive,overlay}:NavbarButtonProps) {
    const [mounted,setMounted] = useState(false)
    const control = useAnimation()
    
    const handleChange = ()=>{
      setOnOverlay((prev=>!prev))
      setisNavActive((prev=>!prev))
    }

    useEffect(()=>{
      console.log(window.innerWidth)
      if (!mounted){
        setMounted(true)
        return}
        if(isnavActive){control.start("animate")}
        else{
          control.start("animateback")}
        
    },[isnavActive])
  return (
        <button className='flex flex-col justify-between h-[24px]  w-[30px] cursor-pointer' onClick={handleChange}>
            <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
        </button>
  )
}
