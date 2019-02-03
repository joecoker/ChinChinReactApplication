import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class CocktailListItem extends Component {

  render() {
    const address = '/cocktail/' + this.props.cocktail.name
    return (
      <div className='card-padding'>
      <Link to={address}>
      <div className='cocktail-item card'>
          <div className="image-container">
            <img className='thumbnail' src={"https://raw.githubusercontent.com/joecoker/ChinChinReactApplication/master/images/thumbnails/" + this.props.cocktail.pictureUrl } alt={this.props.cocktail.name} />
          </div>
            <div className='name'>{this.props.cocktail.name}</div>
            { this.props.cocktail.missingCount !== undefined &&
              ( this.props.cocktail.missingCount === 0
                  ? <div className='missing'>You have enough ingredients to make this</div>
                  : <div className='missing'>You need {this.props.cocktail.missingCount} more {this.props.cocktail.missingCount === 1 ? 'ingredient' : 'ingredients'} to make this</div>
              )
            }
            </div>
      </Link>
      </div>
    )
  }
}

export default CocktailListItem;
