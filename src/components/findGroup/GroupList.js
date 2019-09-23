import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class GroupList extends Component {
    
    render() {
        
        const {img, group_name, description, id} = this.props.list
        const pathname= `/group/${id}`
        return (
            <div className='listGroups'>
               
                <Link className='link'
                to={pathname}>
                    <div className='listGroups2'>
                <div className='fGroupImg'>
                    <img  src={img} alt=''width="50"></img>
                </div>
                <div className='nameDesc'>
                <h1>{group_name}</h1>
                <p>{description}</p>
                </div>
                </div>
                </Link>
            </div>  
        )
    }
}
