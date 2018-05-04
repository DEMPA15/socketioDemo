import React, { Component } from 'react';
import './App.css';
import { sendMessage } from './sockets';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        msg: '',
        messages: [],
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

    handleSubmit(event){
      event.preventDefault();
      sendMessage(this.state.msg);
      this.setState({
        msg:'',
      })
    }
    
  render() {
    const messages = this.props.messages.map((msg, i)=>{
        return <p key ={i}>{msg}</p>
    })
    window.scrollTo(0,document.body.scrollHeight);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} style={{position:'fixed'}}>
          <input onChange={this.handleChange} name="msg" value={this.state.msg} type="text"/>
          <br/>
          <button>Send</button>
        </form>

        {messages}
      </div>
    );
  }
}

export default connect(state => state)(App);
