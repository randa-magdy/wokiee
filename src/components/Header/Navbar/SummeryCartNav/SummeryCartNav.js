import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AgreeCondition from '../../../Cart/AgreeCondition/AgreeCondition'
import './SummeryCartNav.scss'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import Notification from '../../../UI/Notification/NotePragraph'

const SummeryCartNav = (props) => {
    return (
        <div className="summeryCartNav">
            {props.cartProductsList.length===0 ? <Notification ><p>No Product in the Cart</p> </Notification> 
                    : 
            <Fragment>
           
                <div className="summeryCart">
                    {props.cartProductsList.map((itemCar,indexC)=>{
                        return <div key={Math.random()} className="product-cart">
                                    <div  className="row">
                                        <div className="col-4">
                                            <img  src={itemCar.image} alt={itemCar.title}/>
                                        </div>
                                        <div className="col-6">
                                            <p className="title"> {itemCar.title} </p> 
                                            
                                            <p>{itemCar.quantity} x $ {itemCar.price.toFixed(2)}</p>
                                        </div>
                                        
                                        <div className="col-2">
                                            <button className="btn removeP" onClick={()=>props.removeProductInCart(itemCar.sku)}> <i className="far fa-trash-alt"></i> </button>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
                <hr/>
                <div className="total-agreeCheck">
                    <div className="total">
                        <div className="row">
                            <div className="col-4"><b>Total :</b></div>
                            <div className="col-3"></div>
                            <div className="col-4"> <span> $ {props.cartProductsList.length > 0 && (props.cartProductsList.reduce((b,{totalPrice})=>{ return b + totalPrice},0)).toFixed(2)} </span> </div>
                        </div>
                    </div>
                    <div className="agreeCheck">
                        <AgreeCondition Check={props.clickCheckCard} />
                        <div className="buttons-sCart">
                            <button className="btn viewCart">
                                <Link to='/cart'> VIEW CART </Link>
                            </button>
                            <br/>
                            <button className="btn clearAll" onClick={props.removeAllInCart}> <i className="far fa-trash-alt"></i> CLEAR CART  </button>
                        </div>
                    </div>
                </div> 
            </Fragment>
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartProductsList:state.cartProductsList,
        skuViewC:state.skuViewC
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeProductInCart:(sku)=>dispatch({type:actionsTypes.REMOVE_ITEM_FROM_CART , sku:sku}),
        removeAllInCart:()=>dispatch({type:actionsTypes.REMOVE_ALL_ITEMS_CART}),
        clickCheckCard:()=>dispatch({type:actionsTypes.CLICK_CHECK_CARD})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SummeryCartNav)
