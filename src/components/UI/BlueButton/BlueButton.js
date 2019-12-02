import React from 'react'
import './BlueButton.scss'

const BlueButton  = (props) => {
    return (
        <div className="blueButton ">
            <button className="btn btn-primary" disabled={props.disabled}>{props.children}</button>
        </div>
    )
}

export default BlueButton 
 