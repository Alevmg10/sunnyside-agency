import React from 'react';
import emilyImg from '../images/image-emily.jpg';
import thomasImg from '../images/image-thomas.jpg';
import jennieImg from '../images/image-jennie.jpg';

function Testimonials() {
  return (
    <section className='py-8 mt-16'>
         <h2 className='font-barlow text-center font-bold text-2xl uppercase text-veryDarkGrayishBlue'>
                Client Testimonials
        </h2>
        <div className='w-screen flex flex-col justify-center items-center md:flex-row'>
           {/* Testimonials container */}
            <div className='max-w-fit flex flex-col mt-16 md:space-x-8 md:flex-row md:w-screen'>
                {/* Testimonial one (1) */}
                <div className='flex flex-col justify-between items-center space-y-6 '>
                    <img className='rounded-full w-16' src={emilyImg} alt="" />
                    {/* Text */}
                    <div className='w-60'>
                        <p className="font-barlow text-xs text-center font-medium text-veryDarkDesaturatedBlue text-opacity-80">
                            We put our trust in Sunnyside and they
                            delivered, making sure our needs were
                            met and deadlines were always hit.
                        </p>
                    </div>
                    {/* Name */}
                    <div className='flex flex-col justify-center items-center pt-7'>
                        <h1 className="text-veryDarkDesaturatedBlue font-fraunces font-black text-base">Emily R.</h1>
                        <h2 className="font-barlow font-medium text-xs text-veryDarkGrayishBlue">Marketing Director</h2>
                    </div>
                </div>
                {/* Testimonial two (2) */}
                <div className='max-w-fit flex flex-col justify-between items-center space-y-6'>
                    <img className='rounded-full w-16' src={thomasImg} alt="" />
                    {/* Text */}
                    <div className='w-60'>
                        <p className="font-barlow text-xs text-center font-medium text-veryDarkDesaturatedBlue text-opacity-80">
                            Sunnyside's enthusiasm coupled with  
                            their keen interest in our brand's success
                            made it a satisfying and enjoyable
                            experience.
                        </p>
                    </div>
                    {/* Name */}
                    <div className='flex flex-col justify-center items-center pt-7'>
                        <h1 className="text-veryDarkDesaturatedBlue font-fraunces font-black text-base">Thomas S.</h1>
                        <h2 className="font-barlow font-medium text-xs text-veryDarkGrayishBlue">Chief Operating Officer</h2>
                    </div>
                </div>
                {/* Testimonial three (3) */}
                <div className='flex flex-col justify-between items-center space-y-6'>
                    <img className='rounded-full w-16' src={jennieImg} alt="" />
                    {/* Text */}
                    <div className='w-60'>
                        <p className="font-barlow text-xs text-center font-medium text-veryDarkDesaturatedBlue text-opacity-80">
                            Incredible end result! Our sales increased
                            over 400% when we worked with
                            Sunnyside. Highly recommended!
                        </p>
                    </div>
                    {/* Name */}
                    <div className='flex flex-col justify-center items-center pt-7'>
                        <h1 className="text-veryDarkDesaturatedBlue font-fraunces font-black text-base">Jennie F.</h1>
                        <h2 className="font-barlow font-medium text-xs text-veryDarkGrayishBlue">Chief Operating Officer</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;