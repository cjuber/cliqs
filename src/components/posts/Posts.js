import React, { Component } from 'react'

export default class Posts extends Component {
    render() {
        const{title,content,post_img,group_name,first_name,last_name}=this.props.list
        return (
            <div className='postsCtnr'>
              
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
                <img src={post_img} alt='img or something goes here' width="150"></img>
                <div>
                    {/* bottom bar goes here */}
                </div>
                
             
            </div>
            
        )
    }
}
