import React, { Component } from 'react'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateGroup} from '../../redux/reducer'
import Posts from '../posts/Posts'
import Chat from '../chat/Chat'

class Group extends Component {
    constructor(){
        super()
        this.state={
            id:'',
            img: '',
            group_name: '',
            description: '',
            member: false,
            userName:'',
            list:[]
        }
    }
    componentDidMount(){
        this.getGroup()
        this.checkMember()
        this.getPosts()
        const name = this.props.first_name.first_name + ' ' + this.props.last_name.last_name
        this.setState({
            userName:name
        })
    }
    getGroup = () =>{
        const {REACT_APP_PORT}=process.env
        const id= this.props.match.params.id
        
         axios.get(`${REACT_APP_PORT}/api/group/${id}`)
         .then(response => {
             
             this.props.updateGroup(response.data[0])
             
         })
     }
     
        getPosts = ()=>{
            const {REACT_APP_PORT} = process.env
            const{id}=this.props.match.params
            axios.get(`${REACT_APP_PORT}/api/group/posts/${id}`)
            .then(response => {
              
                this.setState({
                    list:response.data
                })
            })
        } 
     

    checkMember = () => {
        const {REACT_APP_PORT} = process.env
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        
        axios.get(`${REACT_APP_PORT}/api/group/${group_id}/member/${id}`)
        .then(response =>{
            
            if(response.data.length >= 1){
                
                this.setState({
                    member: true
                })
            }else {
                
                this.setState({
                    member: false
                })
            }
        })
        
    }
    leave = () => {
        const {REACT_APP_PORT} = process.env
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        axios.delete(`${REACT_APP_PORT}/api/group/${group_id}/member/${id}`)
        .then(response => {
            this.setState({
                member: false
            })
        })
    }

    join = () => {
        const {REACT_APP_PORT} = process.env
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        axios.put(`${REACT_APP_PORT}/api/group/${group_id}/member/${id}`)
        .then(response => {
            this.setState({
                member: true
            })
        })
    }
    
    render() {
        
        const id= this.props.match.params.id
        const pathname = `/post/${id}`
        const mappedPosts = this.state.list.map((list,index) => {
            return(
            <Posts key={index} list={list}/>
            )
        })
        return (
            <div className='group'>
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
            <div className='groupPage'>
                <div className='groupInfo'>
                <div className='groupInfoTop'>
                
                <div className='groupImage'>
            <img src={this.props.img.img} alt=''  height="50"></img>
            </div>
            <div className='groupName'>
            <h1>{this.props.group_name.group_name}</h1>
            </div>
            <div className='groupDesc'>
            <p>{this.props.description.description}</p>
            </div>
            </div>
            <div className='groupInfoLinks'>
           <Link className='link' to={pathname}><h2>+ Post</h2></Link> 
            {
                this.state.member ?
                <h2 onClick={this.leave}>Leave</h2>
                :
                <h2 onClick={this.join}>Join</h2>
            }
            </div>
           
           </div>
           <div className='chat'>
            <Chat id={id} group_name={this.props.group_name.group_name} userName={this.state.userName}/>
           </div>
           <div className='groupPostsC'>
                {mappedPosts}
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

export default connect(mapStateToProps, {updateGroup})(Group)