import React from 'react'
import blog13 from '../../../../images/blog/blog_13.jpg'
import blog12 from '../../../../images/blog/blog_12.jpg'
import blog11 from '../../../../images/blog/blog_11.jpg'
import {Link} from 'react-router-dom'
import './LatestBlog.scss'

const LatestBlog = () => {
    return (
        <div className="latestBlog padding text-center">
            <div className="container">
                <div className="head">
                    <h2>LATEST FROM BLOG</h2>
                    <span>The FRESHEST fre AND MOST EXCITING NEWS</span>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="image">
                                <img src={blog13} alt="blog" />
                            </div>
                            <div className="content-background">
                                <div className="content">
                                    <Link to="#">
                                        <span className="sp1">FASHION</span>
                                        <h5>DOLORE EU FUGIATNULLA PARIATUR</h5>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className="sp2">by kuzma kuzma on May 09, 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="image">
                                <img src={blog12} alt="blog" />
                            </div>
                            <div className="content-background">
                                <div className="content">
                                    <Link to="#">
                                        <span className="sp1">FASHION</span>
                                        <h5>Incididunt ut labore et dolore</h5>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <span className="sp2">by kuzma kuzma on May 09, 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog">
                            <div className="image">
                                <img src={blog11} alt="blog" />
                            </div>
                            <div className="content">
                                <Link to="#">
                                    <span className="sp1">FASHION</span>
                                    <h5>Duis malesuada nunc vel elem</h5>
                                </Link>
                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <span className="sp2">by kuzma kuzma on May 09, 2019</span>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlog
