import React from 'react'
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


const WNavbar =()=> {

    return (
        <div className="wokiee-navbar">
            <div className="container">
                <div className="w-nav">
                    <div className="image"> <img src={logo} alt="logo" /> </div>
                    <ul className="list-unstyled right-nav">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li className="women">
                            <a href="#" >WOMEN</a>
                            <div className="women-toggleItems">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h6><a href="#">TOPS</a></h6>
                                            <ul className="list-unstyled">
                                                {['Jackets','Blouses & Shirts','Dresses','Top & T-shirts','Sleeveless Top','Seaters','Outerwear'].map(itemT=>{
                                                    return <li  key={itemT}><a href="#">{itemT}</a></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="#">BOTTOMS</a></h6>
                                            <ul className="list-unstyled">
                                                {['Trousers','Jeans','Leggings','Jumpsuit & Shorts','Skirts','Tights'].map(itemB=>{
                                                    return <li key={itemB}><a href="#">{itemB}</a></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="#">ACCESSORIES</a></h6>
                                            <ul className="list-unstyled">
                                                {['Jewellery','Hats','Scarves & Snoods','Belts','Bags','Shoes','Sunglasses'].map(itemA=>{
                                                    return <li key={itemA}><a href="#">{itemA}</a></li>
                                                })}
                                            </ul>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6><a href="#">TOP BRANDS</a></h6>
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
                                                            <p><a href="#">Joust Duffle Bag</a></p>
                                                            <span>$34.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b2} alt=""/></div>
                                                            <p><a href="#">Crown Summit Backpack</a></p>
                                                            <span>$38.00</span>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>
                                                
                                                <Carousel.Item>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="image"><img src={b3} alt=""/></div>
                                                            <p><a href="#">Strive Shoulder Pack</a></p>
                                                            <span>$54.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b4} alt=""/></div>
                                                            <p><a href="#">Wayfarer Messenger Bag</a></p>
                                                            <span>$45.00</span>
                                                        </div>
                                                    </div>
                                                </Carousel.Item>

                                                <Carousel.Item>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="image"><img src={b5} alt=""/></div>
                                                            <p><a href="#">Rival Field Messenger</a></p>
                                                            <span>$45.00</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="image"><img src={b6} alt=""/></div>
                                                            <p><a href="#">Fusion Backpack</a></p>
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
                            <a href="#">MEN</a>
                            <div className="men-toggleItems">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h6><a href="#">TOPS</a></h6>
                                        <div className="image"><img src={m1} alt="m1"/></div>
                                        <ul className="list-unstyled">
                                            {['Jackets','Shirts','Top & T-shirts','Sleeveless Top','Sweaters','Outerwear'].map(itemT=>{
                                                return <li key={itemT}><a href="#">{itemT}</a></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h6><a href="#">BOTTOMS</a></h6>
                                        <div className="image"><img src={m2} alt="m2"/></div>
                                        <ul className="list-unstyled">
                                            {['Trousers','Jeans','Jumpsuit & Shorts','Tights'].map(itemB=>{
                                                return <li key={itemB}><a href="#">{itemB}</a></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <h6><a href="#">ACCESSORIES</a></h6>
                                        <div className="image"><img src={m3} alt="m3"/></div>
                                        <ul className="list-unstyled">
                                            {['Jewellery','Hats','Scarves & Snoods','Belts','Bags','Shoes','Sunglasses'].map(itemA=>{
                                                return <li key={itemA}><a href="#">{itemA}</a></li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-lg-3">
                                        <a href="#"><img src={m4} alt="m4"/></a>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li><a href="#"><i className="fas fa-search"></i></a></li>
                        <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i className="far fa-user"></i></a></li>
                        <li><a href="#"><i className="fas fa-sliders-h"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default WNavbar
