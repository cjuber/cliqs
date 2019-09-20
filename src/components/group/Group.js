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
            list:[]
        }
    }
    componentDidMount(){
        this.getGroup()
        this.checkMember()
        this.getPosts()
    }
    getGroup = () =>{
        const id= this.props.match.params.id
        
         axios.get(`http://localhost:8080/api/group/${id}`)
         .then(response => {
             
             this.props.updateGroup(response.data[0])
             
         })
     }
     
        getPosts = ()=>{
            const{id}=this.props.match.params
            axios.get(`http://localhost:8080/api/group/posts/${id}`)
            .then(response => {
              
                this.setState({
                    list:response.data
                })
            })
        } 
     

    checkMember = () => {
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        
        axios.get(`http://localhost:8080/api/group/${group_id}/member/${id}`)
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
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        axios.delete(`http://localhost:8080/api/group/${group_id}/member/${id}`)
        .then(response => {
            this.setState({
                member: false
            })
        })
    }

    join = () => {
        const id= this.props.id.id
        const group_id = this.props.match.params.id
        axios.put(`http://localhost:8080/api/group/${group_id}/member/${id}`)
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
            <img src={this.props.img.img} alt={this.props.group_name.group_name}  height="50"></img>
            <h1>{this.props.group_name.group_name}</h1>
            <p>{this.props.description.description}</p>
           <Link to={pathname}><h2>+ Post</h2></Link> 
            {
                this.state.member ?
                <h2 onClick={this.leave}>Leave</h2>
                :
                <h2 onClick={this.join}>Join</h2>
            }
           <div>
            <Chat id={id}/>
           </div>
                {mappedPosts}
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {updateGroup})(Group)