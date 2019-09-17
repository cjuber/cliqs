import React, { Component } from 'react'
import Posts from '../posts/Posts'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import axios from 'axios';
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getPosts()
    }

    getPosts = ()=>{
        const{id}=this.props.id
        axios.get(`http://localhost:8080/api/posts/${id}`)
        .then(response => {
            console.log(response.data)
            this.setState({
                list:response.data
            })
        })
    }
    render() {
       console.log(this.state.list)
        const mappedPosts = this.state.list.map((list,index) => {
            return(
            <Posts key={index} list={list}/>
            )
        })
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
            {mappedPosts}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Dashboard)