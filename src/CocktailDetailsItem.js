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
      <div className="indi-cocktail card">
        <div id='cocktail-image'><img className="full-size" src={"https://raw.githubusercontent.com/joecoker/ChinChinReactApplication/master/images/full-size/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} /></div>
        <div id='cocktail-details'>
          <div className='top-heading'>{cocktail.name}</div><br/>
          <div className='heading'><span className='item-title'>Glass:</span><span> {cocktail.glass}</span></div>
          <div className='heading'><span className='item-title'>Category:</span><span> {cocktail.category}</span></div><br/>
          <div className='heading'><span className='item-title'>Ingredients:</span></div>
          <ul>{cocktail.ingredients.map(function(ingredient) {
            return <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}</li>
          })}
          {this.listGarnishes()}
          </ul>
          <br/>
          <div className='heading'><span className='item-title'>Method:</span></div>
          <div className='method'>{cocktail.preparation}</div>
          </div>
      </div>

    )
  }
}

export default CocktailDetailsItem;
