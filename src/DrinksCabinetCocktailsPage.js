import React, { Component } from 'react';

import DrinksCabinetList from './DrinksCabinetList';
import AuthService from './AuthService';
import CocktailList from './CocktailList';

class DrinksCabinetCocktailsPage extends Component {

  constructor(match) {
    super();
    this.Auth = new AuthService();
    this.state = {
      cabinetIngredients: [],
      only: match.match.params.param === 'only' ? '/0' : ''
    }
    console.log();
  }

  componentDidMount(){
    this.Auth.fetch('https://chinchinapi.herokuapp.com/user/cabinet/view')
    .then(result => {
      this.setState({
        cabinetIngredients: result.cabinetIngredients
      })
    })
  }

  render() {

    return (
      <div className='drinks-cabinet-cocktails-page'>
        <CocktailList data={
          this.state.cabinetIngredients + this.state.only
        } noInitialRender='true' />
      </div>
    )
  }
}

export default DrinksCabinetCocktailsPage;
