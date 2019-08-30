import React from 'react'
import Sections from './Sections/Sections'
import Slider from '../../Header/Slider/Slider'
import Trending from './Trending/Trending'

const Home = () => {
    return (
        <div className="home">
            <Slider/>
            <Sections/>
            <Trending />
        </div>
    )
}

export default Home
