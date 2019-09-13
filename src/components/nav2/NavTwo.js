import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';




class NavTwo extends Component {
    render() {
        return (
            
              <div className='noDisplay'>  
            
               { this.props.location.pathname === '/' ?
                    (null)
                    :
                    (<div className='navTwo'>
                    
                        <Link to='/find_group'><h1>Groups</h1></Link>
               
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