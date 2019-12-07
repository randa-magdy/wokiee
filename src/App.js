import React, { useEffect } from 'react'
import {HashRouter} from 'react-router-dom'
import Navbar from './components/Header/Navbar/WNavbar'
import Pages from './components/Pages/Pages'
import Footer from './components/Footer/Footer'
import Modal from './components/Layout/Modal/Modal'
import SideNavbar from './components/Header/Navbar/SideNavbar/SideNavbar'
import ViewProductDetailsCard from './components/Pages/ProductsPage/ViewProductDetailsCard/ViewProductDetailsCard'
import './App.scss'
import {connect} from 'react-redux'
import * as actionsCreator from './redux/actions/actions'
import ViewCartCard from './components/Cart/ViewCartCard/ViewCartCard'




const App =(props)=>{

  useEffect(()=>{
    // load all products data from json file and set it in state
    props.getAllProductsData();
  },[])

  if(props.openModal){
    document.documentElement.style.overflow='hidden';
}else{
    document.documentElement.style.overflow='auto';
}


  
    return (
      <div className="app">
        <HashRouter>
          {props.openSideNavB1 || props.openSideNavB2 || props.openSideNavB3 || props.openSideNavB4 ? <Modal> <SideNavbar/> </Modal> : null}
          {props.viewDetailsCard ? <Modal> <ViewProductDetailsCard /> </Modal> : null}
          {props.viewCartCard ? <Modal> <ViewCartCard /> </Modal> : null}
          <Navbar/>
          <Pages/>
          <Footer/>
        </HashRouter>
      </div>
    )  
  } 

const mapStateToPoprs=(state)=>{
    return{
      openSideNavB1:state.openSideNavB1,
      openSideNavB2:state.openSideNavB2,
      openSideNavB3:state.openSideNavB3,
      openSideNavB4:state.openSideNavB4,
      viewDetailsCard:state.viewDetailsCard,
      viewCartCard:state.viewCartCard,
      openModal:state.openModal
    }
}

const mapDispatchToProps=(dispatch)=>{
  return{
      getAllProductsData:()=>dispatch(actionsCreator.setProducts())
  }
}

export default connect(mapStateToPoprs,mapDispatchToProps)(App)