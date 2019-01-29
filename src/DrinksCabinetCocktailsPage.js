import React, { Component } from 'react';

import DrinksCabinetList from './DrinksCabinetList';
import AuthService from './AuthService';
import CocktailList from './CocktailList';

class DrinksCabinetCocktailsPage extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      cabinetIngredients: []
    }
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
        <CocktailList data={this.state.cabinetIngredients} noInitialRender='true' />
      </div>
    )
  }
}

export default DrinksCabinetCocktailsPage;
