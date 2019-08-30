import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../../images/home-slider/slide-01.jpg'
import slide2 from '../../../images/home-slider/slide-02.jpg'
import slide3 from '../../../images/home-slider/slide-03.jpg'
import Caption from './Caption/Caption'
import './Slider.scss'


const Slider = () => {
    return (
        <div className="slider">
            <Carousel fade='true' >
                <Carousel.Item>
                    <img className="d-block w-100" src={slide1} alt="First slide" />
                    <Carousel.Caption className="cap1 slide-in-top">
                      <Caption  p1="Multipurpose" p2="Premium" p3="Magento Theme" p4="30 skins, powerful features, great support, exclusive offer"/>      
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={slide2} alt="second slide" />
                    <Carousel.Caption className="cap2 slide-in-bottom">
                       <Caption  p1="Ready To" p2="Use Unique" p3="Demos" p4="Optimized for speed, website that sells"/>         
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block w-100" src={slide3} alt="Third slide" />
                    <Carousel.Caption className="cap3 slide-in-right">
                        <Caption  p1="Wokiee" p2="Find Solutions for" p3="Magento Store" p4="More Than a Theme, It's a Powerful Design Tool"/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
