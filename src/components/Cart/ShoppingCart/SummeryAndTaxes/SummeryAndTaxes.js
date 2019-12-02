import React from 'react'
import SelectCountriesOptions from '../../../UI/SelectCountriesOptions/SelectCountriesOptions'
import WhiteButton from '../../../UI/WhiteButton/WhiteButton'
import AgreeCondition from '../../AgreeCondition/AgreeCondition'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import './SummeryAndTaxes.scss'

const SummeryAndTaxes = (props) => {
    return (
        <div className="summery-taxes-note">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="shipping-tax">
                        <h5>ESTIMATE SHIPPING AND TAX</h5>
                        <p>Enter your destination to get a shipping estimate</p>
                        <form onSubmit={(event)=>event.preventDefault()}>
                            <SelectCountriesOptions />
                            
                            <label>ZIP/POSTAL CODE</label>
                            <input type="number" className="form-control" placeholder="ZIP/POSTAL CODE" />

                            <WhiteButton clickFunction={props.calculateShipping}> CALCULATE SHIPPING</WhiteButton>
                            { props.calcShipping>0 &&<p>International Shipping at $ {props.calcShipping.toFixed(2)}</p>}
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="note">
                        <h5>NOTE</h5>
                        <p>Add special instructions for your order..</p>
                        <form>
                            <textarea className="form-control"></textarea>
                        </form>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-6">
                    <div className="summery">
                        <div className="row">
                            <div className="col-6"><p>TOTAL ITEMS</p></div>
                            <div className="col-6"><span> {props.cartProductsList.length > 0 && props.cartProductsList.reduce((a,{quantity})=>{ return a + quantity},0)} </span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><p>SUBTOTAL</p></div>
                            <div className="col-6"><span> $ {props.cartProductsList.length > 0 && (props.cartProductsList.reduce((b,{totalPrice})=>{ return b + totalPrice},0)).toFixed(2)} </span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><p>SHIPPING</p></div>
                            <div className="col-6"><span> $ {props.calcShipping.toFixed(2)} </span></div>
                        </div>
                        <div className="row">
                            <div className="col-6"><p>GRAND TOTAL</p></div>
                            <div className="col-6"><span className="grandTotal"> $ {(props.calcShipping + ( props.cartProductsList.length > 0 && props.cartProductsList.reduce((b,{totalPrice})=>{ return b + totalPrice},0)).toFixed(2))} </span></div>
                        </div>
                        <AgreeCondition Check={props.clickCheckCard}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartProductsList:state.cartProductsList,
        calcShipping:state.calcShipping
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        clickCheckCard:()=>dispatch({type:actionsTypes.CLICK_CHECK_CARD}),
        calculateShipping:()=>dispatch({type:actionsTypes.CALCULATE_SHIPPING})
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (SummeryAndTaxes)
