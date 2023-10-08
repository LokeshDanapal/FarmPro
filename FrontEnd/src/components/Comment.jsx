import React from 'react'
import { profile } from '../assets'
const Comment = () => {
  return (
    <div className='flex flex-col'>
    {/**Top Flex Box */}
    <div className='flex gap-x-4'>
    {/**Left image */}
    <div><img src={profile} width={70}/></div>
    {/**Right name and date */}
    <div className='flex flex-col justify-center '>
    <div className='font-semibold feedbox'>Kasfaasdbjasdbsdas</div>
    <div>2324234</div>
    </div>

    </div>
    {/**Bottom Flex Box */}
    <div className='ml-3 break-words'>KJNJNasdabsdkbajbsdkhabsdkjabskjdbaskjdbaskjdbkjasbdkjasbdkjbaskdjbasdhkvbkjhvasbdhbvasdjbjasdbasjdbsdbjbKJNJNasdabsdkbajbsdkhabsdkjabskjdbaskjdbaskjdbkjasbdkjas</div>
    
    <hr className="mt-4 w-full h-[0.19rem] bg-slate-300" />


    </div>
  )
}

export default Comment