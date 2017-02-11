import React, { Component } from 'react';
import '../App.css';
import logo from './logo.svg';
import Time from './Time';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hour: '',
      minute: '',
      day: ''
    }
  }
  render() {
    const { hour, minute, day } = this.state;
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
        <Time minute={minute} day={day} hour={hour}/>
      </div>
    );
  }
}

export default App;
