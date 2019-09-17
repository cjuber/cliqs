import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavGroups extends Component {
    render() {
        const {img, group_name, id} = this.props.list
        const pathname= `group/${id}`
        return (
            <div>
                <Link to={pathname}><img src={img} alt='group art' width= "50"></img>
                <h1> {group_name}</h1></Link>
            </div>
        )
    }
}
