import React, { Component } from 'react'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import axios from 'axios'


class FindGroup extends Component {
    constructor(){
        super()
        this.state={

            list:[]
        }
        
    }

    componentDidMount(){
        const path = this.props.location.pathname
      if(path === '/find_group'){
        this.getGroups()
      } else {this.getMyGroups()}
        console.log(this.props)
        
    }

    getGroups = () => {       
        axios.get(`http://localhost:8080/api/groups`)
        .then(response => {
            this.setState({
                list: response.data
            })
        })
    }

    getMyGroups = () => {
        const id = this.props.id.id
            
        axios.get(`http://localhost:8080/api/groups/${id}`)
        .then(response => {
            this.setState({
                list: response.data
            })
        })
    }
    
    render() {
        const mappedGroups = this.state.list.map((list, index) => {
            return(
                <GroupList key={index} list={list} />
            )
        })
        return (
            <div>
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
            <div>
                {mappedGroups} 
            </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(FindGroup)
