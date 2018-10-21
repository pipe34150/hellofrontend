import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './Component/Index/TopicSection';
import MenuBars from './Component/Index/MenuBar'
import Footer from './Component/Index/Footer'

// const myName = `Pz`
// const message = `My name is ${myName}, I'm developer.`

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBars/>
        <Topics/>
        <Footer/>
      </div>
    )
  }
}

export default App;
