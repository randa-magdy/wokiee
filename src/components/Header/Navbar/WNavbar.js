import React,{useRef} from 'react'
import logo from '../../../images/logo.png'
import './WNavbar.scss'
import brand1 from '../../../images/brands/brand-img-08.png'
import brand2 from '../../../images/brands/brand-img-02.png'
import brand3 from '../../../images/brands/brand-img-03.png'
import brand4 from '../../../images/brands/brand-img-04.png'
import brand5 from '../../../images/brands/brand-img-05.png'
import brand6 from '../../../images/brands/brand-img-06.png'
import b1 from '../../../images/slider-navbarWomen/b1.jpg'
import b2 from '../../../images/slider-navbarWomen/b2.jpg'
import b3 from '../../../images/slider-navbarWomen/b3.jpg'
import b4 from '../../../images/slider-navbarWomen/b4.jpg'
import b5 from '../../../images/slider-navbarWomen/b5.jpg'
import b6 from '../../../images/slider-navbarWomen/b6.jpg'
import m1 from '../../../images/men-navbarItems/header-category-01.jpg'
import m2 from '../../../images/men-navbarItems/header-category-02.jpg'
import m3 from '../../../images/men-navbarItems/header-category-03.jpg'
import m4 from '../../../images/men-navbarItems/megamenu_banner_right.jpg'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionsTypes from '../../../redux/actions/actionsTypes'
import DropDownToggleNav from './DropDownToggleNav/DropDownToggleNav'
import SummeryCartNav from './SummeryCartNav/SummeryCartNav'

 
const WNavbar =(props)=> {
    const navRef = useRef(null);

    
        const fixedNavbarinScroll=()=>{
            if(document.body.scrollTop>90 || document.documentElement.scrollTop>90){
                navRef.current.style.position='fixed';
                navRef.current.style.boxShadow='0 -2px 10px #CCC';
                navRef.current.classList.add('slide-bottom');
            }else{
                navRef.current.style.position='relative';
                navRef.current.style.boxShadow='none';
                navRef.current.classList.remove('slide-bottom');
            }
        }
    
 

    window.addEventListener('scroll',fixedNavbarinScroll)
    return (
        <div className="wokiee-navbar" ref={navRef} >
            <div className="container">
                <div className="w-nav">
                    <button className="btn menubarbutton" onClick={props.openSideNavbar}><i className="fas fa-bars"></i></button>
                    <div className="image text-center" onClick={props.closeDropDownRightNav}> <img src={logo} alt="logo" /> </div>
                    <ul className="list-unstyled left-nav" onClick={props.closeDropDownRightNav}>
                        <li><Link to="/wokiee/">HOME</Link></li>
                        <li><Link to="/wokiee/about">ABOUT US</Link></li>
                        <li className="women">
                            <Link to="/wokiee/women" >WOMEN</Link>
                            <div className="women-toggleItems">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h6><a href="/wokiee/#">TOPS</a></h6>
                                            <ul className="list-unstyled">
                                                {['Jackets','Blouses','Hoodie','T-shirts','Sweater','Sweatshirt'].map(itemT=>{
                                                    return <li  key={itemT} onClick={()=>props.addToProductType(itemT)}><Link to="/wokiee/women">{itemT}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="/wokiee/#">BOTTOMS</a></h6>
                                            <ul className="list-unstyled">
                                                {['Trouser','Jeans','Legging','Short'].map(itemB=>{
                                                    return <li key={itemB} onClick={()=>props.addToProductType(itemB)} ><Link to="/wokiee/women">{itemB}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="/wokiee/#">ACCESSORIES</a></h6>
                                            <ul className="list-unstyled">
                                                {['Hats','Scarf','Belt','Bag','Shoes','Sunglasses'].map(itemA=>{
                                                    return <li key={itemA} onClick={()=>props.addToProductType(itemA)} ><Link to="/wokiee/women">{itemA}</Link></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="/wokiee/#">TOP BRANDS</a></h6>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="imgBrand">
                                                        <img src={brand1} alt="img-brand"/>
                                                        <img src={brand2} alt="img-brand"/>
                                                        <img src={brand3} alt="img-brand"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="imgBrand">
                                                        <img src={brand4} alt="img-brand"/>
                                                        <img src={brand5} alt="img-brand"/>
                                                        <img src={brand6} alt="img-brand"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6>SPECIALS</h6>
                                            <div className="slider-womenNav">
                                            <Carousel >
                                                <Carousel.Item>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="image"><img src={b1} alt=""/></div>
                                                            <p><a href="/wokiee/#">Joust Duffle Bag</a></p>
                                                            <span>$34.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b2} alt=""/></div>
                                                            <p><a href="/wokiee/#">Crown Summit Backpack</a></p>
                                                            <span>$38.00</span>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>
                                                
                                                <Carousel.Item>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="image"><img src={b3} alt=""/></div>
                                                            <p><Link to="/wokiee/#">Strive Shoulder Pack</Link></p>
                                                            <span>$54.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b4} alt=""/></div>
                                                            <p><a href="/wokiee/#">Wayfarer Messenger Bag</a></p>
                                                            <span>$45.00</span>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="image"><img src={b5} alt=""/></div>
                                                            <p><a href="/wokiee/#">Rival Field Messenger</a></p>
                                                            <span>$45.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b6} alt=""/></div>
                                                            <p><a href="/wokiee/#">Fusion Backpack</a></p>
                                                            <span>$59.00</span>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>
                                            </Carousel>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </li>
                        <li className="men">
                            <Link to="/wokiee/men">MEN</Link>
                            <div className="men-toggleItems">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h6><a href="/wokiee/#">TOPS</a></h6>
                                        <div className="image"><img src={m1} alt="m1"/></div>
                                        <ul className="list-unstyled">
                                            {['Jacket','T-shirts','Hoodie','Sweater','Sweatshirt'].map(itemT=>{
                                                return <li key={itemT} onClick={()=>props.addToProductType(itemT)}><Link to="/wokiee/men">{itemT}</Link></li>
                                            })}
                                        </ul> 
                                    </div>
                                    <div className="col-lg-3">
                                        <h6><a href="/wokiee/#">BOTTOMS</a></h6>
                                        <div className="image"><img src={m2} alt="m2"/></div>
                                        <ul className="list-unstyled">
                                            {['Trouser','Jeans','Short'].map(itemB=>{
                                                return <li key={itemB} onClick={()=>props.addToProductType(itemB)}><Link to="/wokiee/men">{itemB}</Link></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h6><a href="/wokiee/#">ACCESSORIES</a></h6>
                                        <div className="image"><img src={m3} alt="m3"/></div>
                                        <ul className="list-unstyled">
                                            {['Hats','Scarf','Belt','Bag','Shoes','Sunglasses'].map(itemA=>{
                                                return <li key={itemA} onClick={()=>props.addToProductType(itemA)}><Link to="/wokiee/men">{itemA}</Link></li>
                                            })}
                                        </ul> 
                                    </div>
                                    <div className="col-lg-3">
                                        <a href="/wokiee/#"><img src={m4} alt="m4"/></a>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li><Link to="/wokiee/services">SERVICES</Link></li>
                        <li><Link to="/wokiee/#">BLOG</Link></li>
                        <li><Link to="/wokiee/faq">FAQ</Link></li> 
                        <li><Link to="/wokiee/contact">CONTACT US</Link></li>
                    </ul>
                    <ul className="list-unstyled right-nav">
                        <li><button className="btn" title="search"><i className="fas fa-search"></i></button></li>
                        <li className="openCartSummery">
                            <button className="btn" title="Cart" onClick={props.openCartSummery}><i className="fas fa-shopping-bag"></i>
                                {props.cartProductsList.length > 0 &&  <span className="allQuantities">{props.cartProductsList.reduce((a,{quantity})=>{ return a + quantity},0)}</span>}
                            </button>
                        </li>
                        <li><button className="btn" title="My Account" onClick={props.openmyAccountDropDown}><i className="far fa-user"></i></button></li>
                        <li><button className="btn"><i className="fas fa-sliders-h"></i></button></li>
                    </ul>
                    <ul className="list-unstyled rightNav-smallScreen">
                        <li><button className="btn" title="search"><i className="fas fa-search"></i></button></li>
                        <li className="openCartSummery">
                            <button className="btn" title="Cart" onClick={props.openCartSummerySideNav}><i className="fas fa-shopping-bag"></i>
                                {props.cartProductsList.length > 0 &&  <span className="allQuantities">{props.cartProductsList.reduce((a,{quantity})=>{ return a + quantity},0)}</span>}
                            </button>
                        </li>
                        <li><button className="btn" title="My Account" onClick={props.openmyAccountSideNav}><i className="far fa-user"></i></button></li>
                        <li><button className="btn"><i className="fas fa-sliders-h"></i></button></li>
                    </ul>
                    <DropDownToggleNav openDropDownRightNav1={props.openDropDownRightNav1} openDropDownRightNav2={props.openDropDownRightNav2}>
                                {props.openMyCartSumm && <SummeryCartNav /> }

                                {props.openMyAccountList &&
                                 <ul className="list-unstyled myAccountDropDown">
                                    <li> <Link to="/wokiee/signin"> <i className="fas fa-user-lock"></i> Sign In </Link></li>
                                    <li> <i className="far fa-user"></i> <Link to="/wokiee/register"> Register </Link></li>
                                    <li> <i className="fas fa-shopping-bag"></i> <Link to="/wokiee/cart"> View Cart </Link></li>
                                    <li> <i className="far fa-heart"></i> <Link to="/wokiee/wish"> WishList </Link></li>
                                    <li> <i className="fas fa-balance-scale"></i> <Link to="/wokiee/compare"> Compare </Link></li>
                                </ul>
                                }
                    </DropDownToggleNav>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        cartProductsList:state.cartProductsList,
        openMyAccountList:state.openMyAccountList,
        openDropDownRightNav1:state.openDropDownRightNav1,
        openDropDownRightNav2:state.openDropDownRightNav2,
        openMyCartSumm:state.openMyCartSumm
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        openSideNavbar:()=>dispatch({type:actionsTypes.OPEN_SIDENAVBAR}),
        openCartSummery:()=>dispatch({type:actionsTypes.OPEN_CART_SUMMERY}),
        openmyAccountDropDown:()=>dispatch({type:actionsTypes.OPEN_MYACCOUNT_DROPDOWN}),
        openmyAccountSideNav:()=>dispatch({type:actionsTypes.OPEN_MYACCOUNT_SIDENAV}),
        openCartSummerySideNav:()=>dispatch({type:actionsTypes.OPEN_CART_SUMMERY_SIDENAV}),
        addToProductType:(name)=>dispatch({type:actionsTypes.ADD_TO_PRODUCT_TYPE_LIST , name:name}),
        closeDropDownRightNav:()=>dispatch({type:actionsTypes.CLOSE_DROPDOWN_NAV})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WNavbar)
