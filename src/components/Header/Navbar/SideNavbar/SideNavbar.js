import React from 'react'
import './SideNavbar.scss'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../../redux/actions/actionsTypes'
import MainNavList from './MainNavList/MainNavList'
import {Link} from 'react-router-dom'
import SummeryCartNav from '../SummeryCartNav/SummeryCartNav'
import SideFilterSections from '../../../UI/SideFilterSections/SideFilterSections'

const SideNavbar =(props)=>{
    return (
        <div className="side-navbar" style={{transform:props.openSideNavB1 || props.openSideNavB2 || props.openSideNavB3 || props.openSideNavB4 ?'translateX(0)':'translateX(-100vw)'}}>
            <div className="close-navbar" onClick={props.closeSideNavbar}>
                <span>X Close</span>
            </div>
            <hr/>
            {props.openSidenav && <MainNavList />}
            {props.openMyCartSumm && <SummeryCartNav />} 
            {props.openMyAccountList &&  
             <ul className="list-unstyled myAccountDropDown">
                    <li> <Link to="/signin"><i className="fas fa-user-lock"></i> Sign In </Link></li>
                    <li> <i className="far fa-user"></i> <Link to="/register"> Register </Link></li>
                    <li> <i className="fas fa-shopping-bag"></i> <Link to="/cart"> View Cart </Link></li>
                    <li> <i className="far fa-heart"></i> <Link to="/wish"> WishList </Link></li>
                    <li> <i className="fas fa-balance-scale"></i> <Link to="/compare"> Compare </Link></li>
                </ul>
            } 
            {props.openSideFilter && <SideFilterSections/>}
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        openSidenav:state.openSidenav,
        openMyAccountList:state.openMyAccountList,
        openMyCartSumm:state.openMyCartSumm,
        openSideFilter:state.openSideFilter,
        openSideNavB1:state.openSideNavB1,
        openSideNavB2:state.openSideNavB2,
        openSideNavB3:state.openSideNavB3,
        openSideNavB4:state.openSideNavB4
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeSideNavbar:()=>dispatch({type:actionsTypes.CLOSE_SIDENAVBAR})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideNavbar)
