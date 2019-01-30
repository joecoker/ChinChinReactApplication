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
      <div className="indi-cocktail card">
        <div id='cocktail-image'><img className="full-size" src={"https://s3.eu-west-2.amazonaws.com/chinchinreact/full-size/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} /></div>
        <div id='cocktail-details'>
          <div className='top-heading'>{cocktail.name}</div><br/>
          <div className='heading'><span className='item-title'>Glass:</span><span> {cocktail.glass}</span></div>
          <div className='heading'><span className='item-title'>Category:</span><span> {cocktail.category}</span></div><br/>
          <div className='heading'><span className='item-title'>Ingredients:</span></div>
          <ul>{cocktail.ingredients.map(function(ingredient) {
            return <li>{ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}</li>
          })}
          {garnish_elem}
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
