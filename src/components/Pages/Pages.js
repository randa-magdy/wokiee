import React from 'react'
import Home from './Home/Home';
import {Route , Switch} from 'react-router-dom'
import ProductDetails from './ProductDetails/ProductDetails'
import Men from './ProductsPage/Men/Men'
import Women from './ProductsPage/Women/Women'
import CompareProducts from './CompareProducts/CompareProducts'
import WishListProducts from './WishListProducts/WishListProducts'
import ShoppingCart from '../Cart/ShoppingCart/ShoppingCart'
import Trending from './ProductsPage/Trending/Trending';
import BestSeller from './ProductsPage/BestSeller/BestSeller';
import About from './About/About'
import Services from './Services/Services'
import FAQ from './FAQ/FAQ'
import Contact from './Contact/Contact'
import ProductDetail from './ProductDetail/ProductDetail'
import './Pages.scss'
import {connect} from 'react-redux'
import * as actionsTypes from '../../redux/actions/actionsTypes'
 
const Pages = (props) => {
    return (
        <div className="pages" onClick={props.closeDropDownRightNav}>
         <Switch>
            <Route path='/wokiee/' component={Home}/>
            <Route path='/wokiee/about' component={About}/>
            <Route path='/wokiee/services' component={Services}/>
            <Route path='/wokiee/faq' component={FAQ}/>
            <Route path='/wokiee/contact' component={Contact}/>
            <Route path='/wokiee/:sectionId/:userId' component={ProductDetail}/>
            <Route path='/wokiee/men' component={Men}/>
            <Route path='/wokiee/women' component={Women}/>
            <Route path='/wokiee/trending' component={Trending}/>
            <Route path='/wokiee/bestseller' component={BestSeller}/>
            <Route path='/wokiee/compare' component={CompareProducts}/>
            <Route path='/wokiee/wish' component={WishListProducts}/>
            <Route path='/wokiee/cart' component={ShoppingCart}/>
        </Switch>
        </div> 
    )
} 
const mapDispatchToProps=(dispatch)=>{
    return{
        closeDropDownRightNav:()=>dispatch({type:actionsTypes.CLOSE_DROPDOWN_NAV})
    }
}

export default connect(null,mapDispatchToProps)(Pages)
  