import React, { Component } from 'react'


export default class PostGroups extends Component {
    render() {
        const {group_name,id} = this.props.list
        
        return (
            <option  value={id}>
                
                {group_name}
            </option>
        )
    }
}
