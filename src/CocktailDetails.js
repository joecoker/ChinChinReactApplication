import React, { Component } from 'react';
import CocktailDetailsItem from './CocktailDetailsItem';

export default class CocktailDetails extends Component {

  state = {
    cocktail: []
  }

  componentDidMount() {
    fetch('https://chinchinapi.herokuapp.com/cocktails/name/'+ this.props.name)
      .then(res => res.json())
      .then(result => {
          this.setState({cocktail: [result]})
        }
      )
  }

  render() {
    const { cocktail } = this.state;
    return (
      <div>
        {
          cocktail.map(cocktail =>
            <CocktailDetailsItem cocktail={cocktail} />)
        }
      </div>
    )
  }
}
