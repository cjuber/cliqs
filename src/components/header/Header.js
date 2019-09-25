import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';

class Header extends Component {
    
    constructor(){
        super()
        this.state={
        display: false,
        
        }
    }

    changeDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }

    logout = () => {
        const{REACT_APP_PORT} = process.env
        axios.get(`${REACT_APP_PORT}/auth/logout`)
        .then(()=>{
            this.props.history.push('/')
        })
        .catch(err => console.log(err))
        this.setState({
            display:false
        })
    }
    render() {
        
        const {id} = this.props.id
        const pathname = `/profile/${id}`
        return (
            <div>

{ this.props.location.pathname === '/' ?
                    (<div></div>)
                    :
                    
                (<div className='header'>
                    <div className = 'logoC'>
                        <img src = {require('../../assets/Logo.png')} className = 'logo' alt='logo'/>
                       
                    </div>
                    <div className='mobileBar'>
                    <div className='findGroups'>
                    <Link to='/find_group' className='link'><span><p className='pGroups'>Find Groups</p></span></Link>
                    </div>
                    <div className='addGroups'>
                    <Link to='/add_group' className='link'><span><p className='paGroups'>+ Group</p></span> </Link>
                    </div>
                    </div>
                    <div className='dsktpHeader'>
                    <div className='findGroups'>
                    <Link to='/find_group' className='link'><span><p className='pGroups'>Find Groups</p></span></Link>
                    </div>
                    <div className='addGroups'>
                    <Link to='/add_group' className='link'><span><p className='paGroups'>+ Group</p></span> </Link>
                    </div>
                    </div>
                    
                        
                    <div className='profileImg'>
                    <span onClick={this.changeDisplay}>
                        <img src={this.props.id.user_img} alt=''></img>
                        </span> 
                        </div> 
                        
                        <div className={
                            this.state.display ?
                            'hdrMenu'
                            :
                            'hdrMenu2'
                        }>
                            <ul className='hdrUL'>
                                <Link to={pathname} className='link' onClick={this.changeDisplay}><li>Profile</li></Link>
                                <Link to={pathname}  className='link' onClick={this.changeDisplay}><li>Settings</li></Link>
                                <li onClick={this.logout}>Logout</li>

                            </ul>

                        </div>
                    <div className='headerName'>
                        <span onClick={this.changeDisplay}>
                        <div>
                        <h1 className='name'>{this.props.first_name.first_name} {this.props.last_name.last_name}</h1>
                        </div>
                        </span>
                        
                    </div>
                </div>)
                }
                
                





            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps)(Header))