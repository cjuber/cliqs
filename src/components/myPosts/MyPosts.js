import React, { Component } from 'react'
import Posts from '../posts/Posts'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import axios from 'axios';
import { connect } from 'react-redux'

class MyPosts extends Component {
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

        const{REACT_APP_PORT} =process.env
        const{id}=this.props.id
        axios.get(`${REACT_APP_PORT}/myposts/${id}`)
        .then(response => {
            console.log(response.data)
            this.setState({
                list:response.data
            })
        })
    }
    render() {
       
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
                <Link className='link' to='/post'><h1>+ Post</h1></Link>
                </div>
                </div>
            <NavTwo/> 
            </div>
            <div className='postCtnr'>
            {mappedPosts}
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(MyPosts)