import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topic from './Component/Index/TopicSection';
import MenuBars from './Component/Index/MenuBar'

// const myName = `Pz`
// const message = `My name is ${myName}, I'm developer.`

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBars/>
        <Topic/>
      </div>
    )
  }
}

export default App;
