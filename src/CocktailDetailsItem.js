import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailDetailsItem extends Component {

  render() {
    const cocktail = this.props.cocktail
    console.log(cocktail)
    let garnish_elem;
    let garnish_list = '';

    // eslint-disable-next-line
    cocktail.garnish.map(function(item) {
      garnish_list += item + ' and ';
    })

    if (cocktail.garnish.length !== 0) {
      garnish_elem = <li>Garnish with: {garnish_list.slice(0, garnish_list.length - 5)}</li>
    }

    return (
      <div class="indi-cocktail">
        <div id='picture-padding'><img class="full-size" src={"https://s3.eu-west-2.amazonaws.com/chinchinreact/full-size/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} /></div>
        <div id='cocktail-details'>
          <div class='top-heading'>{cocktail.name}</div><br/>
          <div class='heading'>Glass:<span> {cocktail.glass}</span></div>
          <div class='heading'>Category:<span> {cocktail.category}</span></div><br/>
          <div class='heading'>Ingredients:</div>
          <ul>{cocktail.ingredients.map(function(ingredient) {
            return <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}</li>
          })}
          {garnish_elem}
          </ul>
          <br/>
          <div class='heading'>Method:</div>
          <div>{cocktail.preparation}</div>
          </div>
      </div>

    )
  }
}

export default CocktailDetailsItem;
