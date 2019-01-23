import React, { Component } from 'react';

import CocktailDetails from './cocktail-details';

class Cocktail extends Component {

  static go({match}) {
    return (
      <CocktailDetails name={match.params.name} />
    )
  }
}

export default Cocktail;
