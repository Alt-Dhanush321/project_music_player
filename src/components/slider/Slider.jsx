import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {images} from './const'
import './Slider.css'

function Slider() {

    const [current , setCurrent] = useState(0);
    const slideLen = images.length;

    
    const nextSlide = () => {
        setCurrent(current === slideLen - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slideLen - 1 : current - 1);
    };  

    

  return (
    <>
        <section className="slider-container w-full h-24">
            <div className="nav-arrows flex w-full absolute justify-between px-32 text-white text-4xl top-1/4">
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            </div>
            {
                images.map((slide,i)=>(
                    <div className={i === current ? 'slide active' : 'slide'} key={i}>
                         {
                            i === current && (
                            <img src={slide.ImgSrc} alt='travel image' className='slide-image object-cover w-full h-[500px] ' />
                            )
                        }
                    </div>
                ))
            }

        </section>
    </>
  )
}

export default Slider