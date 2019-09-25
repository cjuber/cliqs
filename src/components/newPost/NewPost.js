import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavOne from '../nav1/NavOne'
import NavTwo from '../nav2/NavTwo'
import{connect} from 'react-redux'
import PostGroups from '../postGroups/PostGroups'
import axios from 'axios'
import {updateGroup} from '../../redux/reducer'

class NewPost extends Component {
    constructor(){
        super()
        this.state={
            groupID:'',
            group_name:'',
            title: '',
            postText:'',
            img: '',
            postImg:'',
            list:[]
        }
    }

    componentDidMount(){
        
        
        this.getGroups()
       
    }

    getGroups = () => {
        const {REACT_APP_PORT} = process.env
        const id = this.props.id.id
            
        axios.get(`${REACT_APP_PORT}/api/groups/${id}`)
        .then(response => {
            this.setState({
                list: response.data
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name ]: e.target.value
        })
    }
    choseGroup = (e) => {
        const {REACT_APP_PORT} = process.env
        const id= e.target.value
        
        axios.get(`${REACT_APP_PORT}/api/group/${id}`)
        .then(response => {
            
            this.props.updateGroup(response.data[0])
            this.setState({
                groupID:this.props.group_id.group_id,
                group_name: this.props.group_name.group_name,
                img: this.props.img.img
            })
            
        })
    }
    post = () => {
        const{title,postText,postImg}=this.state
        const {id} = this.props.id
        const group_id=this.props.group_id.id
        const body= {
            title,
            postText,
            postImg
        }
        const {REACT_APP_PORT} = process.env
        axios.post(`${REACT_APP_PORT}/api/group/${group_id}/post/${id}`, body)
        .then(response => {
            this.props.history.push('/dashboard')
        })
    }
    render() {
        console.log(this.props)
        
        const mappedGroups = this.state.list.map((list, index) => {
            return(
                <PostGroups key={index} list={list}/>
            )
        })
        return (
            <div className='nPostCntnr'>
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
            <div className = 'newPosts'>
                <div className='newPosts2'>
               <div className='nPostTop'>
                   <div className='nPostImg'><img src={this.state.img} alt = '' width="50"></img></div>
                   <br/>
                   <h1>{this.state.group_name}</h1>
                   <br/>
               </div>
              
               <div className='nPFlex'>
              
               
               <div >
                   <form>
                       
                       <select className='selectGroup' value='0' onChange={this.choseGroup}>
                        <option value='0'>Select Group</option>
                        {mappedGroups}

                       </select>
                   </form>
                   
              
               </div>
               <div className='nPFlexMid'>
                <input className='nPostInput' placeholder='Title'name='title' onChange={this.handleChange}></input>
                <input className='nPostContent' placeholder='What would you like to say' name='postText' onChange={this.handleChange}></input>
                <input className='nPostInput' placeholder='Image' name='postImg' onChange={this.handleChange}></input>
               </div>
               <div>
               <button className='postBtn' onClick={this.post}>Post</button>
               </div>
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

export default connect(mapStateToProps,{updateGroup})(NewPost)