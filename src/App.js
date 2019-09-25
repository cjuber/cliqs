import React, { Component } from 'react'
import routes from './routes/routes'
import Header from './components/header/Header'
import './css/styles.css'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
       <Header/>
       {routes}
       <div className='BG'></div>
       
      </div>
    )
  }
}