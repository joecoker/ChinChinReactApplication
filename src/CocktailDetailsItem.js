import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailDetailsItem extends Component {
  constructor() {
    super();
    this.listGarnishes = this.listGarnishes.bind(this);
  }

  listGarnishes() {
    if (this.props.cocktail.garnish.length === 0) {
      return;
    } else {
      let garnishString = '';
      this.props.cocktail.garnish.map(function(item, index, array) {
        if (index === (array.length - 1) ) {
          return garnishString += item
        } else {
          return garnishString += item + ' and ';
        }
      })

      let garnishElement = <li>Garnish with: {garnishString}</li>
      return garnishElement;
    }
  };

  render() {
    const cocktail = this.props.cocktail

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
          {this.listGarnishes()}
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
