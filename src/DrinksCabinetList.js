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

    if (this.Auth.loggedIn()) {
      console.log('user is logged in')
    } else {
      console.log('user is not logged in')
    }

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
                var divContent = <button onClick={this.deleteFromCabinet.bind(this, ingredient.name)} className='star-button'><i className="fas fa-star" /></button>
              } else {
                var divContent = <button onClick={this.addToCabinet.bind(this, ingredient.name)} className='star-button'><i className="far fa-star" /></button>
              }
              return (
                <div className='drinks-cabinet-list-item'>
                  {divContent} {ingredient.name}
                </div>
              )
          }) }
        </div>
    )
  }
}

export default withRouter(DrinksCabinetList);
