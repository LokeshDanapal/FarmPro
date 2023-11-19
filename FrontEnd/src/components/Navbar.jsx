import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

function NavBar() {
  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Translate Element
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' }, // Adjust the page language as needed
        'google_translate_element'
      );
    };

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []); // Run only once on component mount

  return (
    <nav className='bg-blue-600 p-4'>
      <div className='container mx-auto flex items-center justify-between'>
        <div>
          <Link to='/' className='text-white text-4xl font-bold'>
            Farm<span className='text-yellow-300'>Ex</span>
          </Link>
        </div>

        <div className='flex space-x-80'>
          <ul className='flex space-x-10'>
            <li className='flex items-center'>
              <Link
                to='/'
                className='text-2xl text-yellow-300 font-extrabold underline underline-offset-4'
              >
                HOME
              </Link>
            </li>
            <li className='flex items-center'>
              <Link to='/ai' className='text-2xl text-white font-bold'>
                MY-AI
              </Link>
            </li>
            <li className='flex items-center'>
              <Link to='/news' className='text-2xl text-white font-bold'>
                NEWS
              </Link>
            </li>
          </ul>

          <div className='flex items-center space-x-2'>
            <div className='bg-yellow-200 flex text-base xs:w-auto xs:text-base text-sm justify-start space-x-2 items-center rounded-xl px-2 py-1 text-stone-900'>
              <div>{<BsFillPersonFill size={35} className='xs:w-auto w-4' />}</div>
              <div className='text-lg font-medium text-black'>
                {localStorage.getItem('user').substring(0, 1).toUpperCase() +
                  localStorage.getItem('user').substring(1,)}
              </div>
            </div>

            <div id='google_translate_element' className='ml-2'></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
