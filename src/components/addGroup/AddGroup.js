import React, { Component } from 'react'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import {Link} from 'react-router-dom'
import axios from 'axios';
import{connect} from 'react-redux'
 
class AddGroup extends Component {

    constructor(){
        super()
        this.state={
            img: '',
            groupName: '',
            isPrivate: false,
            searchable: false,
            description: ''
        }
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        })

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addGroup = () => {
        const {
            img,
            groupName,
            isPrivate,
            searchable,
            description
        
        } = this.state
        const id = this.props.id.id
        const body = {
            img,
            groupName,
            isPrivate,
            searchable,
            description,
            id
        }
        axios.post('http://localhost:8080/api/add_group', body)
        .then(response => {
            this.props.history.push('/dashboard')
        })
        this.setState({
            img: '',
            groupName: '',
            isPrivate: false,
            searchable: false,
            description: ''
        })
    }
    render() {
        
        return (
            <div className='container'>
                <div className='dash'>
            <NavOne/>
            <div className='navCtnr2'>
            <div className='navMid'>
            <Link to='/post'><h1>+ Post</h1></Link>
                </div>
                </div>
            <NavTwo/> 
            </div>
            <div className = 'newPosts'>
                <div className='nPostTop'>
                   <img alt = 'Profile art'></img>
                   <span><p>+ Image</p></span>
                   <h1>Group Name</h1>
               </div>
               <div className='nPFlex'>
               
               <input className='selectGroup' type='checkbox' name='isPrivate' onChange={this.handleCheck}></input><p>Private</p>
               <input className='selectGroup' type='checkbox' name='searchable' onChange={this.handleCheck}></input><p>Searchable</p>
               
               <div className='nPFlexMid'>
                <input placeholder='Group Title' name='groupName' onChange={this.handleChange}></input>
                <input placeholder='Description' name='description' onChange={this.handleChange}></input>
                <button onClick={this.addGroup}>Create Group</button>
               </div>
               <div>
                   
                   <span><p>+ Members</p></span>
               </div>
               </div>
               </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(AddGroup)