import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='flex justify-center mt-32 items-center w-full h-full'>
      <div className='flex flex-col bg-slate-200 p-20 px-24 rounded-xl gap-11'>
      <div className='text-4xl font-medium homeHeading text-center'>Welcome Lokesh</div>
      <div className='flex flex-col justify-evenly'>
        <Link to="/queries" className='bg-lime-300 m-6 rounded-2xl text-center font-semibold text-3xl px-6 py-4'>Post Your Queries </Link>
        <Link to="/feed" className='bg-lime-300 m-6 rounded-2xl text-center font-semibold text-3xl px-6 py-4'>Farmer's Feed </Link>
        <Link to="/news" className='bg-lime-300 m-6 rounded-2xl text-center font-semibold text-3xl px-6 py-4'>News </Link>

      </div>
      </div>
    
    </div>
  );
}

export default Home;
