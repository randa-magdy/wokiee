import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Header/Navbar/WNavbar'
import Pages from './components/Pages/Pages'
import './App.scss'


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navbar/>
          <Pages/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App