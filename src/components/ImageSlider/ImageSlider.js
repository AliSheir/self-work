import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from './pics/hb.jpg'
import image2 from './pics/sho1.jpg'
import image3 from './pics/sho2.jpg'
import image4 from './pics/sho4.jpg'
import image5 from './pics/cloth1.jpg'
import image6 from './pics/cloth2.jpg'
import image7 from './pics/cloth3.jpg'
import './ImageSlider.css'


class ImageSlider extends Component {
    render() {
        return (
            <div className="slider-container">
            <Carousel autoPlay>
                <div className='active'>
                    <img className='slider-img' src={image1} />
                </div>
                <div className='active'>
                    <img className='slider-img' src={image2}/>
                </div>
                <div className='active'>
                    <img className='slider-img' src={image3} />
                </div > 
                <div className='active'>
                    <img className='slider-img' src={image4} />
                </div> 
                <div className='active'> 
                    <img className='slider-img' src={image5} />
                </div> 
                <div className='active'>
                    <img className='slider-img' src={image6} />
                </div>
                <div className='active'>
                    <img className='slider-img' src={image7} />
                </div>
            </Carousel>
            </div>
        );
    }
};

export default ImageSlider;
