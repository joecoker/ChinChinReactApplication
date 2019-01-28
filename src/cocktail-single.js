import React, { Component } from 'react';

import CocktailDetails from './cocktail-details';

class Cocktail extends Component {

  static go({match}) {
    return (
      <div>
      <CocktailDetails name={match.params.name} />
      </div>
    )
  }
}

export default Cocktail;
