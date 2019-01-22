import React, { Component } from 'react';
import './css/App.css';
import CocktailList from './CocktailList';
import CocktailDetails from './CocktailDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
let recipes = require('./recipes.json');

class App extends Component {
  home() {
    return (
      <div className="App">
      <CocktailList recipes={recipes}/>
      </div>
    )
  }

  cocktail({match}) {
    return (
      <div className="App">
        <CocktailDetails name={match.params.name} />
      </div>
    )
  }

  render() {
    return (
      <Router>
       <div>
         <Route exact path="/" component={this.home} />
         <Route path="/cocktail/:name" component={this.cocktail} />
       </div>
      </Router>
    );
  }
}

export default App;
