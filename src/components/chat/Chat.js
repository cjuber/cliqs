import React, { Component } from 'react'
// import NavOne from '../nav1/NavOne'
// import NavTwo from '../nav2/NavTwo'
// import {Link} from 'react-router-dom'
import io from 'socket.io-client'

export default class Chat extends Component {
    constructor() {
        super();
        this.state = {
          input: '',
          messages: [],
          room: '',
          joined: false
        }    
        
      }
      componentDidMount() {
        this.setState({
            room:this.props.id
        })
        this.socket = io();
        this.socket.on('room joined', data => {
          this.joinSuccess(data)
        })
        this.socket.on('message dispatched', data => {
          console.log(data)
          this.updateMessages(data);
        })
      }
      componentWillUnmount() {
        this.socket.disconnect();
      }
      sendMessage = () => {
        this.socket.emit('message sent', {
          message: this.state.input,
          room: this.state.room
        })
        this.setState({
          input: ''
        })
      }
      updateMessages = (messages) => {
        this.setState({
          messages
        })
      }
      joinRoom = () => {
        

        
        
          this.socket.emit('join', {
            room: this.state.room
          })
        
      }
      joinSuccess = (messages) => {
        this.setState({
          joined: true,
          messages
        })
      }
    render() {
        console.log(this.state.room)
        return (
            <div>
                {/* <div className='container'>
            <div className='dash'>
            <NavOne/>
            <div className='navCtnr2'>
            <div className='navMid'>
                <Link to='/group/:id/post'><h1>+ Post</h1></Link>
                </div>
                </div>
            <NavTwo/> 
            </div>
            </div> */}
            <div className="chatApp">
        {this.state.joined ? <h1>My Room: {this.state.room}</h1> : null}
        <div>
          {this.state.messages.map(messageObj => <h2 key={messageObj.id}>{messageObj.message}</h2>)}
        </div>
        {
          this.state.joined
            ?
            <div>
              <input value={this.state.input} onChange={e => {
                this.setState({
                  input: e.target.value
                })
              }} />
              <button onClick={this.sendMessage}>Send</button>
            </div>
            :
            <div>
              
              <button onClick={this.joinRoom}>Chat</button>
            </div>
        }
      </div>
            </div>
        )
    }
}
