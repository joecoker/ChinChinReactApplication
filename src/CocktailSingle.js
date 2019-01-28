import React, { Component } from 'react';

import CocktailDetails from './CocktailDetails';

class CocktailSingle extends Component {

  static go({match}) {
    return (
      <div>
      <CocktailDetails name={match.params.name} />
      </div>
    )
  }
}

export default CocktailSingle;
