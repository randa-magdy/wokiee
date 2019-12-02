import React from 'react'
import Sections from './Sections/Sections'
import Slider from '../../Header/Slider/Slider'
import Trending from './Trending/Trending'
import Advertisement from './Advertisement/Advertisement'
import BestSeller from './BestSeller/BestSeller'
import LatestBlog from './LatestBlog/LatestBlog'
import FollowUs from './FollowUs/FollowUs'
import Services from './Services/Services'

const Home = (props) => {
    return (
        <div className="home">
            <Slider/>
            <Sections/> 
            <Trending/>
            <Advertisement/>
            <BestSeller/>
            <LatestBlog/> 
            <FollowUs/>
            <Services/>
        </div>
    )
}

export default Home
