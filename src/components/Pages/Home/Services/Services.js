import React from 'react'
import './Services.scss'

const Services = () => {
    return (
        <div className="services padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="service">
                            <div className="row">
                                <div className="col-2">
                                    <div className="icon"><i className="fas fa-shipping-fast"></i></div>
                                </div>
                                <div className="col-10">
                                    <div className="content">
                                        <p><a href="#">FREE SHIPPING</a></p>
                                        <span>Free shipping on all US order or order above $99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <div className="row">
                                <div className="col-2">
                                    <div className="icon"><i className="fas fa-headset"></i></div>
                                </div>
                                <div className="col-10">
                                    <div className="content">
                                        <p><a href="#">SUPPORT 24/7</a></p>
                                        <span>Contact us 24 hours a day, 7 days a week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service">
                            <div className="row">
                                <div className="col-2">
                                    <div className="icon"><i className="fas fa-reply-all"></i></div>
                                </div>
                                <div className="col-10">
                                    <div className="content">
                                        <p><a href="#">30 DAYS RETURN</a></p>
                                        <span>Simply return it within 24 days for an exchange.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Services
