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
        day: '',
        type: 'to'
      },
      from: {
        date: '',
        hour: '',
        min: '',
        day: '',
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
        <div className="dummy">
          <h2>From</h2>
          <div>
            <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
            <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
          </div>
          <input type="text"/>
        </div>
        <div className="dummy">
          <h1>To</h1>
            <div>
              <Calendar handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
              <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
            </div>   
            <div>
              <input type="text"/>
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
        <button className="submit_button" onClick={this.handleSubmit}>SUBMIT MEMO</button>
      </div>
    );
  }
}

export default App;
