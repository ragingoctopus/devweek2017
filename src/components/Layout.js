import React, { Component } from 'react';
import '../App.css';
import Time from './Time';

class App extends Component {
  constructor(){
    super()
    this.state = {
      to: {
        hour: '',
        minute: '',
        day: '',
        type: 'to'
      },
      from: {
        hour: '',
        minute: '',
        day: '',
        type: 'from'
      }
    }
  }
  handleMenuSelect(val, type, when) {
    const { to, from } = this.state
    if(when === 'to') {
      console.log('hello')
      var newObj = Object.assign({}, to)
      newObj[type.toLowerCase()] = val
      this.setState({ to: newObj })
    } else {
      var newObj = Object.assign({}, from)
      newObj[type.toLowerCase()] = val
      this.setState({ from: newObj })
    }
  }
  render() {
    return (
      <div className="layout">
        <div className="dummy">
          <h1>FROM</h1>
          <div>
            <h2>Date</h2>
            <input type="text"/>
          </div>
          <div>
            <h2>Time</h2>
            <input type="text"/>
          </div>
        </div>
        <div className="dummy">
          <h1>To</h1>
            <div>
              <h2>Date</h2>
              <input type="text"/>
            </div>
            <div>
              <h2>Time</h2>
              <input type="text"/>
            </div>
        </div>
        <div className="dummy">
          <input type="text"/>
        </div>
        <button className="submit_button">SUBMIT MEMO</button>
        <p className="App-intro">
          To get started
        </p>
        <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
        <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
      </div>
    );
  }
}

export default App;
