import React from 'react'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import {connect} from 'react-redux'
import './CloseButton.scss'

const CloseButton = (props) => {
    return (
        <button className="btn closeCard" onClick={props.closeProductCard}><i className="far fa-times-circle"></i> {props.children}</button>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeProductCard:()=>dispatch({type:actionsTypes.CLOSE})
    }
}

export default connect(null,mapDispatchToProps)(CloseButton)
 