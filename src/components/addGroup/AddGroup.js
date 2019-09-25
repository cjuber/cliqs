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
        const {REACT_APP_PORT} = process.env
        axios.post(`${REACT_APP_PORT}/api/add_group`, body)
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
            <div className='addGroup'>
            <div className='container'>
                <div className='dash'>
            <NavOne/>
            <div className='navCtnr2'>
            <div className='navMid'>
            <Link className='link' to='/post'><h1>+ Post</h1></Link>
                </div>
                </div>
            <NavTwo/> 
            </div>
            <div className = 'newGroup'>
                <div className='nGroupTop'>
                    <div className='addGImg'>
                   <img src={this.state.img} alt= ''></img>
                   </div>
                  
                   <h1>{this.state.groupName}</h1>
               </div>
               <div className='nGFlex'>
               
               <input className='nGCheck' type='checkbox' name='isPrivate' onChange={this.handleCheck}></input><p>Private</p>
               <input className='nGCheck' type='checkbox' name='searchable' onChange={this.handleCheck}></input><p>Searchable</p>
               </div>
               <div className='nGFlexMid'>
               <input className='nGInput' type='text' name='img' placeholder='Image URL' onChange={this.handleChange}></input>
                <input className='nGInput'  placeholder='Group Title' name='groupName' onChange={this.handleChange}></input>
                <input  className='nGContent' placeholder='Description' name='description' onChange={this.handleChange}></input>
                
               </div>
               <div>
                   
               <button className='nGBtn' onClick={this.addGroup}>Create Group</button>
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