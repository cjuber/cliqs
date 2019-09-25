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
          userName:'',
          joined: false
        }    
        
      }
      componentDidMount() {
        
        this.setState({
            room:this.props.id,
            
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
          room: this.state.room,
          userName:this.state.userName
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
        
        this.setState({
          userName: this.props.userName
        })
        
        
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
        
        return (
            <div className='chatCtnr'>
             
            <div className="chatApp">
        {this.state.joined ? <h1>Chat for {this.props.group_name} </h1> : null}
        <div className='chatMess'>
          {this.state.messages.map(messageObj => 
          
          <h2 key={messageObj.id}>{messageObj.user_name}: {messageObj.message}</h2>)}
        </div>
        {
          this.state.joined
            ?
            <div>
              <input className='chatInput' value={this.state.input} onChange={e => {
                this.setState({
                  input: e.target.value
                })
              }} />
              <button  className='chatBtn' onClick={this.sendMessage}>Send</button>
            </div>
            :
            <div>
              
              <button className='chatBtn' onClick={this.joinRoom}>Chat</button>
            </div>
        }
      </div>
            </div>
        )
    }
}
