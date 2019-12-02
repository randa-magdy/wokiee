import React from 'react'
import BlueButton from '../../UI/BlueButton/BlueButton'
import {connect} from 'react-redux'
import './AgreeCondition.scss'

const AgreeCondition = (props) => {
    
    return (
        <div className="agreeCondition">
            <input type="checkbox" onChange={props.Check} checked={props.checkdInCard ? true : false }/> <span>I agree with the terms & conditions</span>
            <BlueButton disabled={props.checkdInCard ?false:true}> PROCEED TO CHECKOUT</BlueButton>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        checkdInCard:state.checkdInCard
    }
}

export default connect(mapStateToProps)(AgreeCondition) 
