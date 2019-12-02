import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  './ProductSlider.scss'
import InnerImageZoom from 'react-inner-image-zoom'


const ProductSlider = (props) => {

    return ( 
        <div className="productSlider">
            <Carousel fade='true' >
                {  (props.sectionProducts[props.indexP].image1) ?
                    <Carousel.Item> <InnerImageZoom src={props.sectionProducts[props.indexP].image1} alt="image"/> </Carousel.Item> : null }
                
                { (props.sectionProducts[props.indexP].image2) ?
                    <Carousel.Item><InnerImageZoom src={props.sectionProducts[props.indexP].image2} alt="image"/></Carousel.Item> : null }
                
                { (props.sectionProducts[props.indexP].image3) ?
                    <Carousel.Item><InnerImageZoom src={props.sectionProducts[props.indexP].image3} alt="image"/></Carousel.Item> : null }
                
                { (props.sectionProducts[props.indexP].image4) ?
                    <Carousel.Item><InnerImageZoom src={props.sectionProducts[props.indexP].image4} alt="image"/></Carousel.Item> : null }
            </Carousel>
        </div>          
    )
}



export default ProductSlider
 