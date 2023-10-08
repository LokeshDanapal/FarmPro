import React from 'react';
import { useState } from 'react';
import FileBase64 from 'react-file-base64';

function Queries() {
  const [isChecked, setIsChecked] = useState(false);
  const [item,setItem]=useState({qns:"",sol:"",image:""})

  const handleLabelClick = () => {
    setIsChecked(!isChecked);
  };

  async function handleClick(e){
    e.preventDefault();
  const value=window.confirm("Are You Sure to Submit You Query ?"); 
 if(value===1){
  console.log(item)
 }
  }

  return (
    <div className='flex justify-center'>
      <div className='bg-slate-200 rounded-xl p-5 my-14 w-[40%] '>
          <div className='text-center text-4xl homeHeading'>
            Post Your Queries 
          </div>
    <div className="w-[90%] mx-auto  p-4">
    <label htmlFor="message" className="block mt-6 text-gray-700 text-lg font-bold mb-2">
       Your Message:
    </label>
    <textarea
    value={item.qns}
    onChange={
        (e)=>
        {setItem(
        {...item,qns:e.target.value});
        }}
    id="message"
    name="message"
    className="shadow appearance-none border rounded mt-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    rows="7"
    cols="10"
    placeholder="Post Problems You have Experienced !">

    </textarea>
    </div>
  <div className="w-[90%] mt-6 mx-auto px-4">
  
  <textarea
  value={item.sol}
    onChange={
        (e)=>
        {setItem(
        {...item,sol:e.target.value});
        }}
    id="message"
    name="message"
    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    rows="7"
    placeholder="Leave Some Probable Solutions !">
  </textarea>
  </div>

  <div className="flex items-center justify-center mt-6 gap-x-5">
  <label
        htmlFor="allowView"
        className="flex gap-x-4 items-center cursor-pointer"
        onClick={handleLabelClick}
      >
        <div className="w-8 h-8 border rounded border-gray-400 flex items-center justify-center">
          {isChecked ? (
            <svg
              className="w-6 h-6 text-green-500 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 12l2 2 4-4M16 5l-7 7 3 3 7-7"
              />
            </svg>
          )}
          {/* The rest of your code */}
        </div>
        <span className="text-gray-700 text-lg">Allow Others to View this File</span>
      </label>
</div>

<div className="bg-blue-200 p-4 mt-6 rounded-lg pl-9">
  <p className="text-black font-bold">
    Note Info :
  </p>
  <p className="text-blue-700 ">
    You can also upload pictures of your crops, plant diseases, pests, weeds, and more below.
  </p>
  <div className='flex justify-center mt-5'>
    <FileBase64  type="file"  name="image" className="sm:ml-4 w-96 " multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })} /> 
  </div>
</div>

<div className='flex justify-center mt-10 pb-4'> 
<button onClick={handleClick} className="bg-blue-500 text-xl  hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
  POST
</button>
</div>




  </div>

  </div>
  );
}

export default Queries;
