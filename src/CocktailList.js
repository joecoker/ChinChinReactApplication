import React, { Component } from 'react';

import CocktailListItem from './CocktailListItem';
import FilterMenu from './FilterMenu';

class CocktailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: []
    };
  }

  componentDidMount() {
    fetch('https://chinchinapi.herokuapp.com/cocktails/all')
      .then(res => res.json())
      .then(result => {
          this.setState({
            cocktails: result
          });
        }
      )
  }

  render() {
    const { cocktails } = this.state;
    return (
      <div class="flex-container">
      <p>{this.props.data}</p>
        {cocktails.map(cocktail => {
          return <CocktailListItem cocktail={cocktail} />
        })}
      </div>
    );
  }
}

export default CocktailList;
