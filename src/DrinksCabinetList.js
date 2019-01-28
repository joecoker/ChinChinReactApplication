import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthService from './AuthService';

let validator = require("email-validator");

class DrinksCabinetList extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      allIngredients: [],
      cabinetIngredients: []
    }
  }

  componentWillMount(){
    fetch('https://chinchinapi.herokuapp.com/ingredients/all')
    .then(res => res.json())
    .then(result => {
        this.setState({
          allIngredients: result
        });
      }
    )

    this.Auth.fetch('https://chinchinapi.herokuapp.com/user/cabinet/view')
    .then(result => {
      this.setState({
        cabinetIngredients: result.cabinetIngredients
      })
    })
  }

  render() {
    return (
        <div className='drinks-cabinet-list card'>
          {
            this.state.allIngredients.map((ingredient) => {
              if (this.state.cabinetIngredients.includes(ingredient.name)) {
                var divType='in-cabinet';
              } else {
                var divType='not-in-cabinet';
              }
              return <div className={divType}>{ingredient.name}</div>
          }) }
        </div>
    )
  }
}

export default withRouter(DrinksCabinetList);
