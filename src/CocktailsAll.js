import React, { Component } from 'react';

import CocktailList from './CocktailList';
import FilterMenu from './FilterMenu';

class CocktailsAll extends Component {

  constructor(){
    super();
    this.state ={
      data: ''
    }
  }
  formChild(params) {
    this.setState({ data: params })
  }

  render() {
    return (
      <div id='cocktails-all'>
        <FilterMenu callback={this.formChild.bind(this)}/>
        <CocktailList data={this.state.data}/>
      </div>
    )
  }
}

export default CocktailsAll;
