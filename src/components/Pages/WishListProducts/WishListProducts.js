import React from 'react'
import {connect} from 'react-redux'
import ItemCard from '../../UI/ItemCard/ItemCard'
import * as actionTypes from '../../../redux/actions/actionsTypes'
import './WishListProducts.scss'
import Notification from '../../UI/Notification/NotePragraph'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'

const WishListProducts = (props) => {

    const bItems=[{name:'Home',path:'/'}]; 
 

    return (
        <div className="wishListProducts">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="Wishlist" />
            <div className="container">
                <h2 className="text-center">WISHLIST</h2>
                {
                    props.wishProductsList.length===0 ? <Notification > <p>No products were added to the wishlist</p> </Notification>
                :
                <div className="wishListProducts">
                    <div className="row">  
                        {
                            props.wishProductsList.map((wproduct,id)=>{
                                return <div className="col-lg-3 col-md-4 col-6">
                                            <ItemCard key={Math.random()} titleP={wproduct.title} priceP={wproduct.price} imgP1={wproduct.image} 
                                                    sizesP={wproduct.sizes} colorsP={wproduct.colors} >
                                                        <button className="btn closeP" onClick={()=>props.removeItemFromWish(id)}><i className="far fa-trash-alt"></i></button>
                                            </ItemCard>
                                        </div>
                            })
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        wishProductsList:state.wishProductsList
    }
}


const mapDispatchToProps=(dispatch)=>{
    return {
        removeItemFromWish:(index)=>dispatch({type:actionTypes.REMOVE_ITEM_FROM_WISHLIST , index:index})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WishListProducts)
