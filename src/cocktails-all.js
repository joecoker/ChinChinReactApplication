import React, { Component } from 'react';

import CocktailList from './cocktail-list';

class CocktailsAll extends Component {

  static go() {
    return (
      <div id='cocktails-all'>
        <CocktailList/>
      </div>
    )
  }
}

export default CocktailsAll;
