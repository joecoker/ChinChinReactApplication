import React, { Component } from 'react';
import CocktailListItem from './CocktailListItem';

class CocktailList extends Component {




  render() {
    return (
      <div className="flex-container">
      {
        this.props.recipes.map(function(cocktail) {
        return <CocktailListItem cocktail={cocktail} />
      })
      }
      </div>
    )
  }
}

export default CocktailList;
