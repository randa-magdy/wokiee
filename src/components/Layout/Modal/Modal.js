import React from 'react'
import './Modal.scss'
import {connect} from 'react-redux'

const Modal = (props) => {
    return (
        <div className="modal-w" style={{opacity:props.openModal? '1':'0' , overflowY:props.openModal? 'scroll' : 'hidden'}}>
            {props.children}
        </div>
    )
}

const mapStateToProps=(state)=>{ 
    return{
        openModal:state.openModal
    } 
}

export default connect(mapStateToProps)(Modal)
