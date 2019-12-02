import React from 'react'
import './BestSeller.scss'
import ItemCard from '../../../UI/ItemCard/ItemCard'
import {connect} from 'react-redux'



const BestSeller =(props)=> {
    return (
        <div className="best-seller padding text-center">
            <div className="container"> 
                <div className="head">
                    <h2>BEST SELLER</h2>
                    <span>TOP SALE IN THIS WEEK</span> 
                </div>
                 
                <div className="bestSeller-Items">
                    <div className="row">
                            {props.projectsData.BestSeller && props.projectsData.BestSeller.map(
                                (prod,id)=>{
                                const category=Object.keys(props.projectsData).indexOf('BestSeller');
                                   return <div key={prod.sku} className="col-lg-3 col-md-4 col-6">
                                            <ItemCard  indexP={id} categoryP={category} titleP={prod.title} quantityP={prod.quantity}
                                                priceP={prod.price} imgP1={prod.image1} skuP={prod.sku} contentP={prod.content} totalPriceP={prod.totalPrice}
                                                sectionP={props.projectsData.BestSeller} sectionTitle='BestSeller' sectionPath='/bestSeller' sectionName="BestSeller"/>
                                        </div>
                            })}
                    </div>
                </div> 
            </div> 
        </div> 
    )
} 


const mapStateToProps=(state)=>{
    return{
        projectsData:state.projectsData,
    }
}




export default connect(mapStateToProps)(BestSeller)
