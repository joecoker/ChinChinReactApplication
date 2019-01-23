import React, { Component } from 'react';

import CocktailList from './cocktail-list';

let recipes = require('./recipes.json');

class Home extends Component {

  static go() {
    return (
      <CocktailList recipes={recipes}/>
    )
  }
}

export default Home;
