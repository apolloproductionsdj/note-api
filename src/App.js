import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';

class App extends Component {
render() {
  return (
    <div className="App">
      <div>
        <Nav />
        <List />
      </div>
    </div>
  );
}
}

export default App;