import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Skill from './Components/Skill/Skill';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Skill skillName="Travel" skillLevel="5" />
      </div>
    );
  }
}

export default App;
