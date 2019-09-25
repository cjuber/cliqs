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
        const {REACT_APP_PORT} = process.env
        const id = this.props.id.id
            
        axios.get(`${REACT_APP_PORT}/api/groups/${id}`)
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
                
              <div className='navCtnr3'>  
            
               { this.props.location.pathname === '/' ?
                    (null)
                    :
                    (<div className='navTwo'>
                        <div className='dsktpNav'> 
                        <Link className='link' to={pathname} ><h2>Groups</h2></Link>
                        {mappedGroups}
                        </div>
                        <div className='mblNav'>
                        <Link className='link' to={pathname} ><h1>Groups</h1></Link>
                        </div>
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