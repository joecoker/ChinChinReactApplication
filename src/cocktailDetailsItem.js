import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailDetailsItem extends Component {

  render() {
    const cocktail = this.props.cocktail
    let garnish_elem;
    let garnish_list = '';

    cocktail.garnish.map(function(item) {
      garnish_list += item + ' and ';
    })

    if (cocktail.garnish.length !== 0) {
      garnish_elem = <li>Garnish with: {garnish_list.slice(0, garnish_list.length - 5)}</li>
    }

    return (
      <div class="indi-cocktail">
        <div><img class="thumbnail" src={"https://s3.eu-west-2.amazonaws.com/chinchinreact/full-size/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} /></div>
        <div class='name'>{cocktail.name}</div>
        <div>Glass: {cocktail.glass}</div>
        <div>Category: {cocktail.category}</div>
        <ul>{cocktail.ingredients.map(function(ingredient) {
          return <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}</li>
        })}
        {garnish_elem}
        </ul>

        <div>{cocktail.preparation}</div>
      </div>

    )
  }
}

export default CocktailDetailsItem;
