import React, { Component } from 'react';

class CocktailListItem extends Component {

  render() {
    return (
      <div className="cocktail-item">
        <div><img src="http://iba-world.com/wp-content/uploads/2015/08/negroni.jpg" /></div>
        <div>{this.props.cocktail.name}</div>
        <div>{this.props.cocktail.ingredients[0].ingredient}</div>
      </div>
    )
  }

}

export default CocktailListItem;
