import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailListItem extends Component {

  render() {
    const address = '/cocktail/' + this.props.cocktail.name
    return (
      <div className='cocktail-item card'>
        <Link to={address}>
          <div class="image-container">
            <img class='thumbnail' src={"https://s3.eu-west-2.amazonaws.com/chinchinreact/thumbnails/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} />
          </div>
          <div class='name'>{this.props.cocktail.name}</div>
        </Link>
      </div>
    )
  }
}

export default CocktailListItem;
