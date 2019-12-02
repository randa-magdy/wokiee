import React from 'react'
import './Foot1.scss'

const Foot1 = () => { 
    return (
        <div className="foot1 text-center">
            <div className="background-foot1">
                <div className="container">
                    <div className="foot-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12"><span>BE IN TOUCH WITH US:</span></div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <form className="form-inline">
                                    <input className="form-control" type="email" onFocus={(e) => e.target.placeholder = ""} 
                                         onBlur={(e) => e.target.placeholder = "Enter your e-mail"} placeholder="Enter your e-mail"/>
                                    <button className="btn btn-dark" type="submit">JOIN US</button>
                                </form>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="icons">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-google-plus-g"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-pinterest-p"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot1
