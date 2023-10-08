import React from 'react'
import Cards from './Cards'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import Comment from './Comment';
const Singlefeed = () => {
  return (
    <div className="bg-[#F1EEFF]  px-14 rounded-3xl py-10 mt-28 mb-28 h-full  mx-28">
    
    <div className='flex gap-x-4'>

    <div className='text-6xl feedbox text-blue-600 font-medium'> fee<span className='text-yellow-400 font-medium'>db</span>ox  </div>
    <div className='flex items-end'>
    <MdOutlineMarkEmailUnread size={48} color='rgb(250,0,0)'/>

    </div>
    </div>
    <hr className="mt-4 w-1/4 h-1 bg-red-300" />


        {/*Card Starts*/ }      
    <div className='  gap-x-44  rounded-2xl  border-2 border-gray-300 flex  flex-col    max-w-full min-w-0 h-full my-28 col-span-1  bg-zinc-50'>

<div className=' bg-slate-200 shadow-xl border-b-2 border-b-slate-300 font-medium text-2xl'>
    <div className='ml-8 mb-2 mt-2'>Lokesh</div>
</div>
<div className='grid grid-cols-2'>
{/*Left Part */}
<div className='flex flex-col border-r-2 border-r-gray-300'>

<div className="pt-6 pb-4 flex flex-col justify-center">
<img  className="border-2 hover:animate-pulse p-1 mx-auto my-1 h-72 w-[28rem] border-zinc-400 rounded-lg" alt="crop"/>
<button className='mb-4 mt-2 hover:bg-lime-400 bg-lime-300 mx-auto px-4 py-2 feedbox font-semibold  rounded-2xl'>Predict Disease</button>
</div>
<h2 className='text-center ml-2 font-medium break-words px-4 flex-wrap text-blue-500 text-2xl'>sandkljansldnaslkndlasdknsDDCSDFSFSDFSsdfasdabsjkdbaskjbdkjasbdkjablsadaasdasdass/day</h2>
<h2 className=' ml-8 mr-8 break-words my-4 text-xl'> <span className='font-normal text-black'>sdlndaskldnasndlkasndklasndfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsddklsnkd </span> 
</h2>

<div className="flex items-center justify-center my-6">
  <div className=" shadow-md rounded-lg flex">
    <input
      type="text"
      placeholder="Add your comments..."
      className="border w-[30rem] rounded-l-lg p-2 flex-grow outline-none"
    />
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded-r-lg">
      Post
    </button>
  </div>
</div>

<div className="flex space-x-4 pb-6 justify-evenly mb-6 mt-4">
    <button className="hover:bg-slate-200 flex space-x-1 text-blue-600 bg-blue-100 font-bold py-2 px-2 rounded">
    <div className='text-xl'>Upvote </div>
    <AiOutlineLike size={25} color='blue'/>
    </button>
    
    <button className=" hover:bg-slate-200 flex items-center space-x-1 text-red-600 bg-red-100 font-bold py-2 px-2 rounded">
    <div className='text-xl'>Downvote</div>
    <AiOutlineDislike size={25} color='red'/>
    </button>

</div>
</div>
{/**Right Part */}
<div className='bg-[rgb(219,234,245)] flex flex-col'>
    <div className='mt-4 flex justify-center text-2xl feedbox font-semibold'>
          Comments
    </div>
    <div className='mt-10 flex flex-col max-h-[40rem] overflow-auto gap-y-10 ml-16'>
    <Comment/>
    <Comment/>
    <Comment/>
    <Comment/>
    
    <Comment/>
    <Comment/>
    <Comment/>
    
    </div>
</div>

</div>

</div> 

      {/*Card End*/ } 


        </div>
  )
}

export default Singlefeed