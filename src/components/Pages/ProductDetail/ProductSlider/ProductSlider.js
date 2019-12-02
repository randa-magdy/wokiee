import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  './ProductSlider.scss'
import InnerImageZoom from 'react-inner-image-zoom'


const ProductSlider = (props) => {

    return (
        <div className="productSlider">
            <Carousel fade='true' >
                {  (props.image1) ?
                    <Carousel.Item> <InnerImageZoom src={props.image1} alt="image"/> </Carousel.Item> : null }
                
                { (props.image2) ?
                    <Carousel.Item><InnerImageZoom src={props.image2} alt="image"/></Carousel.Item> : null }
                
                { (props.image3) ?
                    <Carousel.Item><InnerImageZoom src={props.image3} alt="image"/></Carousel.Item> : null }
                
                { (props.image4) ?
                    <Carousel.Item><InnerImageZoom src={props.image4} alt="image"/></Carousel.Item> : null }
            </Carousel>
        </div>          
    )
}



export default ProductSlider
 