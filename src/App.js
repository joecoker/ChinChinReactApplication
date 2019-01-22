import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailList from './CocktailList';
let recipes = require('./recipes.json');

class App extends Component {
  render() {
    return (
      <div className="App">
      <CocktailList recipes={recipes}/>
      </div>
    );
  }
}

export default App;
