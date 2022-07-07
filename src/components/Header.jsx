import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logoImg from '../images/logo.svg';
import arrowIcon from '../images/icon-arrow-down.svg';


function Header() {

//   const btn = document.getElementById('menu-btn');
//   const nav = document.getElementById('menu');

//   btn.addEventListener('click', () => {
//   btn.classList.toggle('open')
//   nav.classList.toggle('flex')
//   nav.classList.toggle('hidden')
// })

  return (
    <div className='header__background w-full min-h-screen relative'>
       {/* Logo & Navigation*/}
        <nav className='flex justify-between items-center w-full p-6'>
            {/* Logo */}
            <div className='p-3 cursor-pointer'>
                <img src={logoImg} alt=""/>
            </div>
            {/* Menu */}
            <div className='hidden md:flex'>
              <ul className='space-x-2 md:flex'>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">About</Link></li>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Services</Link></li>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Projects</Link></li>
                <li className='text-darkBlue bg-white uppercase font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite hover:text-white'><Link to="/">Contact</Link></li>
              </ul>

              {/* Hamburger Icon  */}
              <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
              </button>
            </div>
  
            {/* Mobile Menu */}
            <div class="md:hidden">
              <ul id='menu' className='space-y-1 flex-col items-center hidden self-end py-8 mt-10 font-semibold sm:w-auto sm:self-center left-6 right-6 absolute'>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">About</Link></li>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Services</Link></li>
                <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Projects</Link></li>
                <li className='text-darkBlue bg-white uppercase font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite hover:text-white'><Link to="/">Contact</Link></li>
              </ul>
            </div>
        </nav>

        {/* Header text */}
        <div className='w-full md:mt-16 flex flex-col justify-around items-center space-y-12'>
          <h1 className='text-center min-w-fit uppercase text-5xl md:text-6xl text-white font-fraunces font-bold'>
            We are creatives
          </h1>
          {/* Arrow down */}
          <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default Header;