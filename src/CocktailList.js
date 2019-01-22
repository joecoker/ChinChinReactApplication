import React, { Component } from 'react';


class CocktailList extends Component {




  render() {
    return (
      <div>
      {
        this.props.recipes.map(function(cocktail) {
        return <div>{cocktail.name}</div>
      })
      }
      </div>
    )
  }
}

export default CocktailList;
