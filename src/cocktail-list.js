import React, { Component } from 'react';

import CocktailListItem from './cocktail-list-item';

class CocktailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://chinchinapi.herokuapp.com/api/chinchin/cocktails/all')
      .then(res => res.json())
      .then(result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="flex-container">
          {items.map(cocktail => {
            return <CocktailListItem cocktail={cocktail} />
            // <div>
            //   {cocktail.name}
            // </div>
          })}
        </div>
      );
    }
  }

//   render() {
//     return (
//       <div class="flex-container">
//         {this.props.recipes.map(function(cocktail) {
//           return <CocktailListItem cocktail={cocktail} />
//         })}
//       </div>
//     )
//   }
}

export default CocktailList;
