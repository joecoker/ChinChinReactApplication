import React, { Component } from 'react';

import CocktailList from './CocktailList';

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
