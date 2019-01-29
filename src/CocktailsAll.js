import React, { Component } from 'react';

import CocktailList from './CocktailList';
import FilterMenu from './FilterMenu';

class CocktailsAll extends Component {

  constructor(){
    super();
    this.state ={
      ingredients: [],
      maxMissing: null
    }
  }

  formChild(ingredients, maxMissing) {
    this.setState({ ingredients: ingredients, maxMissing: maxMissing })
  }

  render() {
    return (
      <div id='cocktails-all'>
        <FilterMenu callback={this.formChild.bind(this)}/>
        <CocktailList data={this.state}/>
      </div>
    )
  }
}

export default CocktailsAll;
