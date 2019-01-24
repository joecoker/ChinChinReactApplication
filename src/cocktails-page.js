import React, { Component } from 'react';

import Banner from './banner';
import CocktailList from './cocktail-list';

let recipes = require('./recipes.json');

class CocktailsAll extends Component {

  static go() {
    return (
      <div id='cocktails-all'>
        <Banner />
        <CocktailList recipes={recipes}/>
      </div>
    )
  }
}

export default CocktailsAll;
