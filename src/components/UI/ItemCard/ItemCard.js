import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = (props) => {
    return (
        <div className="item-card">
            <div className="over">
                <div className="icons">
                <button className="btn" ><i className="far fa-eye"></i></button>
                <Link to="#" title="Add To Wish List"><i className="far fa-heart"></i></Link>
                <button className="btn" title="Add To Compare"><i className="fas fa-balance-scale"></i></button>
                </div> 
            </div>
            <div className="image"><img src={props.img} alt=""/></div>
            <p>{props.title}</p>
            <span>${props.price}</span>
        </div>
    )
}

export default ItemCard
