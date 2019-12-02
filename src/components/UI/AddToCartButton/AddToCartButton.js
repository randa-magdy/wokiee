import React from 'react'
import './AddToCartButton.scss'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import {connect} from 'react-redux'

const AddToCartButton = (props) => {
    return (
        <div className="addToCartButton">
            <button className="btn btn-primary" onClick={()=>props.addProductToCart(props.indexP,props.imgP1,props.titleP,props.quantityP,props.priceP,props.totalPriceP,props.skuP)}><i className="fas fa-cart-plus"></i> Add To Cart</button>
        </div>
    ) 
} 
const mapStateToProps=(state)=>{ 
    return{
        includeSkuCart:state.includeSkuCart
    } 
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeProductCard:()=>dispatch({type:actionsTypes.CLOSE}),
        addProductToCart:(index,image,title,quantity,price,totalPrice,sku)=>dispatch({type:actionsTypes.ADD_TO_CART,index:index,image:image ,title:title ,quantity:quantity,price:price,totalPrice:totalPrice,sku:sku }),
        removeProductInCart:(sku)=>dispatch({type:actionsTypes.REMOVE_ITEM_FROM_CART , sku:sku})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AddToCartButton)
 