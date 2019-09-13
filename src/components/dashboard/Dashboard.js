import React, { Component } from 'react'
import Posts from '../posts/Posts'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
export default class dashboard extends Component {
    render() {
        return (
            <div className='container'>
            <div className='dash'>
            <NavOne/>
            <div className='navCtnr2'>
            <div className='navMid'>
                <Link to='/group/:id/post'><h1>+ Post</h1></Link>
                </div>
                </div>
            <NavTwo/> 
            </div>
            <Posts/>
            </div>
        )
    }
}
