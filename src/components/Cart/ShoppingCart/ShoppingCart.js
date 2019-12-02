import React from 'react'
import { connect } from 'react-redux'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import Notification from '../../UI/Notification/NotePragraph'
import './ShoppingCart.scss'
import {Link} from 'react-router-dom'
import SummeryAndTaxes from './SummeryAndTaxes/SummeryAndTaxes'

const ShoppingCart = (props) => {
    const bItems=[{name:'Home',path:'/'}]; 
    return (
        <div className="shoppingCart text-center">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="Your Shopping Cart" />
            <div className="container">
                <h2>SHOPPING CART</h2>
                {props.cartProductsList.length===0 ? <Notification ><p>SHOPPING CART IS EMPTY</p> <span>You have no items in your shopping cart.</span></Notification> 
                    : 
                <div className="products-cart">
                    <hr/>   
                    <div className="pcart">
                            {props.cartProductsList.map((itemCar,indexC)=>{
                                return <div key={Math.random()} className="item-cart">
                                            <div  className="row">
                                                <div className="col-10">
                                                    <div className="row">
                                                        <div className="col-md-4 col-12"><img  src={itemCar.image} alt={itemCar.title}/></div>
                                                        <div className="col-md-2 col-12"><Link to="/details" ><span className="title"> {itemCar.title} </span> </Link></div>
                                                        <div className="col-md-2 col-12">
                                                            <span className="price"><b> $ {itemCar.price.toFixed(2)}</b></span>
                                                        </div>
                                                        <div className="col-md-2 col-12">
                                                                <span>{itemCar.quantity}</span>
                                                        </div>
                                                        <div className="col-md-2 col-12">
                                                            <span className="totalprice">
                                                                <b> $ {(itemCar.quantity*itemCar.price).toFixed(2)} </b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-2">
                                                    <button className="btn removeP" onClick={()=>props.removeProductInCart(itemCar.sku)}> <i className="far fa-trash-alt"></i> </button>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                            })}
                    </div>

                    <div className="buttons-cart">
                        <div className="row">
                            <div className="col-md-3"> <button className="btn"><Link  to='/'> <i className="fas fa-reply-all"></i> CONTINUE SHOPPING </Link></button></div>
                            <div className="col-md-3"></div>
                            <div className="col-md-3"> <button className="btn clearAll" onClick={props.removeAllInCart}> <i className="far fa-trash-alt"></i> CLEAR SHOPPING CART  </button> </div>
                            <div className="col-md-3"> <button className="btn" onClick={()=>window.location.reload()}> <i className="fas fa-sync"></i> UPDATE CART </button></div>
                        </div>
                    </div>

                    <SummeryAndTaxes />
        
                </div>
                } 
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartProductsList:state.cartProductsList,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeProductInCart:(sku)=>dispatch({type:actionsTypes.REMOVE_ITEM_FROM_CART , sku:sku}),
        removeAllInCart:()=>dispatch({type:actionsTypes.REMOVE_ALL_ITEMS_CART})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)
