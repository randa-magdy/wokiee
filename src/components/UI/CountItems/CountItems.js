import React from 'react'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import './CountItems.scss'

const CountItems = (props) => {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <form className="countP" onSubmit={(event)=>handleSubmit(event)}>
            <button type='submit' className="btn countButton" onClick={props.decreaseQuantity}>-</button>
                <input type="text"  min='1'  maxLength='3'  name="inputProduct" value={props.quantity} onChange={(event)=>props.updateInput(event,props.price)}/>
            <button type='submit' className="btn countButton" onClick={props.increaseQuantity}>+</button>
        </form> 
    )
}  

const mapStateToProps=(state)=>{ 
    return{
        quantityProduct:state.quantityProduct
    }
}

  
const mapDispatchToProps=(dispatch)=>{
    return{
        updateInput:(e,price)=>dispatch({type:actionsTypes.UPDATE_INPUT , event:e , price:price}),
        increaseQuantity:()=>dispatch({type:actionsTypes.INCREASE_QUANTITY_ITEM}),
        decreaseQuantity:()=>dispatch({type:actionsTypes.DECREASE_QUANTITY_ITEM})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CountItems)
