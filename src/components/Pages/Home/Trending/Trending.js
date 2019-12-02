import React from 'react'
import './Trending.scss'
import ItemCard from '../../../UI/ItemCard/ItemCard'
import {connect} from 'react-redux'



const Trending =(props)=> {
        
    return (
        <div className="trending padding text-center">
            <div className="container"> 
                <div className="head">
                    <h2>TRENDING</h2>
                    <span>TOP VIEW IN THIS WEEK</span>
                </div>
                 
                <div className="trendingItems">
                    <div className="row">
                            {props.projectsData.Trending && props.projectsData.Trending.map((prod,id)=>{
                                const category=Object.keys(props.projectsData).indexOf('Trending');
                                return <div key={id} className="col-lg-3 col-md-4 col-6"> 
                                        <ItemCard  indexP={id} categoryP={category} titleP={prod.title} quantityP={prod.quantity}
                                        priceP={prod.price} imgP1={prod.image1} skuP={prod.sku} contentP={prod.content} totalPriceP={prod.totalPrice}
                                        sectionP={props.projectsData.Trending} sectionTitle='Trending' sectionPath='/trending' sectionName="Trending" />
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
        projectsData:state.projectsData
    }
}

 


export default connect(mapStateToProps)(Trending)
