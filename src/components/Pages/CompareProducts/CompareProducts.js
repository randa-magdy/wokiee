import React from 'react'
import Notification from '../../UI/Notification/NotePragraph'
import {connect} from 'react-redux'
import AddToCartButton from '../../UI/AddToCartButton/AddToCartButton'
import InCartButton from '../../UI/InCartButton/InCartButton'
import * as actionTypes from '../../../redux/actions/actionsTypes'
import './CompareProducts.scss'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import {Link} from 'react-router-dom'
 
const CompareProducts = (props) => {

    const bItems=[{name:'Home',path:'/'}]; 
  
    return (
        <div className="compareProducts">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="Compare" />
            <div className="container">
                <h2>COMPARE PRODUCTS</h2>
                {props.compareProductsList.length===0 ? <Notification ><p>You have no items to compare.</p></Notification> 
                    : 
                <div className="compareList padding">
                    <div className="comareTable">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="row"></th>
                                    {props.compareProductsList.map((product,index)=>{
                                        return <td key={Math.random()}>
                                                    <div className="product">
                                                        <button className="btn closeP" onClick={()=>props.removeItem(index)}><i className="far fa-trash-alt"></i> Remove</button>
                                                        <img src={product.image} alt={product.title}/>
                                                        <p className="title"><Link to={'/'+ props.sectionNameId + '/' + props.itemId} >{product.title}</Link></p>
                                                        <span><b>SKU : </b> {product.sku}</span>
                                                        {props.includeSkuCart.includes(product.sku) ?
                                                            <InCartButton />
                                                            :
                                                            <AddToCartButton imgP1={product.image} titleP={product.title} priceP={product.price} totalPriceP={product.totalPrice} quantityP={product.quantity}
                                                            skuP={product.sku} />
                                                        }
                                                    </div>
                                                </td>
                                        })
                                    }
                                </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <th scope="row"><b>Price</b></th>
                                    {props.compareProductsList.map((product)=>{
                                        return <th key={Math.random()} scope="col">
                                                    <div className="price">
                                                        <span>$ {product.price}</span>
                                                    </div>
                                                </th>
                                        })
                                    }
                                    
                                </tr>
                                <tr>
                                    <th scope="row"><b>Description</b></th>
                                    
                                    {props.compareProductsList.map(()=>{
                                        return <th key={Math.random()} scope="col">
                                                    <div className="description">
                                                        <span>Short Uniqe Description</span>
                                                    </div>
                                                </th>
                                        })
                                    }
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{ 
        compareProductsList:state.compareProductsList,
        includeSkuCart:state.includeSkuCart,
        itemId:state.itemId,
        sectionNameId:state.sectionNameId,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        removeItem:(index)=>dispatch({type:actionTypes.REMOVE_ITEM , index:index})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CompareProducts)
