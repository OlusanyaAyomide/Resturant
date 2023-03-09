import React from 'react'
interface ButtonProp{
    bg?:String,
    text:String,
    color?:String,
    border?:String
}

export default function Button({bg,text,color,border}:ButtonProp) {
  return (
    <button className={`rounded-sm py-1 px-4 ${bg?bg:""} ${color?color:""} ${border?border:""}`}>{text}</button>
  )
}
