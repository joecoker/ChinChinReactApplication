import React, { Component } from 'react';

import CocktailList from './CocktailList';

let recipes = require('./recipes.json');

class CocktailsAll extends Component {

  static go() {
    return (
      <div id='cocktails-all'>
        <CocktailList recipes={recipes}/>
      </div>
    )
  }
}

export default CocktailsAll;
