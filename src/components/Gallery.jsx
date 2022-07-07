import React from 'react';
import styled from 'styled-components';
import milkImg from '../images/desktop/image-gallery-milkbottles.jpg';
import milkImgM from '../images/mobile/image-gallery-milkbottles.jpg';
import orangeGalImg from '../images/desktop/image-gallery-orange.jpg';
import orangeGalImgM from '../images/mobile/image-gallery-orange.jpg';
import coneImg from '../images/desktop/image-gallery-cone.jpg';
import coneImgM from '../images/mobile/image-gallery-cone.jpg';
import sugarImg from '../images/desktop/image-gallery-sugarcubes.jpg';
import sugarImgM from '../images/mobile/image-gallery-sugar-cubes.jpg';


function Gallery() {
  return (
    <div className='w-screen mt-8 flex flex-wrap md:flex-nowrap md:flex-row'>
        {/* Desktop */}
        <Images className='hidden md:block bg-no-repeat bg-top' src={milkImg} alt="" />
        <Images className='hidden md:block bg-center' src={orangeGalImg} alt="" />
        <Images className='hidden md:block' src={coneImg} alt="" />
        <Images className='hidden md:block' src={sugarImg} alt="" />
        {/* Mobile */}
        <Images className='sm:block md:hidden' src={milkImgM} alt="" />
        <Images className='sm:block md:hidden' src={orangeGalImgM} alt="" />
        <Images className='sm:block md:hidden' src={coneImgM} alt="" />
        <Images className='sm:block md:hidden' src={sugarImgM} alt="" />
    </div>
  );
}

const Images = styled.img `
    max-height: 364px;
    width: 25%;
    @media (max-width:480px) {
        width: 50%;
    }
`

export default Gallery;