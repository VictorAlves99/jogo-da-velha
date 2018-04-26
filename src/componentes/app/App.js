import React, { Component } from 'react';
import './App.css';
import Header from "../header/header.js"
import Linhas from "../linhas/linhas.js"
import Simbolos from "../simbologia/simbologia.js"
    
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Simbolos/>
        <Linhas/>
      </div>
    );
  }
}

export default App;
