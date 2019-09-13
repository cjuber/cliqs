import React, { Component } from 'react'

export default class NewPost extends Component {
    render() {
        return (
            <div className = 'newPosts'>
                
               <div className='nPostTop'>
                   <img alt = 'Profile art'></img>
                   <h1>Group Name</h1>
               </div>
               <div className='nPFlex'>
               <div>
               <input className='selectGroup' placeholder='select group'></input>
               </div>
               <div className='nPFlexMid'>
                <input placeholder='Title'></input>
                <input placeholder='What would you like to say'></input>
                <button>Post</button>
               </div>
               <div>
                   <span><p>+ Image</p></span>
               </div>
               </div>
            </div>
        )
    }
}
