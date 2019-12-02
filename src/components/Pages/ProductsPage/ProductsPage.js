import React,{useEffect} from 'react'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import {connect} from 'react-redux'
import * as actionsCreator from '../../../redux/actions/actions'
import HeadPage from '../../UI/HeadPage/HeadPage'
import ItemCard from '../../UI/ItemCard/ItemCard'
import SideFilterSections from '../../UI/SideFilterSections/SideFilterSections'


const ProductsPage = (props) => {
    
    useEffect(()=>{
        props.getAllProductsData();
    },[]);
 
    
    const sortProductsTitle =(a,b)=>{
        if(props.sortOrder=== 'ascending'){
            if(a.title.toUpperCase() < b.title.toUpperCase() ) {return -1}
            if(a.title.toUpperCase() > b.title.toUpperCase() ) {return 1}
            return 0
        }

        if(props.sortOrder=== 'descending'){
            if(a.title.toUpperCase() < b.title.toUpperCase() ) {return 1}
            if(a.title.toUpperCase() > b.title.toUpperCase() ) {return -1}
            return 0
        }  
    }

    const sortProductsPrice =(a,b)=>{
        if(props.sortOrder=== 'ascending'){
            return a.price - b.price;
        }

        if(props.sortOrder=== 'descending'){
            return b.price - a.price;
        }  
    } 
    
    let count=0;
  /*  let mapProducts=props.categoryProductsArray && props.categoryProductsArray.sort(props.sortType==='name'? sortProductsTitle : sortProductsPrice).map((item,id)=>{
                                    
        const productColor = props.colorsNameList.length >0 ? props.colorsNameList.map(pColor=>{return item.colors.includes(pColor)}).reduce((a,b)=>{return a || b}) :true
        
        const productType=props.productTypeNameList.length > 0 ? props.productTypeNameList.map(pType=>{return item.subType===pType}).reduce((a,b)=>{return a || b}) :true
        
        const productPrice =props.pricseList.length >0 ? props.pricseList.map(pPrice=>{return item.price>=pPrice.min && item.price<=pPrice.max}).reduce((a,b)=>{return a || b}) :true
        
        return (productType && productColor && productPrice) && <div key={Math.random()} className={props.numberOfColumns}> 
                           
                         <ItemCard  indexP={id} categoryP={props.categoryProduct} sectionP={props.categoryProductsArray} titleP={item.title} contentP={item.content}
                         priceP={item.price} imgP1={item.image1} sizesP={item.sizes} colorsP={item.colors} skuP={item.sku}
                          sectionTitle={props.headTitle} sectionPath={props.sectionPath} quantityP={item.quantity}
                          totalPriceP={item.totalPrice} sectionName={props.sectionName}
                          countItems={count++} />    
                </div>  
                
    })*/

    let mapProducts=props.categoryProductsArray && props.categoryProductsArray.map((item,id)=>{
                                    
        const productColor = props.colorsNameList.length >0 ? props.colorsNameList.map(pColor=>{return item.colors.includes(pColor)}).reduce((a,b)=>{return a || b}) :true
        
        const productType=props.productTypeNameList.length > 0 ? props.productTypeNameList.map(pType=>{return item.subType===pType}).reduce((a,b)=>{return a || b}) :true
        
        const productPrice =props.pricseList.length >0 ? props.pricseList.map(pPrice=>{return item.price>=pPrice.min && item.price<=pPrice.max}).reduce((a,b)=>{return a || b}) :true
        
        return (productType && productColor && productPrice) && <div key={Math.random()} className={props.numberOfColumns}> 
                           
                         <ItemCard  indexP={id} categoryP={props.categoryProduct} sectionP={props.categoryProductsArray} titleP={item.title} contentP={item.content}
                         priceP={item.price} imgP1={item.image1} sizesP={item.sizes} colorsP={item.colors} skuP={item.sku}
                          sectionTitle={props.headTitle} sectionPath={props.sectionPath} quantityP={item.quantity}
                          totalPriceP={item.totalPrice} sectionName={props.sectionName}
                          countItems={count++} />    
                </div>  
                
    })
    
    
    return (
        <div className="productsPage">
            <Breadcrumb breadcrumbItems={props.bItems} breadcrumbActive={props.breadcrumbActive} />
            <div className="container">
                <div className="row padding">
                    <div className="col-md-2 col-sm-3 col-4">
                        <SideFilterSections listItemsColors={props.listItemsColors} listItemsTops={props.listItemsTops} listItemsBottoms={props.listItemsBottoms}
                            listItemsAccessories={props.listItemsAccessories}
                        />  
                    </div>
                    <div className="col-md-10 col-sm-9 col-8">
                        <HeadPage title={props.headTitle} productsLength={count}/>
                        <div className="productsP row">
                            { mapProducts } 
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
        numberOfColumns:state.numberOfColumns,
        sortOrder:state.sortOrder,
        sortType:state.sortType,
        productTypeNameList:state.productTypeNameList,
        colorsNameList:state.colorsNameList,
        pricseList:state.pricseList
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        getAllProductsData:()=>dispatch(actionsCreator.setProducts())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProductsPage)
