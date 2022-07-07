import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logoFooterImg from '../images/logo-footer.svg';
import facebookIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import pinterestIcon from '../images/icon-pinterest.svg';
import twitterIcon from '../images/icon-twitter.svg';

function Footer() {
  return (
    <div className='bg-darkmoderateCyan bg-opacity-70 w-screen h-72 flex flex-col justify-center items-center space-y-6'>
        <Link className='-mt-12' to="/">
            <img  className='text-darkDesaturatedCyan' src={logoFooterImg} alt="" />
        </Link>
        {/* Links */}
        <ul className='space-x-1 md:flex'>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow font-medium p-3 px-8 rounded-full  hover:text-white'><Link to="/">About</Link></li>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow font-medium p-3 px-8 rounded-full  hover:text-white'><Link to="/">Services</Link></li>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow font-medium p-3 px-8 rounded-full  hover:text-white'><Link to="/">Projects</Link></li>
        </ul>
        {/* Social Media */}
        <div className='flex space-x-4 mt-10'>
            <Link to="/"><img className='hover:fill-white' src={facebookIcon} alt="" /></Link>
            <Link to="/"><img className='hover:fill-white' src={instagramIcon} alt="" /></Link>
            <Link to="/"><img className='hover:fill-white' src={twitterIcon} alt="" /></Link>
            <Link to="/"><img className='hover:fill-white' src={pinterestIcon} alt="" /></Link>
        </div>
    </div>
    
  );
}


export default Footer;