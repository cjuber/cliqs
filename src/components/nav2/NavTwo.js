import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import NavGroups from '../navGroups/NavGroups'
import axios from 'axios'



class NavTwo extends Component {
    constructor(){
        super()
        this.state={
            gList: []
            
        }
    }

    componentDidMount(){
        
        
        this.getGroups()
       
    }

    getGroups = () => {
        const id = this.props.id.id
            
        axios.get(`http://localhost:8080/api/groups/${id}`)
        .then(response => {
            this.setState({
                gList: response.data
            })
        })
    }
    
    render() {
        const id = this.props.id.id
        const pathname = `/find_group/${id}`
        const mappedGroups = this.state.gList.map((list, index) => {
            return(
                <NavGroups key={index} list={list}/>
            )
        })
        return (
                
              <div className='noDisplay'>  
            
               { this.props.location.pathname === '/' ?
                    (null)
                    :
                    (<div className='navTwo'>
                    
                        <Link to={pathname}><h1>Groups</h1></Link>
                        {mappedGroups}
               
                    </div>)
                } 
                
                
                    
           
               
            </div>
            
        )
        
    }
}
function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps)(NavTwo))