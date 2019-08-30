import React from 'react'
import './Caption.scss'

const Caption = (props) => {
    return (
        <div className="caption">
            <p>{props.p1}</p>
            <h1>{props.p2}</h1>
            <h1>{props.p3}</h1>
            <span>{props.p4}</span>
            <a href="#b" role="button" className="btn btn-primary">SHOP NOW !</a>
        </div>
    )
}

export default Caption
