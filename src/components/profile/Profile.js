import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import { connect } from 'react-redux'
import axios from 'axios'

class Profile extends Component {
constructor(){
    super()
    this.state={
        display: false,
        first_name: '',
        last_name: '',
        email: '',
        city:'',
        state: '',
        country: '',
        about: ''
    }
}
componentDidMount(){
    this.setState({
        first_name:this.props.id.first_name,
        last_name:this.props.id.last_name,
        email:this.props.id.email,
        city:this.props.id.city,
        state: this.props.id.state,
        country: this.props.id.country,
        about:this.props.id.about,
        user_img:this.props.id.user_img
    })
}
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

edit = () => {
    this.setState({
        display:true
    })
}
submit = () => {
    const body = {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        email:this.state.email,
        city:this.state.city,
        state:this.state.state,
        country:this.state.country,
        about:this.state.about,
        user_img:this.state.user_img
    }
    const {id}=this.props.id
    axios.put(`http://localhost:8080/api/profile/${id}`, body)
    this.setState({
        display:false
    })
}

    render() {
        
        const {first_name, last_name,city,state,country,email,about} = this.props.id
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
            <div>
           {   !this.state.display ?
           <div>
               <div>
                <img src={this.state.user_img}></img>
                <h1>Name:</h1>
                <h1>{first_name} {last_name}</h1>
                <h1>Email:</h1>
                <h1>{email}</h1>
                <h1>about me:</h1>
                <p>{about}</p>
    
                </div>
                <div>
                    <h2>Location:</h2>
                    <h3>city:</h3>
                    <h3>{city}</h3>
                    <h3>state:</h3>
                    <h3>{state}</h3>
                    <h3>country:</h3>
                    <h3>{country}</h3>
                    <div><button onClick={this.edit}>Edit</button></div>
    
                </div>
                </div>
               :
               <div>
                   <div>
                <img src={this.state.user_img}></img>
                <input type='text' value={this.state.user_img} name='user_img' onChange={this.handleChange}></input>
                <h1>Name:</h1>
                <input type='text' value={this.state.first_name} name='first_name' onChange={this.handleChange}></input>
                <input type='text' value={this.state.last_name} name='last_name' onChange={this.handleChange}></input>
                <h1>Email:</h1>
                <input type='text' value={this.state.email} name='email' onChange={this.handleChange}></input>
                <h1>about me:</h1>
                <input type='text' value={this.state.about} name='about' onChange={this.handleChange}></input>
    
                </div>
                <div>
                    <h2>Location:</h2>
                    <h3>city:</h3>
                    <input type='text' value={this.state.city} name='city' onChange={this.handleChange}></input>
                    <h3>state:</h3>
                    <input type='text' value={this.state.state} name='state' onChange={this.handleChange}></input>
                    <h3>country:</h3>
                    <input type='text' value={this.state.country} name='country' onChange={this.handleChange}></input>
                    <div><button onClick={this.submit}>Submit</button></div>
    
                </div>
             </div>   
           }
            
            
            

            </div>
            </div>
            
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Profile)