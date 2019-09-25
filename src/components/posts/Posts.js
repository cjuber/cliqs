import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Posts extends Component {
    
    render() {
        const{title,content,post_img,group_name,first_name,last_name,id}=this.props.list
        const pathname = `/post/${id}`
        return (
            <Link to={pathname} className='link'><div className='postsCtnr'>
              
                <div className='cardTitle'>
                    
                <h1>{first_name} {last_name} </h1><h3>at</h3><h2>{group_name}</h2>
                </div>
                <div className='cardTitle2'>
                <h3>shared a new</h3><h2>post</h2> <h3>| Time</h3>
                </div>
                <div className='pCard'>
                    <h4>{title}</h4>
                <p>{content}
                </p> 
                </div>
                <img src={post_img} alt=''></img>
                
                
             
            </div></Link>
            
        )
    }
}
