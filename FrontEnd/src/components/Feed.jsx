import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Cards from './Cards';

const Feed = () => {
  return (
    <div className="bg-[#F1EEFF]  px-14 rounded-3xl mb-24 py-10 mt-28  h-full  mx-28">
    
    <div className='flex gap-x-4'>

    <div className='text-6xl feedbox text-blue-600 font-medium'> fee<span className='text-yellow-400 font-medium'>db</span>ox  </div>
    <div className='flex items-end'>
    <MdOutlineMarkEmailUnread size={48} color='rgb(250,0,0)'/>
    </div>
    </div>
    <hr className="mt-4 w-1/4 h-1 bg-red-300" />

    <div className= {"grid-cols-1 gap-y-14 gap-7 grid mt-8 sm:grid-cols-2 py-12  md:grid-cols-3"}>

            
            <Cards/>
            <Cards/>
            
            <Cards/>
          <Cards/>

    </div>
    
    </div>
  )
}

export default Feed