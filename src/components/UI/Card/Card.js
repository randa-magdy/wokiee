import React from 'react'
import './Card.scss'

const Card = (props) => {
    return (
        <div className="card-ser text-center">
            <img src={props.src} alt="serv"/>
            <div className="contt">
                <h6><a href="#">{props.title}</a></h6>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Card
