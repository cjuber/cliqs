import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import axios from 'axios'
import { connect } from 'react-redux'
import Posts from '../posts/Posts'

class Post extends Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getPost()
    }

    getPost = ()=>{
        const{REACT_APP_PORT}=process.env
        const{id}=this.props.match.params
        console.log(id)
        axios.get(`${REACT_APP_PORT}/api/post/${id}`)
        .then(response => {
            console.log(response.data)
            this.setState({
                list:response.data
            })
        })
    }
    deletePost = () => {
        const {REACT_APP_PORT} =process.env
        const{id}=this.props.match.params
        axios.delete(`${REACT_APP_PORT}/api/post/${id}`)
        .then(response => {
            this.props.history.push('/dashboard')
        })
    }
    render() {
        const mappedPosts = this.state.list.map((list,index) => {
            return(
            <Posts key={index} list={list}/>
            )
        })
        return (
            <div className='post'>
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
            <div className='post2'>
            <div className='post3'>
            <div>
            {mappedPosts}
            </div>
            <div>
            <button className='deletePost' onClick={this.deletePost}>Delete Post</button>
            </div>
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

export default connect(mapStateToProps)(Post)