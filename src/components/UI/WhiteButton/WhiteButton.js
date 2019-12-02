import React from 'react'
import './WhiteButton.scss'


const WhiteButton = (props) => {
    return (
        <div className="whiteButton">
            <button className="btn btn-outline-primary" onClick={props.clickFunction}>{props.children}</button>
        </div>
    )
}

export default WhiteButton
