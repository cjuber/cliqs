import React, { Component } from 'react'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateGroup} from '../../redux/reducer'

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
    }
    getGroup = () =>{
        const id= this.props.match.params.id
        
         axios.get(`http://localhost:8080/api/group/${id}`)
         .then(response => {
             
             this.props.updateGroup(response.data[0])
             
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
           
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {updateGroup})(Group)