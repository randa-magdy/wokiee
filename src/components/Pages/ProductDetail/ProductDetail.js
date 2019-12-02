import React, { useEffect , useState} from 'react'
import axios from 'axios'
import  './ProductDetail.scss'
import AddToCartButton from '../../UI/AddToCartButton/AddToCartButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import DetailsReviews from './DetailsReviews/DetailsReviews'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import ProductSlider from './ProductSlider/ProductSlider'
import CountItems from '../../UI/CountItems/CountItems'
import * as actionsTypes from '../../../redux/actions/actionsTypes'

const ProductDetail =(props)=> {
    

   const [contentDiv , setContentDiv]=useState(1);
   const [itemData , setItemData]=useState({});

    useEffect(() => {
        axios.get(`https://wokiee-e6dec.firebaseio.com/${props.match.params.sectionId}/${props.match.params.userId}.json`).then(res=>{
            setItemData(res.data);
            props.sendItemData(props.match.params.sectionId,props.match.params.userId,res.data);
        })
    }, [])

    console.log('action.itemDataP' + Object.keys(itemData))

    const chooseContentDiv=(key)=>{
        switch (key) { 
            case 1:
                setContentDiv(1);
                break;
            case 2:
                setContentDiv(2);
                break;
            case 3:
                setContentDiv(3);
                break;
            case 4:
                setContentDiv(4);
                break;
        
            default:
                setContentDiv(1);
        }
    }

const bItems=[{name:'Home',path:'/'},{name:props.match.params.sectionId , path:'/'+ props.match.params.sectionId}]
    return (
        <div className="project-detail" >
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive={itemData.title}/>
            <div className="container">
                <div className="row padding">
                    <div className="col-md-5">
                        <ProductSlider image1={itemData.image1} image2={itemData.image2} image3={itemData.image3} image4={itemData.image4} />
                    </div>
                    <div className="col-md-6">
                        <div className="details">
                            <h3>{itemData.title}</h3>
                            
                            <p className="price"><b>Price : </b> $ {itemData.price}</p>        
                            
                            <p><b>SKU : </b>{itemData.sku}</p>
                            
                            <p><b>Availability : </b>{itemData.availability}</p>
                            
                            <p><a href='#reviews-p' onClick={()=>chooseContentDiv(3)}>Add Your Review</a></p>

                            <div className="sizes"> <b>Size : </b><div className="size">{itemData.sizes && itemData.sizes.map(size=>{
                                return <span key={Math.random()} className="productSizeDetails">{size}</span>
                            })}</div> </div>
                            
                            <div className="colors"> <b>Colors : </b><div className="color">{itemData.colors && itemData.colors.map(color=>{
                                return <button key={Math.random()} className=" btn productColorDetails"  style={{backgroundColor:color}}></button>
                            })}</div> </div>
                            
                            <p className="content">{itemData.content}</p>
                        </div>
                       
                        <div className="size-shipping">
                            <button className="size btn"><i className="fas fa-tshirt"></i> <span>Size Guide</span></button>
                            <button className="shipping btn"><i className="fas fa-box-open"></i> <span>Shipping</span></button>
                        </div>
                        
                        <div className="number-products">
                            <CountItems quantity={props.quantityProduct} price={itemData.price}/>
                            <AddToCartButton indexP={props.indexP} imgP1={itemData.image1} titleP={itemData.title} priceP={itemData.price}
                             totalPriceP={props.totalPriceProduct} quantityP={props.quantityProduct} skuP={itemData.sku}/>
                        </div>
                        
                        <div className="AddTo">
                             <Link to="#"><i className="far fa-heart"></i>ADD TO WISH LIST</Link>
                            <button className="btn"><i className="fas fa-balance-scale"></i> ADD TO COMPARE</button>
                            <Link to="#"><i className="far fa-envelope"></i> EMAIL</Link>
                        </div>
                  
                    </div>
                </div>
                <DetailsReviews chooseContentDiv={chooseContentDiv} contentDiv={contentDiv} setContentDiv={setContentDiv}
                    detailsContent={itemData.detailsContent}
                    detailsNotes={itemData.detailsNotes}
                    customTab={itemData.customTab}
                    featuredProduct={itemData.featuredProduct}
                    material={itemData.material}
                    pattern={itemData.pattern}
                    climate={itemData.climate}
                />
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        indexP:state.indexP,
        projectsData:state.projectsData,
        category:state.category,
        sectionProducts:state.sectionProducts,
        quantityProduct:state.quantityProduct,
        includeSkuCart:state.includeSkuCart,
        totalPriceProduct:state.totalPriceProduct
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendItemData:(sectionName,itemId,itemDataP)=>dispatch({type:actionsTypes.SEND_ITEM_DATA ,itemDataP:itemDataP, sectionName:sectionName , itemId:itemId})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( ProductDetail)