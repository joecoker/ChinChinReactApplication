import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './home'
import Cocktail from './cocktail'
import CocktailsAll from './cocktails-page'

class App extends Component {

  render() {
    return (
      <Router>
        <div id='routes'>
          <Route exact path="/" component={Home.go} />
          <Route exact path="/cocktails" component={CocktailsAll.go} />
          <Route path="/cocktail/:name" component={Cocktail.go} />
        </div>
      </Router>
    );
  }
}

export default App;
