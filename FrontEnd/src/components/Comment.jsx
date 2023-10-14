
import React from 'react'
import { profile } from '../assets'
const Comment = (props) => {
  return (
    <div className='flex flex-col'>
    {/**Top Flex Box */}
    <div className='flex gap-x-4'>
    {/**Left image */}
    <div><img src={profile} width={70} alt="Profile"/></div>
    {/**Right name and date */}
    <div className='flex flex-col justify-center '>
    <div className='font-semibold feedbox'>{props.data?.user || "Lokesh"}</div>
    <div>{props.data?.date}</div>
    </div>

    </div>
    {/**Bottom Flex Box */}
    <div className='ml-3 break-words'>{props.data.answer}</div>
    
    <hr className="mt-4 w-full h-[0.19rem] bg-slate-300" />


    </div>
  )
}

export default Comment