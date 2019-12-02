import React from 'react'
import img1 from '../../../../images/advertisement/img1.jpg'
import img2 from '../../../../images/advertisement/img2.jpg'
import img3 from '../../../../images/advertisement/img3.jpg'
import './Advertisement.scss'


const Advertisement = () => {
    return (
        <div className="advertisement padding">
            <div className="row">
                <div className="col-md-4">
                    <div className="get_up">
                        <div className="over">
                            <div className="content">
                                <a href="#">
                                    <span className="sp">FALL-WINTER CLEARANCE SALES</span>
                                    <h4>GET UP TO  <span>50% OFF</span></h4>
                                </a>
                            </div>
                        </div>
                        <div className="image">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="new-arrival">
                        <div className="over">
                            <div className="content">
                                <a href="#">
                                    <span className="sp">SUMMER 2018</span>
                                    <h4>NEW ARRIVALS</h4>
                                </a>    
                            </div>
                        </div>
                        <div className="image">
                           <img src={img2} alt=""/>
                        </div> 
                    </div> 
                </div>
                <div className="col-md-4">
                    <div className="new-collection">
                        <div className="over">
                            <div className="content">
                                <a href="#">
                                    <span className="sp">NEW COLLECTION</span>
                                    <h4><span>HANDBAGS</span></h4>
                                </a>
                            </div>
                        </div>
                        <div className="image">
                           <img src={img3} alt=""/>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Advertisement
