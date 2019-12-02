import React,{useState} from 'react'
import SideSection from './SideSection/SideSection'
import {Link} from 'react-router-dom'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import {connect} from 'react-redux'
import './SideFilterSections.scss'

const SideFilterSections = (props) => {
    
    const [sectionToggle1,setSectionToggle1] = useState(false);
    const [sectionToggle2,setSectionToggle2] = useState(false);
    const [sectionToggle3,setSectionToggle3] = useState(false);
    const [sectionToggle4,setSectionToggle4] = useState(false);
    const [sectionToggle5,setSectionToggle5] = useState(false);
    const [sectionToggle6,setSectionToggle6] = useState(false);
    
    const toggleSideSection1=()=>{
        setSectionToggle1(!sectionToggle1)
    }

    const toggleSideSection2=()=>{
        setSectionToggle2(!sectionToggle2)
    }

    const toggleSideSection3=()=>{
        setSectionToggle3(!sectionToggle3)
    }

    const toggleSideSection4=()=>{
        setSectionToggle4(!sectionToggle4)
    }
    
    const toggleSideSection5=()=>{
        setSectionToggle5(!sectionToggle5)
    }
 
    const toggleSideSection6=()=>{
        setSectionToggle6(!sectionToggle6)
    }

    const listItemsLinks=[<Link to="/women">Women</Link>,<Link to="/men">Men</Link>,<Link to="/trending">Trending</Link>,<Link to="/bestseller">Best Seller</Link>]
    const itemsPrices =[<button className="btn" onClick={()=>props.addToPrices(10,100)}>$ 10 - $ 100</button>,
                        <button className="btn" onClick={()=>props.addToPrices(100,200)}>$ 100 - $ 200</button>,
                        <button className="btn" onClick={()=>props.addToPrices(200,300)}>$ 200 - $ 300</button>,
                        <button className="btn" onClick={()=>props.addToPrices(300,400)}>$ 300 - $ 400</button>,
                        <button className="btn" onClick={()=>props.addToPrices(400,500)}>$ 400 - $ 500</button>]

    return (
        
        <div className="sideFilterSections">
            
            <div className="collections">
                <SideSection sectionTitle="COLLECTIONS" listItems={listItemsLinks}  toggleSideSections={toggleSideSection1} sectionToggle={sectionToggle1}/>
            </div>

            {(props.productTypeNameList.length>0 || props.colorsNameList.length>0 || props.pricseList.length>0) &&
                <div className="shoppingBy sideSection">
                    <h6>NOW SHOPPING BY</h6>
                    <hr/>
                    {props.productTypeNameList.length>0 && 
                        <div className="productsType">
                            <p>Products Type:</p>
                            <ul className="list-unstyled">
                                {props.productTypeNameList.map((pType,index)=>{
                                    return <li key={Math.random()}><button className="btn" onClick={()=>props.removePitemType(index)}>x</button> {pType}</li>
                                })}
                            </ul>   
                        </div>}

                    {props.colorsNameList.length>0 && 
                        <div className="colors">
                            <p>Colors:</p>
                            <ul className="list-unstyled">
                                {props.colorsNameList.map((pColor,index)=>{
                                    return <li key={Math.random()}><button className="btn" onClick={()=>props.removePitemColor(index)}>x</button> {pColor}</li>
                                })}
                            </ul>  
                        </div>}

                    {props.pricseList.length>0 && 
                        <div className="price">
                            <p>Price:</p>
                            <ul className="list-unstyled">
                                {props.pricseList.map((pPrice,index)=>{
                                    return <li key={Math.random()}><button className="btn" onClick={()=>props.removePitemPrice(index)}>x</button> $ {pPrice.min} - $ {pPrice.max}</li>
                                })}
                            </ul>  
                        </div>}
                            <button className="btn" onClick={props.clearShoppingBy}>Clear All</button>
            </div>}

            <div className="TOPS">
                 <SideSection sectionTitle="TOPS" listItems={props.listItemsTops}  toggleSideSections={toggleSideSection2} sectionToggle={sectionToggle2}/>
            </div>

            <div className="BOTTOMS">
                 <SideSection sectionTitle="BOTTOMS" listItems={props.listItemsBottoms} toggleSideSections={toggleSideSection3} sectionToggle={sectionToggle3} />
            </div>

            <div className="ACCESSORIES">
                <SideSection sectionTitle="ACCESSORIES" listItems={props.listItemsAccessories} toggleSideSections={toggleSideSection4} sectionToggle={sectionToggle4} />
            </div>

            <div className="color">
                <SideSection sectionTitle="COLOR" listItems={props.listItemsColors} styleList="inline" toggleSideSections={toggleSideSection5} sectionToggle={sectionToggle5} />
            </div>

            <div className="price">
                <SideSection sectionTitle="PRICE" listItems={itemsPrices}  toggleSideSections={toggleSideSection6} sectionToggle={sectionToggle6} />
            </div>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        productTypeNameList:state.productTypeNameList,
        colorsNameList:state.colorsNameList,
        pricseList:state.pricseList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToPrices:(min,max)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_PRICE_LIST , min:min , max:max}),
        removePitemType:(index)=>dispatch({type:actionsTypes.REMOVE_SHOPPING_ITEM_TYPE , index:index}),
        removePitemColor:(index)=>dispatch({type:actionsTypes.REMOVE_SHOPPING_ITEM_COLOR , index:index}),
        removePitemPrice:(index)=>dispatch({type:actionsTypes.REMOVE_SHOPPING_ITEM_PRICE , index:index}),
        clearShoppingBy:()=>dispatch({type:actionsTypes.CLEAR_SHOPPING_ITEMS})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SideFilterSections)
