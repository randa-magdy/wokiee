import React from 'react'
import Card from '../../UI/Card/Card'
import services1 from '../../../images/services/services1.png'
import services2 from '../../../images/services/services2.png'
import services3 from '../../../images/services/services3.png'
import services4 from '../../../images/services/services4.png'
import services5 from '../../../images/services/services5.png'
import services6 from '../../../images/services/services6.png'
import Breadcrumb from '../../UI/Breadcrumb/Breadcrumb'
import './Services.scss'

const Services = () => {
    const cardData=[{image:services1,title:'FUTURE LEADERS' ,cont:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {image:services2,title:'POWERFUL SOLUTIONS' ,cont:'Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {image:services3,title:'PROGRESSIVE TOOLS' ,cont:'Ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {image:services4,title:'CREATIVE PROJECTS' ,cont:'Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'},
        {image:services5,title:'INNOVATION EXPERTS' ,cont:'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'},
        {image:services6,title:'LEADING STRATEGIES' ,cont:'Dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'}]

        const bItems=[{name:'Home',path:'/'}]; 

    return (
        <div className="services">
            <Breadcrumb breadcrumbItems={bItems} breadcrumbActive="Services" />
            <div className="container">
                <h2>WHAT WE DO</h2>
                <div className="row">
                    {cardData.map(scard=>{
                        return <div key={Math.random()} className="col-lg-4 col-sm-6">
                                    <Card src={scard.image} title={scard.title} content={scard.cont}/>
                                </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services
