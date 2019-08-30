import React from 'react'
import sale from '../../../../images/sections/index-promo-img-01.jpg'
import newS from '../../../../images/sections/index-promo-img-02.jpg'
import women from '../../../../images/sections/index-promo-img-03.jpg'
import men from '../../../../images/sections/index-promo-img-04.jpg'
import accessories from '../../../../images/sections/index-promo-img-05.jpg'
import shoes from '../../../../images/sections/index-promo-img-06.jpg'
import './Sections.scss'

const Sections = () => {
    return (
        <div className="sections padding">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="image">
                        <a href="#s" role="button" className="btn">SALE</a>
                        <img src={sale} alt="sections"/>
                    </div>
                    <div className="image">
                        <a href="#s" role="button" className="btn">NEW</a>
                        <img src={newS} alt="sections"/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="image">
                        <a href="#s" role="button" className="btn">WOMEN</a>
                        <img src={women} alt="sections"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image">
                                <a href="#s" role="button" className="btn">MEN</a>
                                <img src={men} alt="sections"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image">
                                <a href="#s" role="button" className="btn">ACCESSORIES</a>
                                <img src={accessories} alt="sections"/>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <div className="image">
                                <a href="#s" role="button" className="btn">SHOES</a>
                                <img src={shoes} alt="sections"/>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Sections
