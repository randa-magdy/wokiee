import React,{useState} from 'react'
import  './ProductDetails.scss'
import AddToCartButton from '../../UI/AddToCartButton/AddToCartButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import DetailsReviews from './DetailsReviews/DetailsReviews'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import ProductSlider from './ProductSlider/ProductSlider'
import CountItems from '../../UI/CountItems/CountItems'



const ProductDetails = (props) => {

const [contentDiv , setContentDiv]=useState(1);

const chooseContentDiv=(key)=>{
    switch (key) { 
        case 1:
            setContentDiv(1);
            break;
        case 2:
            setContentDiv(2);
            break;
        case 3:
            setContentDiv(3);
            break;
        case 4:
            setContentDiv(4);
            break;
    
        default:
            setContentDiv(1);
    }
}

    console.log(props.projectsData[Object.keys(props.projectsData)[props.category]])
    console.log(props.sectionProducts)
    console.log('from details' + props.indexP)
    
    
    const bItems=[{name:'Home',path:'/'},{name:Object.keys(props.projectsData)[props.category] , path:'/'+ Object.keys(props.projectsData)[props.category]}]
    return (
        <div className="project-details" >
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive={props.sectionProducts[props.indexP].title}/>
            <div className="container">
                <div className="row padding">
                    <div className="col-md-5">
                        <ProductSlider projectsData={props.projectsData} indexP={props.indexP} sectionProducts={props.sectionProducts} />
                    </div>
                    <div className="col-md-6">
                        <div className="details">
                            <h3>{props.sectionProducts[props.indexP].title}</h3>
                            
                            <p className="price"><b>Price : </b> $ {props.sectionProducts[props.indexP].price}</p>        
                            
                            <p><b>SKU : </b>{props.sectionProducts[props.indexP].sku}</p>
                            
                            <p><b>Availability : </b>{props.sectionProducts[props.indexP].availability}</p>
                            
                            <p><a href='#reviews-p' onClick={()=>chooseContentDiv(3)}>Add Your Review</a></p>

                            <div className="sizes"> <b>Size : </b><div className="size">{props.sectionProducts[props.indexP].sizes.map(size=>{
                                return <span key={Math.random()} className="productSizeDetails">{size}</span>
                            })}</div> </div>
                            
                            <div className="colors"> <b>Colors : </b><div className="color">{props.sectionProducts[props.indexP].colors.map(color=>{
                                return <button key={Math.random()} className=" btn productColorDetails"  style={{backgroundColor:color}}></button>
                            })}</div> </div>
                            
                            <p className="content">{props.sectionProducts[props.indexP].content}</p>
                        </div>
                       
                        <div className="size-shipping">
                            <button className="size btn"><i className="fas fa-tshirt"></i> <span>Size Guide</span></button>
                            <button className="shipping btn"><i className="fas fa-box-open"></i> <span>Shipping</span></button>
                        </div>
                        
                        <div className="number-products">
                            <CountItems quantity={props.sectionProducts[props.indexP].quantity}/>
                            <AddToCartButton indexP={props.indexP} imgP1={props.sectionProducts[props.indexP].image1} titleP={props.sectionProducts[props.indexP].title} priceP={props.sectionProducts[props.indexP].price}
                             totalPriceP={props.sectionProducts[props.indexP].quantity * props.sectionProducts[props.indexP].price} quantityP={props.sectionProducts[props.indexP].quantity} skuP={props.sectionProducts[props.indexP].sku}/>
                        </div>
                        
                        <div className="AddTo">
                             <Link to="#"><i className="far fa-heart"></i>ADD TO WISH LIST</Link>
                            <button className="btn"><i className="fas fa-balance-scale"></i> ADD TO COMPARE</button>
                            <Link to="#"><i className="far fa-envelope"></i> EMAIL</Link>
                        </div>
                  
                    </div>
                </div>
                <DetailsReviews chooseContentDiv={chooseContentDiv} contentDiv={contentDiv} setContentDiv={setContentDiv}
                    detailsContent={props.sectionProducts[props.indexP].detailsContent}
                    detailsNotes={props.sectionProducts[props.indexP].detailsNotes}
                    customTab={props.sectionProducts[props.indexP].customTab}
                    featuredProduct={props.sectionProducts[props.indexP].featuredProduct}
                    material={props.sectionProducts[props.indexP].material}
                    pattern={props.sectionProducts[props.indexP].pattern}
                    climate={props.sectionProducts[props.indexP].climate}
                    

                />
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        indexP:state.indexP,
        projectsData:state.projectsData,
        category:state.category,
        sectionProducts:state.sectionProducts,
        quantityProduct:state.quantityProduct,
        includeSkuCart:state.includeSkuCart
    }
}

export default connect(mapStateToProps)(ProductDetails)
 