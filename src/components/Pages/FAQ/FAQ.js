import React from 'react'
import './FAQ.scss'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'

const FAQ = (props) => {
    const bItems=[{name:'Home',path:'/'}]; 
    return (
        <div className="faq">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="FAQ" />
            <div className="container">
                <h2>ANSWERS TO YOUR QUESTIONS</h2>
                <hr/>
                
                <div className="content">
                    <h4>Shopping Information</h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>WHAT SHIPPING METHODS ARE AVAILABLE?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            </div>

                            <div className="que-Ans">
                                <h6>HOW LONG WILL IT TAKE TO GET MY PACKAGE?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>DO YOU SHIP INTERNATIONALLY?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>

                            <div className="que-Ans">
                                <h6>WHAT SHIPPING METHODS ARE AVAILABLE?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="content">
                    <h4>Payment Information</h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>WHAT PAYMENT METHODS ARE ACCEPTED?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>IS BUYING ON-LINE SAFE?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="content">
                    <h4>Orders and Returns</h4>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>HOW DO I PLACE AN ORDER?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className="que-Ans">
                                <h6>DO I NEED AN ACCOUNT TO PLACE AN ORDER?</h6>
                                <p>Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className="que-Ans">
                                <h6>WHO SHOULD I TO CONTACT IF I HAVE ANY QUERIES?</h6>
                                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                        </div>
                        <div className="col-sm-6">
                            <div className="que-Ans">
                                <h6>HOW CAN I CANCEL OR CHANGE MY ORDER?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            </div>

                            <div className="que-Ans">
                                <h6>HOW DO I TRACK MY ORDER?</h6>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ
