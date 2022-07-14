import React,  {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logoImg from '../images/logo.svg';
import arrowIcon from '../images/icon-arrow-down.svg';


function Header() {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler open");
    } else setIcon("nav__toggler");
  };

  return (
    <div className='header__background w-full min-h-screen relative'>
       {/* Logo & Navigation*/}
        <nav className='flex justify-between items-center w-full p-6'>
            {/* Logo */}
            <div className='p-3 cursor-pointer'>
                <img src={logoImg} alt=""/>
            </div>
            {/* Menu */}
            <div className='flex justify-center items-center'>
                <ul className='space-x-2 hidden md:flex list-none'>
                  <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">About</Link></li>
                  <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Services</Link></li>
                  <li className='text-white font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite'><Link to="/">Projects</Link></li>
                  <li className='text-darkBlue bg-white uppercase font-barlow font-semibold p-3 px-8 rounded-full  hover:bg-transparentWhite hover:text-white'><Link to="/">Contact</Link></li>
                </ul>
              {/* Hamburger Icon  */}
              <div onClick={navToggle} className={icon}>
                <div className="block hamburger md:hidden focus:outline-none">
                  <span className="hamburger-top"></span>
                  <span className="hamburger-middle"></span>
                  <span className="hamburger-bottom"></span>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className={active}>
              <div className=" w-10/12 mt-4">
                <ul className='list-none bg-white space-y-4 absolute flex-col justify-center items-center md:hidden self-end py-8 mt-10 font-semibold sm:w-auto sm:self-center left-6 right-6'>
                  <li className='text-grayishBlue font-barlow font-semibold px-8'><Link to="/">About</Link></li>
                  <li className='text-grayishBlue font-barlow font-semibold px-8'><Link to="/">Services</Link></li>
                  <li className='text-grayishBlue font-barlow font-semibold px-8'><Link to="/">Projects</Link></li>
                  <li className='text-darkBlue bg-yellow uppercase font-barlow font-semibold py-3 px-8 rounded-full'><Link to="/">Contact</Link></li>
                </ul>
              </div>
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
  );
}

export default Header;