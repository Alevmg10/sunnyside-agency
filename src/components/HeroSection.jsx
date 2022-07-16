import React from 'react';
import { Link } from 'react-router-dom';
import eggImg from '../images/desktop/image-transform.jpg';
import eggImgM from '../images/mobile/image-transform.jpg';
import standImg from '../images/desktop/image-stand-out.jpg';
import standImgM from '../images/mobile/image-stand-out.jpg';
import graphicImg from '../images/desktop/image-graphic-design.jpg';
import graphicImgM from '../images/mobile/image-graphic-design.jpg';
import photographyImg from '../images/desktop/image-photography.jpg';
import photographyImgM from '../images/mobile/image-photography.jpg';

function HeroSection() {
  return (
    <>
        {/* Egg */}
        <div className='w-full flex flex-col-reverse md:flex-row'>
            {/* Text, Buttom */}
            <div className=' md:w-1/2 flex flex-col justify-center space-y-10 px-10 md:py-0 py-10 text-center md:text-left items-center md:items-start'>
                <div className=''>
                    <h1 className='text-veryDarkDesaturatedBlue font-extrabold font-fraunces text-4xl'>Transform your brand</h1>
                </div>
                <p className='text-center md:text-start text-sm font-barlow text-darkGrayishBlue'> 
                    We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.
                </p>
                <Link to="/" className=' text-veryDarkDesaturatedBlue uppercase font-fraunces font-bold'>Learn more</Link>
            </div>
            {/* Image */}
            <div className='hidden md:block md:w-1/2'>
                <img src={eggImg} alt="" />
            </div>
            <div className='block md:hidden w-full'>
                <img src={eggImgM} alt="" />
            </div>
        </div>

        {/*Stand Out */}
        <div className='w-full flex flex-col-reverse md:flex-row-reverse'>
            {/* Text, Buttom */}
            <div className=' md:w-1/2 flex flex-col justify-center space-y-10 px-10 md:py-0 py-10 text-center md:text-left items-center md:items-start'>
                <div className=''>
                    <h1 className='text-veryDarkDesaturatedBlue font-extrabold font-fraunces text-4xl'>Stand out to the right audience</h1>
                </div>
                <p className='text-center md:text-start text-sm font-barlow text-darkGrayishBlue'> 
                        Using a collaborative formula of designers, researchers
                        photographers, videographers, and copywriters, we'll
                        build and extend your brand in digital places. 
                </p>
                <Link to="/" className=' text-veryDarkDesaturatedBlue uppercase font-fraunces font-bold'>Learn more</Link>
            </div>
            {/* Image */}
            <div className='hidden md:block md:w-1/2'>
                <img src={standImg} alt="" />
            </div>
            <div className='block md:hidden sm:w-full'>
                <img src={standImgM} alt="" />
            </div>
        </div>

        {/* Fruits */}
        <div className='flex flex-col md:flex-row w-full'>
            {/* Cherry */}
            <div className='flex flex-col justify-end items-center  relative'>
                {/* Background image */}
                <img className='-z-10 hidden md:block w-full' src={graphicImg} alt="" />
                <img className='-z-10 block md:hidden' src={graphicImgM} alt="" />
                {/* Text */}
                <div className='absolute md:w-9/12 flex flex-col justify-center space-y-6 px-10 mt-6 mb-32 md:mb-8 text-center items-center'>
                    <div className=''>
                        <h1 className='text-veryDarkDesaturatedBlue font-extrabold font-fraunces text-xl md:text-2xl'>Graphic Design</h1>
                    </div>
                    <p className='text-center font-semibold text-xs md:text-sm font-barlow text-darkDesaturatedCyan'> 
                        Great designs make you memorable. We deliver
                        artwork taht underscores your bran message
                        and captures potential clients' attention.
                    </p>
                </div>
            </div>

            {/* Orange */}
            <div className='flex flex-col justify-end items-center  relative'>
                {/* Background image */}
                    <img className='-z-10 hidden md:block w-full' src={photographyImg} alt="" />
                    <img className='-z-10 block md:hidden' src={photographyImgM} alt="" />

                {/* Text */}
                <div className='absolute md:w-9/12 flex flex-col justify-center space-y-6 px-10 mt-6 mb-32 md:mb-8 text-center items-center'>
                    <div className=''>
                        <h1 className='text-darkBlue font-extrabold font-fraunces text-xl md:text-2xl'>Photography</h1>
                    </div>
                    <p className='text-center font-semibold text-xs md:text-sm font-barlow text-veryDarkGrayishBlue'> 
                        Increase your credibility by getting the most
                        stunning, high-quality photos that improve your
                        business image.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default HeroSection;