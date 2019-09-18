import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import { connect } from 'react-redux'
class Profile extends Component {
    render() {
        return (
            <div>
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
            </div>
            <div>
            <img></img>
            <h1>Name</h1>
            <p>about me</p>
            </div>
            <div>
                <h2>Location</h2>
                <h3>city</h3>
                <h3>state</h3>
                <h3>country</h3>

            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Profile)