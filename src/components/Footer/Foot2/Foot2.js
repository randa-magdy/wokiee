import React from 'react'
import {Link} from 'react-router-dom'
import './Foot2.scss'

const Foot2 = () => {
    return (
        <div className="foot2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-6">
                        <div className="content">
                            <h6>CATEGORIES</h6>
                            <ul className="list-unstyled">
                                <li><Link to="#">Women</Link></li>
                                <li><Link to="#">Men</Link></li>
                                <li><Link to="#">Accessories</Link></li>
                                <li><Link to="#">Shoes</Link></li>
                                <li><Link to="#">New Arrivals</Link></li>
                                <li><Link to="#">Clearence</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="content">
                            <h6>MY ACCOUNT</h6>
                            <ul className="list-unstyled">
                                <li><Link to="#">Orders</Link></li>
                                <li><Link to="#">Compare</Link></li>
                                <li><Link to="#">Wishlist</Link></li>
                                <li><Link to="#">Log In</Link></li>
                                <li><Link to="#">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="content">
                            <h6>ABOUT</h6>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="content">
                            <h6>CONTACTS</h6>
                            <ul className="list-unstyled">
                                <li><span>Address : </span>2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United States of America</li>
                                <li><span>Phone : </span>+777 2345 7885; +777 2345 7886</li>
                                <li><span>Hours : </span>7 Days a week from 10 am to 6 pm</li>
                                <li><span>E-mail : </span><a className="email" href="#">info@mydomain.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot2
