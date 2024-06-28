import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Summer1 from '../../assets/summer1.jpg'
import Summer2 from '../../assets/summer2.jpg'
import Summer3 from '../../assets/summer3.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={Summer1} alt='/' />
                    {/* <p className="legend">Travelling to Paris</p> */}
                </div>
                <div>
                    <img src={Summer2} alt='/' />
                    {/* <p className="legend">Summer trip</p> */}
                </div>
                <div>
                    <img src={Summer3} alt='/' />
                    {/* <p className="legend">Travelling to London</p> */}
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel