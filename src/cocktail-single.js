import React, { Component } from 'react';

import Banner from './banner';
import CocktailDetails from './cocktail-details';

class Cocktail extends Component {

  static go({match}) {
    return (
      <div>
      <Banner />
      <CocktailDetails name={match.params.name} />
      </div>
    )
  }
}

export default Cocktail;
