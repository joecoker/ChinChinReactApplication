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
    this.addToCabinet = this.addToCabinet.bind(this);
    this.deleteFromCabinet = this.deleteFromCabinet.bind(this);
  }

  componentWillMount(){
    fetch('https://chinchinapi.herokuapp.com/ingredients/all')
    .then(res => res.json())
    .then(result => {
        this.setState({
          allIngredients: result.sort((a,b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          })
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

  addToCabinet(ingredientName) {
    this.Auth.fetch('https://chinchinapi.herokuapp.com/user/cabinet/add', {
      method: 'POST',
      body: '{"ingredientsList": ["' + ingredientName + '"]}'
    })
    .then(result => {
      this.setState({
        cabinetIngredients: result.cabinetIngredients
      })
    })
  }

  deleteFromCabinet(ingredientName) {
    this.Auth.fetch('https://chinchinapi.herokuapp.com/user/cabinet/delete', {
      method: 'POST',
      body: '{"ingredientsList": ["' + ingredientName + '"]}'
    })
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
              return (
                <div className={divType}>
                  {ingredient.name}
                  <button onClick={this.addToCabinet.bind(this, ingredient.name)}>Add</button>
                  <button onClick={this.deleteFromCabinet.bind(this, ingredient.name)}>Delete</button>
                </div>
              )
          }) }
        </div>
    )
  }
}

export default withRouter(DrinksCabinetList);
