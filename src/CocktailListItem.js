import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CocktailListItem extends Component {

  render() {
    const address = '/cocktail/' + this.props.cocktail.name
    return (
      <div className="cocktail-item">
        <div><Link to={address}><img src="http://iba-world.com/wp-content/uploads/2015/08/negroni.jpg" /></Link></div>
        <div>{this.props.cocktail.name}</div>
        <div>{this.props.cocktail.ingredients[0].ingredient}</div>
      </div>
    )
  }

}

export default CocktailListItem;
