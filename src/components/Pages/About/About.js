import React from 'react'
import './About.scss'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'

const About = (props) => {
    const bItems=[{name:'Home',path:'/'}]; 
    return (
        <div className="about">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="About" />
            <div className="wrapper">
                <div className="container">
                    <div className="content">
                        <h3>WOKIEE IS A WORLDWIDE STYLE POINT FOR ECOMMERCE TRENDS.</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque</p>
                        <div className="qoute"> <i className="fas fa-quote-left"></i> <h4>We provide developers, owners of e-commerce sites, and their customers around the world with the best online stores.</h4></div>
                        <span>— Jerry Combo</span>
                    </div>  
                </div>
            </div>
            <div className="container">
                <div className="bottom-content">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="cont">
                                <h6>OUR COMPANY STORES</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="cont">
                                <h6>CONTACT US</h6>
                                <p><span>Address :</span> 7895 Piermont Dr NE Albuquerque, NM 198866,
                                            United States of America</p>
                                <p><span>Phone :</span> +566 4774 9930; +566 4774 9940</p>
                                <p><span>Hours :</span> ALL WEEK FROM 9 AM TO 9 PM</p>
                                <p><span>E-mail :</span> info@mydomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
