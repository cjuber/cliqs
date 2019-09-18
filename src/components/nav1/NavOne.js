import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import { connect } from 'react-redux';


class NavOne extends Component {
    render() {
        const id = this.props.id.id
        const pathname = `/myposts/${id}`
        
        return (
            <div className='navCtnr'>
            
                { this.props.location.pathname === '/' ?
                    (null)
                    :

                    (<div className='navOne'>
                    
                       <Link to='/dashboard'><h1>Home</h1></Link> 
                       <Link to={pathname}> <h1>My Posts</h1></Link>
                    
                    </div>)
                }
                
                
                
                
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps)(NavOne))