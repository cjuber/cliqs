import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class GroupList extends Component {
    
    render() {
        
        const {img, group_name, description, id} = this.props.list
        const pathname= `group/${id}`
        return (
            <div>
                <Link to={pathname}><img src={img} alt={group_name}width="50"></img>
                <h1>{group_name}</h1>
                <p>{description}</p></Link>
            </div>
        )
    }
}
