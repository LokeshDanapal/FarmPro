import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillPersonFill} from "react-icons/bs"


function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex gap-x-[31rem] items-center">
        <div>
          <Link to="/" className="text-white text-4xl font-bold">Farm<span className='text-yellow-300'>Ex</span></Link>
        </div>

        
      <div className="flex space-x-80">

        <ul className="flex space-x-10">

        

          <li className='flex items-center'>
            <Link to="/" className="text-2xl text-yellow-300 font-extrabold underline underline-offset-4">HOME</Link>
          </li>
          <li className='flex items-center'>
            <Link to="/feed" className="text-2xl text-white font-bold" >FEEDS</Link>
          </li>
          <li className='flex items-center'>
            <Link to="/news" className="text-2xl text-white font-bold">NEWS</Link>
          </li>


        </ul>
        
          <div className="bg-yellow-200 flex sm:col-start-4 col-start-3 sm:text-base xs:w-auto xs:text-base text-sm  justify-start space-x-2 items-center rounded-xl mx-auto sm:px-5 px-2 py-1 text-stone-900">
        <div>{<BsFillPersonFill size={35} className="xs:w-auto w-4"/>}</div>
        <div className='text-lg font-medium text-black'>{localStorage.getItem("user").substring(0,1).toUpperCase() + localStorage.getItem("user").substring(1)}</div>

        </div>
      </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
