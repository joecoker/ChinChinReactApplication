import React, { Component } from 'react';

import Banner from './banner';
import CocktailList from './cocktail-list';

class CocktailsAll extends Component {

  static go() {
    return (
      <div id='cocktails-all'>
        <Banner />
        <CocktailList/>
      </div>
    )
  }
}

export default CocktailsAll;
