import React, { Component } from 'react';
import AuthService from './AuthService';
import CocktailList from './CocktailList';

class DrinksCabinetCocktailsPage extends Component {

  constructor(match) {
    super();
    this.Auth = new AuthService();
    this.state = {
      ingredients: [],
      maxMissing: match.match.params.param === 'only' ? '0' : null
    }
  }

  componentDidMount(){
    this.Auth.fetch('https://chinchinapi.herokuapp.com/user/cabinet/view')
    .then(result => {
      this.setState({
        ingredients: result.cabinetIngredients
      })
    })
  }

  render() {

    return (
      <div className='drinks-cabinet-cocktails-page'>
        <CocktailList data={this.state} noInitialRender='true' />
      </div>
    )
  }
}

export default DrinksCabinetCocktailsPage;
