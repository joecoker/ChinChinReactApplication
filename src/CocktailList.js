import React, { Component } from 'react';

import CocktailListItem from './CocktailListItem';

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
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.data === '') {
      fetch('https://chinchinapi.herokuapp.com/cocktails/all')
        .then(res => res.json())
        .then(result => {
            this.setState({
              cocktails: result
            });
          }
        )
    }
    else {
      fetch('https://chinchinapi.herokuapp.com/cocktails/filter/by-ingredient/' + nextProps.data)
        .then(res => res.json())
        .then(result => {
            this.setState({
              cocktails: result
            });
          }
        )
    }
  }

  render() {
    let { cocktails } = this.state;
    return (
      <div id="flex-container">
        {cocktails.map(cocktail => {
          return <CocktailListItem cocktail={cocktail} />
        })}
      </div>
    );
  }
}

export default CocktailList;
