import React from 'react'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import {connect} from 'react-redux'
import WhiteButton from '../../UI/WhiteButton/WhiteButton'
import AgreeCondition from '../AgreeCondition/AgreeCondition'
import CloseButton from '../../UI/CloseButton/CloseButton'
import {Link} from 'react-router-dom'
import './ViewCartCard.scss'

const ViewCartCard = (props) => {
    
    return (
        <div className="veiwCartCard">
            <CloseButton >Close</CloseButton>
            <div className="cartCard">
                <div className="row">
                    <div className="col-lg-6">
                        <h6><i className="fas fa-check"></i> Added to cart successfully!</h6>
                        <div className="cardSummery-left">
                            <img src={props.imageViewC} alt={props.titleViewC} />
                            <Link to="/details" ><span>{props.titleViewC}</span></Link>
                            <span><b>QTY :</b>
                                {props.cartProductsList.length > 0 && props.cartProductsList.filter((objItem)=>{return objItem.sku===props.skuViewC}).reduce((a,{quantity})=>{ return a + quantity},0)}
                            </span>
                            <span><b>TOTAL :</b> $ {props.cartProductsList.length > 0 && props.cartProductsList.filter((objItem)=>{return objItem.sku===props.skuViewC}).reduce((a,{totalPrice})=>{ return a + totalPrice},0).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cardSummery-right">
                            <span >There are {props.cartProductsList.length > 0 && props.cartProductsList.reduce((a,{quantity})=>{ return a + quantity},0)} items in your cart</span>
                            <br/>
                            <span className="total"><b>TOTAL : </b> $ {props.cartProductsList.length > 0 && props.cartProductsList.reduce((b,{totalPrice})=>{ return b + totalPrice},0).toFixed(2)}</span>
                            <WhiteButton> <Link to="/"> CONTINUE SHOPPING </Link></WhiteButton>
                            <WhiteButton><Link to={'/'+ props.sectionNameId + '/' + props.itemId} className="goToPage" onClick={props.closeProductCard}>GO TO DETAILS</Link></WhiteButton>
                            <WhiteButton> <Link to="/cart" onClick={props.closeProductCard}>VIEW CART </Link></WhiteButton>
                            <AgreeCondition Check={props.clickCheckCard}/>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    ) 
}

const mapStateToProps=(state)=>{
    return{
        projectsData:state.projectsData,
        indexP:state.indexP,
        sectionProducts:state.sectionProducts,
        cartProductsList:state.cartProductsList,
        itemId:state.itemId,
        sectionNameId:state.sectionNameId,
        itemData:state.itemData,
        totalPriceProduct:state.totalPriceProduct,
        quantityProduct:state.quantityProduct,
        imageViewC:state.imageViewC,
        titleViewC:state.titleViewC,
        skuViewC:state.skuViewC
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        closeProductCard:()=>dispatch({type:actionsTypes.CLOSE}),
        clickCheckCard:()=>dispatch({type:actionsTypes.CLICK_CHECK_CARD})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ViewCartCard)
