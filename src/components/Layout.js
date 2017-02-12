import React, { Component } from 'react';
import '../App.css';
import Time from './Time';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

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
      var newObj = Object.assign({}, to)
      newObj[type.toLowerCase()] = val
      this.setState({ to: newObj })
    } else {
      var newObj = Object.assign({}, from)
      newObj[type.toLowerCase()] = val
      this.setState({ from: newObj })
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('wired!');
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
            <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.to}/>
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
               <Time handleMenuSelect={this.handleMenuSelect.bind(this)} data={this.state.from}/>
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
        <p className="App-intro">
          To get started
        </p>
       
      </div>
    );
  }
}

export default App;
