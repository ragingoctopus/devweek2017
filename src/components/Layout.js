import React, { Component } from 'react';
import '../App.css';
import Time from './Time';
import Calendar from './Calendar';

class App extends Component {
  constructor(){
    super()
    this.state = {
      to: {
        date: '',
        hour: '',
        min: '',
        "am/pm": '',
        type: 'to'
      },
      from: {
        date: '',
        hour: '',
        min: '',
        "am/pm": '',
        type: 'from'
      },
      memo: ''
    }
  }

  colonChecker (i, string, currentString){
    if(string[i] === ':' && (string[i + 3] === ' ' || string[i + 3] === undefined) && (currentString.length === 2 || currentString.length === 1)) {
      return true
    }
    return false
  }  

  checkLastTwo(message, i){
    var numbers = '0123456789';
    if(numbers.indexOf(message[i + 1]) > -1 && numbers.indexOf(message[i + 2]) > -1){
      return true
    }
    return false
  }

  findTime(message){
    var numbers = '0123456789';
    var currentString = '';
    for(var i = 0; i < message.length; i++) {
      if(numbers.indexOf(message[i]) > -1) {
        currentString += message[i]
      }else if(this.colonChecker(i, message, currentString)){
          if(this.checkLastTwo(message, i)) {
            currentString += `:${message[i+1]}${message[i+2]}`
            this.parseTime(currentString);
            return currentString;
          }else {
            currentString = '';
          }
      } else {
        currentString = '';
      }
    }

  }

  parseTime(time) {
    var splitTime = time.split(':');
    var newObjFrom = Object.assign({}, this.state.from);
    var newObjTo = Object.assign({}, this.state.to);

    //detect From if its am or pm
    if (splitTime[0] >= 12 && splitTime[0] != 24) {
      //PM
      newObjFrom["am/pm"] = "PM";
      newObjFrom["hour"] = "" + (splitTime[0] == 12 ? splitTime[0] : (Number(splitTime[0]) - 12));
    } else {
      //AM
      newObjFrom["hour"] = "" + (splitTime[0] != 24 ? splitTime[0] : (Number(splitTime[0]) - 12));
      newObjFrom["am/pm"] = "AM";
    }

    newObjFrom["min"] = splitTime[1];

    newObjTo["min"] = newObjFrom["min"];

    newObjTo["hour"] = "" + (Number(newObjFrom["hour"]) + 1);


    if (newObjFrom["hour"] == 12) {
      newObjTo["hour"] = "1";
      newObjTo["am/pm"] = newObjFrom["am/pm"]
    } else {
      if (splitTime[0] > 12) {
        //newObjTo["hour"] = "" + (Number(newObjTo["hour"]) - 12);
        newObjTo["am/pm"] = "PM"
      } else {
        newObjTo["am/pm"] = "AM"
      }
    }

    this.setState({
      to: newObjTo,
      from: newObjFrom
    })

  }

  handleMenuSelect(val, type, when) {
    const { to, from } = this.state
    if(when === 'to') {
      var newObj = Object.assign({}, to)
      newObj[type.toLowerCase()] = val
      this.setState({ to: newObj })
    } else {
      var newObj = Object.assign({}, from)
      newObj[type.toLowerCase()] = val
      this.setState({ from: newObj })
    }
  }

  handleSubmit() {
    console.log(this.findTime(this.state.memo));
  }

  memoChange(e) {
    this.setState({
      memo: e.target.value
    })
  }

  render() {
    return (
      <div className="layout">
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">From</h1>
            <div className='calendar_underline'>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
            </div>
          </div>
        </div>
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">To</h1>
            <div className='calendar_underline'>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
            </div>  
          </div>                         
        </div>
        <div className="card-panel panels">
          <h2 className="panel-title">Memo</h2>
          <textarea className="memo" name="memo" cols="30" rows="30" value={this.state.memo} onChange={this.memoChange.bind(this)}></textarea>
        </div>
        <button className="waves-effect waves-light green btn" onClick={this.handleSubmit.bind(this)}>SUBMIT MEMO</button>
      </div>
    );
  }
}

export default App;
