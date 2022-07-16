import React from 'react';
import {Link} from 'react-router-dom';
import logoFooterImg from '../images/logo-footer.svg';
import {ReactComponent as FacebookIcon} from '../images/icons/icon-facebook.svg';
import {ReactComponent as InstagramIcon} from '../images/icons/icon-instagram.svg';
import {ReactComponent as PinterestIcon} from '../images/icons/icon-pinterest.svg';
import {ReactComponent as TwitterIcon} from '../images/icons/icon-twitter.svg';

function Footer() {
  return (
    <div className='bg-darkmoderateCyan bg-opacity-70 w-full h-72 flex flex-col justify-center items-center space-y-6'>
        <Link className='-mt-12' to="/">
            <img  className='text-darkDesaturatedCyan' src={logoFooterImg} alt="" />
        </Link>
        {/* Links */}
        <ul className='space-x-10 md:space-x-20 flex'>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow  font-medium  hover:text-white'><Link to="/">About</Link></li>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow  font-medium  hover:text-white'><Link to="/">Services</Link></li>
            <li className='text-darkDesaturatedCyan text-opacity-70 font-barlow  font-medium  hover:text-white'><Link to="/">Projects</Link></li>
        </ul>
        {/* Social Media */}
        <div className='flex space-x-4 mt-10'>
            <Link to="/"><FacebookIcon className='hover:fill-white' /></Link>
            <Link to="/"><InstagramIcon className='hover:fill-white' /></Link>
            <Link to="/"><TwitterIcon className='hover:fill-white' /></Link>
            <Link to="/"><PinterestIcon className='hover:fill-white' /></Link>
        </div>
    </div>
    
  );
}


export default Footer;