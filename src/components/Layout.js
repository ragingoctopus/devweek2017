import React, { Component } from 'react';
import '../App.css';
import Time from './Time';
import Calendar from './Calendar';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
      }
    }
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
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(val + " " + type + " " + when)
    console.log(this.state.to);
    console.log(this.state.from);
  }

  handleSubmit() {
    console.log('wired!');
  }

  render() {
    return (
      <div className="layout">
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">From</h1>
            <div>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
            </div>
          </div>
        </div>
        <div className="card-panel panels">
          <div className="card-content">
            <h1 className="panel-title">To</h1>
            <div>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
            </div>  
          </div>                         
        </div>
        <div className="editor_container">
          <Editor
            // editorState={editorState}
            toolbarClassName="home-toolbar"
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            // onEditorStateChange={this.onEditorStateChange}
          />
        </div>
        <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>SUBMIT MEMO</button>
      </div>
    );
  }
}

export default App;
