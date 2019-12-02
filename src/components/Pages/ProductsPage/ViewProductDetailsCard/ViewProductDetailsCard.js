import React from 'react'
import ProductSlider from '../../ProductDetails/ProductSlider/ProductSlider'
import AddToCartButton from '../../../UI/AddToCartButton/AddToCartButton'
import InCartButton from '../../../UI/InCartButton/InCartButton'
import BlueButton from '../../../UI/BlueButton/BlueButton'
import {connect} from 'react-redux'
import CloseButton from '../../../UI/CloseButton/CloseButton'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import './ViewProductDetailsCard.scss'
import {Link} from 'react-router-dom'
 
const ViewProductDetailsCard = (props) => { 
    return (
        <div className="view-producDetails">
            <CloseButton >Close</CloseButton> 
            <div className="view-detailsPcard">
                <ProductSlider  indexP={props.indexP} sectionProducts={props.sectionProducts}/>
                <div className="viewdetails">
                    <h3>{props.sectionProducts[props.indexP].title}</h3>
                    
                    <p className="price"><b>Price : </b> $ {props.sectionProducts[props.indexP].price}</p>        
                    
                    <p><b>SKU : </b>{props.sectionProducts[props.indexP].sku}</p>
                    
                    <p><b>Availability : </b>{props.sectionProducts[props.indexP].availability}</p>

                    <div className="sizes"> <b>Size : </b><div className="size">{props.sectionProducts[props.indexP].sizes.map(size=>{
                        return <span key={Math.random()} className="productSizeDetails">{size}</span>
                    })}</div> </div>
                    
                    <div className="colors"> <b>Colors : </b><div className="color">{props.sectionProducts[props.indexP].colors.map(color=>{
                        return <button key={Math.random()} className=" btn productColorDetails"  style={{backgroundColor:color}}></button>
                    })}</div> </div>
                    
                    <p className="content">{props.sectionProducts[props.indexP].content}</p>
                    
                    {props.includeSkuCart.includes(props.sectionProducts[props.indexP].sku) ?
                        <InCartButton />
                        :
                        <AddToCartButton indexP={props.indexP} imgP1={props.sectionProducts[props.indexP].image1} titleP={props.sectionProducts[props.indexP].title} priceP={props.sectionProducts[props.indexP].price}
                             totalPriceP={props.sectionProducts[props.indexP].totalPrice} quantityP={props.sectionProducts[props.indexP].quantity} skuP={props.sectionProducts[props.indexP].sku}/>
                    }
                     
                    <BlueButton><Link to='/details' className="goToPage" onClick={props.closeProductCard}>Go To Poduct Details</Link></BlueButton>
                </div>
            </div>
        </div>
    )
}
 

const mapStateToProps=(state)=>{
    return{
        indexP:state.indexP,
        sectionProducts:state.sectionProducts,
        includeSkuCart:state.includeSkuCart
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        closeProductCard:()=>dispatch({type:actionsTypes.CLOSE})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ViewProductDetailsCard)
