import React,{useEffect}  from 'react'
import {Link} from 'react-router-dom'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import InCartButton from '../InCartButton/InCartButton'
import './ItemCard.scss'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../redux/actions/actionsTypes'


const ItemCard = (props) => {
   
    return ( 
        <div className="item-card text-center" onClick={()=>props.sendDataToDetailsP(props.indexP,props.categoryP,props.sectionP,props.quantityP,props.totalPriceP)}>
            <div className="itm-ItemCard" >
                <div className="image"><img src={props.imgP1} alt=""/></div>
                <div className="content">
                    <Link to={'/'+ props.sectionName + '/' + props.indexP} ><span>{props.titleP}</span></Link>
                    <b>${props.priceP}</b>
                    <div className="sizes"> {props.sizesP && props.sizesP.map(size=>{ return <span key={Math.random()} className="productSize">{size}</span>})} </div>
                    <div className="colors"> {props.colorsP && props.colorsP.map(color=>{ return <button key={Math.random()} className="btn productColor" style={{backgroundColor:color}}></button>})} </div>
                </div>
            </div>
            <div className="over">   
                    <div className="icons">
                        <button className="btn view" onClick={props.viewProductCard}><i className="far fa-eye"></i></button>
                        
                        { props.includeSkuWish.includes(props.skuP) ? <button className="btn wish"  title="Added To Wish List"><i className="far fa-heart" ></i></button>
                          : <button className="btn wish"  title="Add To Wish List" onClick={()=>props.addToWishList(props.imgP1,props.titleP,props.priceP,props.sizesP,props.colorsP,props.skuP)}>
                                <i className="far fa-heart" ></i>
                            </button>
                        }
                       
                        {props.includeSkuCompare.includes(props.skuP)? <button className="btn" title="Added To Compare" > <i className="fas fa-balance-scale"></i> </button>
                         
                        : <button className="btn compare" title="Add To Compare" onClick={()=>props.addToCompare(props.imgP1,props.titleP,props.contentP,props.priceP,props.skuP,props.quantityP,props.totalPriceP)} >
                                <i className="fas fa-balance-scale"></i>
                            </button> 
                        }
                       
                        {props.children}
                    </div>  
                </div>
            {props.includeSkuCart.includes(props.skuP) ?
                <InCartButton />
                :
                <AddToCartButton indexP={props.indexP} imgP1={props.imgP1} titleP={props.titleP} priceP={props.priceP} totalPriceP={props.totalPriceP} quantityP={props.quantityP} skuP={props.skuP}/>
            }
            
        </div>
    )  
}    
 
const mapStateToProps=(state)=>{
    return{
        includeSkuCompare:state.includeSkuCompare,
        includeSkuWish:state.includeSkuWish,
        includeSkuCart:state.includeSkuCart,
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendDataToDetailsP:(index,category,section,quantity,totalPrice)=>dispatch({type:actionsTypes.SEND_DETAILS_DATA, index:index ,category:category ,section:section , quantity:quantity , totalPrice:totalPrice}),
        viewProductCard:()=>dispatch({type:actionsTypes.VIEW_PDETAILS_CARD}),
        addToCompare:(img,title,content,price,sku,quantity,totalPrice)=>dispatch({type:actionsTypes.ADD_TO_COMPARE,image:img,title:title,content:content,sku:sku,price:price,quantity:quantity,totalPrice:totalPrice }),
        addToWishList:(img,title,price,sizes,colors,sku)=>dispatch({type:actionsTypes.ADD_TO_WISHLIST,image:img,title:title,sizes:sizes,colors:colors,sku:sku,price:price })
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemCard)
