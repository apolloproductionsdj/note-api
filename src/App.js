import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    });
  }

  getNotes = () => {
    axios.get('https://firehose-note-api.herokuapp.com/notes')
    .then((res) => console.lgo(res.data) )
    .catch((err) => console.log(err.response.data) );
  }

  render() {
    const { showNote } = this.state;

    return (
      <div className="App">
          <Nav toggleNote={this.toggleNote} showNote={showNote} />
          { showNote ? <Note /> : <List getNotes={this.getNotes} /> }
      </div>
    );
  }
}

export default App;