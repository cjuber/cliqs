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
                    
                       <Link to='/dashboard' className='link' ><h1 className='dsktpNav'>Home</h1></Link> 
                       <Link to={pathname} className='link'> <h1 className='dsktpNav'>My Posts</h1></Link>
                        
                       <Link to='/dashboard' className='link'><h1 className='mblNav'>Home</h1></Link> 
                     
                      
                       <Link to={pathname} className='link'> <h1 className='mblNav'>My Posts</h1></Link>
                    
                        
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