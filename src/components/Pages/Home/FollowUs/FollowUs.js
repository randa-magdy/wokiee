import React from 'react'
import follow1 from '../../../../images/follow-instgram/follow1.jpg'
import follow2 from '../../../../images/follow-instgram/follow2.jpg'
import follow3 from '../../../../images/follow-instgram/follow3.jpg'
import follow4 from '../../../../images/follow-instgram/follow4.jpg'
import follow5 from '../../../../images/follow-instgram/follow5.jpg'
import follow6 from '../../../../images/follow-instgram/follow6.jpg'
import './FollowUs.scss'

const FollowUs = () => {
    return (
        <div className="follow-us padding text-center">
            <div className="head">
                <h2><a href="https://www.instagram.com/wokieemagento/" target="_blank">@ FOLLOW</a> US ON</h2>
                <span>INSTAGRAM</span>
            </div>
            <div className="row">
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEJmG6jQee/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow1} alt="followInstgram" />
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEI7A-jqqd/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow2} alt="followInstgram" />
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEJkxLDYsx/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow3} alt="followInstgram" />
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEJnNKj485/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow4} alt="followInstgram" />
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEJoUgjCu6/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow5} alt="followInstgram" />
                    </div>
                </div>
                <div className="col-lg-2 col-sm-3 col-4">
                    <div className="image">
                        <a href="https://www.instagram.com/p/BnEJpb3D_AA/" target="_blank">
                            <div className="over">
                                <div className="icon"><i className="far fa-eye"></i></div>
                            </div>
                        </a>
                        <img src={follow6} alt="followInstgram" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs
