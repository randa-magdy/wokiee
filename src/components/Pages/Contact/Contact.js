import React from 'react'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import BlueButton from '../../UI/BlueButton/BlueButton'
import './Contact.scss'


const Contact = (props) => {
    const bItems=[{name:'Home',path:'/'}]; 
    return (
        <div className="contact">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="Contact" />
            <div className="container">
                <div className="map">
                    <div className="row">
                        <div className="col-12 hidden-xs">
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-73.69949426260774!3d40.697149413874705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z2YbZitmI2YrZiNix2YPYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2ssa!4v1572477157786!5m2!1sar!2ssa"  frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
                <div className="information text-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="info">
                                 <i className="fas fa-phone"></i>
                                <h6>LET’S HAVE A CHAT!</h6>
                                <span>+777 2345 7885</span>
                                <span>+777 2345 7886</span> 
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                <h6>VISIT OUR LOCATION</h6>
                                <span>2548 Broaddus Maple Court Avenue,</span>
                                <span>Madisonville KY 4783,</span>
                                <span>United States of America</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="info">
                                <i className="fas fa-clock"></i>    
                                <h6>WORK TIME</h6>
                                <span>7 Days a week</span>
                                <span>from 10 AM to 6 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-from">
                    <form >
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your Name"}  placeholder="Your Name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your Email"}  placeholder="Your Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="tel"  pattern="[0-9\-]*"  className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your Phone"}  id="inputSubject" placeholder="Your Phone"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <textarea className="form-control" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Your Message"} placeholder="Your Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <BlueButton>SEND MESSAGE</BlueButton>
                    </form>
                </div>
           
            </div>
        </div>
    )
}

export default Contact
