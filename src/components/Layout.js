import React, { Component } from 'react';
import '../App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
