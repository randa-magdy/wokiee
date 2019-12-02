import React,{useState} from 'react'
import './HeadPage.scss'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import {connect} from 'react-redux'



const HeadPage = (props) => {
    const [optionVal, setOptionVal]=useState('name');

    const handleChange=(e)=>{
        setOptionVal(e.target.value);
    }
 
    return (
        <div className="headPage">
            <h3>{props.title} <span>( {props.productsLength} )</span></h3>
            <div className="sortProducts_grid">
                <div className="sortProducts">
                    <form>
                        <label>Sort By :</label>
                        <select onChange={(event)=>handleChange(event) } value={optionVal} onClick={optionVal==='name' ? props.SortByName:props.SortByPrice}>
                            <option value='name' >Product Name</option>
                            <option value='price' >Price</option>
                        </select>
                    </form> 
                    <button className="btn asc" onClick={props.sortProductsAsc} title="Ascending"> <i className="fas fa-arrow-up"></i></button>
                    <button className="btn desc" onClick={props.sortProductsDes} title="Descending"><i className="fas fa-arrow-down"></i> </button>
                </div>
                <div className="columnGridSystem">
                    <button className="btn one" onClick={()=>props.changeGridSystem('col-6')}> <i className="fas fa-th-large"></i> </button>
                    <button className="btn two" onClick={()=>props.changeGridSystem('col-md-4 col-6')}> <i className="fas fa-th"></i> </button>
                    <button className="btn three" onClick={()=>props.changeGridSystem('col-lg-3 col-md-4 col-6')}> <i className="fas fa-grip-vertical"></i><i className="fas fa-grip-vertical"></i> </button>
                </div>
            </div>   
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeGridSystem:(val)=>dispatch({type:actionsTypes.SET_GRID_SYSTEM,data:val}),
        sortProductsAsc:()=>dispatch({type:actionsTypes.SORT_PRODUCTS_ASCENDING}),
        sortProductsDes:()=>dispatch({type:actionsTypes.SORT_PRODUCTS_DESCENDING}),
        SortByName:()=>dispatch({type:actionsTypes.SORT_BY_NAME}),
        SortByPrice:()=>dispatch({type:actionsTypes.SORT_BY_PRICE}),
        openFilterItemSide:()=>dispatch({type:actionsTypes.OPEN_FILTERITEMS_SIDENAV})
    }
}


export default connect(null,mapDispatchToProps)(HeadPage)
