import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topics from './Component/Index/TopicSection';
import NavBar from './Component/Index/NavBar'
import Footer from './Component/Index/Footer'

// const myName = `Pz`
// const message = `My name is ${myName}, I'm developer.`

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Topics/>
      </div>
    )
  }
}

export default App;
