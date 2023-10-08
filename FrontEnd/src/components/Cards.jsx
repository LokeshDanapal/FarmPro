import React from 'react'
import {Link} from 'react-router-dom';
// import Axios from "axios";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { useEffect } from 'react';


const Cards = (props) => {
    return (
    
        //Use useNavigate instead of link so that the component can be called along with its property
        <Link className='border-none shadow-2xl rounded-none '   to={"/singlefeed"}>
        
        <div className='  gap-x-44  rounded-2xl hover:scale-y-105 hover:scale-x-105 ease-in-out border-2 border-gray-300 flex  flex-col my-3   max-w-full min-w-0 h-full mt-3 col-span-1 pb-3 bg-zinc-50'>

        <div className=' bg-slate-200 shadow-xl font-medium text-2xl'>
            <div className='ml-8 mb-2 mt-2'>Lokesh</div>
        </div>

        <div className="pt-6 pb-4 ">
        <img  className="border-2 hover:animate-pulse p-1 mx-auto my-1 h-56 w-72 border-zinc-400 rounded-lg" alt="crop"/>
        </div>
        <h2 className='text-center ml-2 font-medium break-words px-4 flex-wrap text-blue-500 text-2xl'>₹sandkljansldnaslkndlasdknsDDCSDFSFSDFSsdfsdfsdfsdfakldnlkasndklsadaasdasdass/day</h2>
        <h2 className=' ml-8 mr-8 break-words my-4 text-xl'> <span className='font-normal text-black'>sdlndaskldnasndlkasndklasndfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsddklsnkd </span> 
        </h2>
        <div className="flex space-x-4 justify-evenly mt-6">
            <button className=" flex space-x-1 text-blue-600 bg-blue-100 font-bold py-2 px-2 rounded">
            <div className='text-xl'>Upvote </div>
            <AiOutlineLike size={25} color='blue'/>
            </button>
            
            <button className=" flex items-center space-x-1 text-red-600 bg-red-100 font-bold py-2 px-2 rounded">
            <div className='text-xl '>Downvote </div>
            <AiOutlineDislike size={25} color='red'/>
            </button>

        </div>


        </div>
        </Link>    
        
      )
}

export default Cards