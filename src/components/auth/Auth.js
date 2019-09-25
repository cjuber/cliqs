import React, { Component } from 'react'
import axios from 'axios'
import{connect} from 'react-redux'
import {updateUser} from '../../redux/reducer'


class Auth extends Component {
    constructor(){
        super()
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            display: false

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    changDisplay = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            display: !this.state.display
        })
    }

    register  = () => {
        const {REACT_APP_PORT} = process.env
        const {firstName, lastName, email,password} =this.state
        axios.post(`${REACT_APP_PORT}/auth/register`, {firstName, lastName, email,password})
        .then(response => {
           
            this.props.updateUser([response.data])
            this.props.history.push('/dashboard')
        })
        this.setState({
            firstName:'',
            lastName: '',
            email: '',
            password: '',
            display: false
        })
    }

    login = () => {
        const {REACT_APP_PORT} = process.env
        const{email, password} = this.state
        
        axios.post(`${REACT_APP_PORT}/auth/login`, {email,password})
        .then(response =>{
            
            this.props.updateUser(response.data)
            this.props.history.push('/dashboard')
        })
        this.setState({
            firstName:'',
            lastName: '',
            email: '',
            password: '',
            display: false
        })
    }
    render() {
      
        return (
            <div className ='authCtnr'>
                <div className='authHeader'> 
                <div className='mobileBar'></div>
                <div className = 'authLogo'>
                <img src = {require('../../assets/Logo.png')} className = 'logo' alt='logo'/>
                </div>
                    {
                        this.state.display ?
                       ( <span className='authHdrBtn' onClick={this.changDisplay}><p className='pHdrBtn'>Login</p></span>)
                       :
                        (<span className='authHdrBtn' onClick={this.changDisplay}><p className='pHdrBtn'>Sign Up</p></span>)

                    }
                </div>

                    
                       
                    
                {
                    this.state.display ?

                   (
                <div className='authBox'>
                    <div className='authInputC'>
                    <input className='authInput' type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}></input>
                    <input className='authInput' type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}></input>
                    </div>
                    <div className='authInputC'>
                    <input className='authInput' type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}></input>
                    <input className='authInput' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                    
                    </div>
                    <div className='authBtnC'>
                    <button className='authBtn' onClick={this.register}>Sign Up</button>
                    {
                        this.state.display ?
                       ( <button className='authBtn2' onClick={this.changDisplay}>Login</button>)
                       :
                        (<button className='authBtn2' onClick={this.changDisplay}>Sign Up</button>)

                    }
                    </div>
                </div> )
                :
               (
                <div className='authBox'>
                    <div className='authInputC'>
                    <input className='authInput' type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}></input>
                    <input className='authInput' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    <div className='authBtnC'>
                    <button className='authBtn' onClick={this.login}>Login</button>
                    {
                        this.state.display ?
                       ( <button className='authBtn2' onClick={this.changDisplay}>Login</button>)
                       :
                        (<button className='authBtn2' onClick={this.changDisplay}>Sign Up</button>)

                    }
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

export default connect(mapStateToProps, {updateUser})(Auth)