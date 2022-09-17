import React from 'react';
import './ImgCarouselStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={BoraBora} alt='/' />
                    <p className="legend">Bora Bora</p>
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    <p className="legend">Barbados</p>
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    <p className="legend">Maldives</p>
                </div>
            </Carousel>
        </div>

    )
}

export default ImgCarousel