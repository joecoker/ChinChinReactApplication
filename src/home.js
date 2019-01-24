import React, { Component } from 'react';

import Banner from './banner';
import CocktailList from './cocktail-list';

let recipes = require('./recipes.json');

class Home extends Component {

  static go() {
    return (
      <div id='home'>
        <Banner />
        <CocktailList recipes={recipes}/>
      </div>
    )
  }
}

export default Home;
