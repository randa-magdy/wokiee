import React from 'react'
import logo from '../../../images/logo.png'
import paypal from '../../../images/foot3/paypal.png'
import visa from '../../../images/foot3/visa.png'
import mastercard from '../../../images/foot3/mastercard.jpg'
import discoverNetwork from '../../../images/foot3/discover-network.png'
import AmericanExpress from '../../../images/foot3/American_Express.png'
import './Foot3.scss'

const Foot3 = () => {
    return (
        <div className="foot3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content1">
                            <img  src={logo} alt="logo"/>
                            <span>&copy; Wokiee 2018. All Rights Reserved</span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content2">
                            <img src={paypal} alt="paypel"/>
                            <img src={visa} alt="visa"/>
                            <img src={mastercard} alt="mastercard"/>
                            <img src={discoverNetwork} alt="discoverNetwork"/>
                            <img src={AmericanExpress} alt="American_Express"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot3
