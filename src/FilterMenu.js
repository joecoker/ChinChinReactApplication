import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FilterMenu extends Component {

  constructor() {
    super();
    this.state = {
        isVisible: false,
        ingredients: [],
      };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearIngredients = this.clearIngredients.bind(this);
  }

  // handleClick() {

  // }

  // toggleFilterMenu() {
  //   this.setState(state => ({
  //     isVisible: !state.isVisible
  //   }))
  // }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.callback(this.state.ingredients)
  }

  handleChange(event) {
    let ingredients = this.state.ingredients,
      toggledIngredient = event.target.value,
      indexOfIngredient = ingredients.indexOf(toggledIngredient);

    if (indexOfIngredient > -1) {
      ingredients.splice( indexOfIngredient, 1 );
    } else {
      ingredients.push(toggledIngredient);
    }
    this.setState({ingredients: ingredients});
  }

  async clearIngredients(event){
    await this.setState({ingredients: []})
    this.props.callback(this.state.ingredients)
  }

  render() {
    return (
      <div id='filters'>
        <div>filter</div>
          <form onSubmit={this.handleFormSubmit}>
            <div id='filter-items'>
              <div id='spirits'>
              <div>Spirits</div>
                <input type='checkbox' name='spirit' value='Gin' onChange={this.handleChange} />Gin
                <input type='checkbox' name='spirit' value='Vodka' onChange={this.handleChange} />Vodka
                <input type='checkbox' name='spirit' value='Triple Sec' onChange={this.handleChange} />Triple Sec
                <input type='checkbox' name='spirit' value='White Rum' onChange={this.handleChange} />White Rum
                <input type='checkbox' name='spirit' value='Dark Rum' onChange={this.handleChange} />Dark Rum
                <input type='checkbox' name='spirit' value='Cognac' onChange={this.handleChange} />Cognac
                <input type='checkbox' name='spirit' value='Vermouth' onChange={this.handleChange} />Vermouth
                <input type='checkbox' name='spirit' value='Whiskey' onChange={this.handleChange} />Whiskey
                <input type='checkbox' name='spirit' value='Tequila' onChange={this.handleChange} />Tequila
                <input type='checkbox' name='spirit' value='Champagne' onChange={this.handleChange} />Champagne
              </div>
              <div id='mixers'>
              <div>Mixers</div>
                <input type='checkbox' value='Orange Juice' onChange={this.handleChange} />Orange Juice
                <input type='checkbox' value='Pineapple Juice' onChange={this.handleChange} />Pineapple Juice
                <input type='checkbox' value='Cranberry Juice' onChange={this.handleChange} />Cranberry Juice
                <input type='checkbox' value='Lemon Juice' onChange={this.handleChange} />Lemon Juice
                <input type='checkbox' value='Lime Juice' onChange={this.handleChange} />Lime Juice
                <input type='checkbox' value='Cream' onChange={this.handleChange} />Cream
              </div>
              <div id='liqueurs'>
              <div>Mixers</div>
                <input type='checkbox' value='Coffee Liqueur' onChange={this.handleChange} />Coffee Liqueur
                <input type='checkbox' value='Créme Liqueur' onChange={this.handleChange} />Créme Liqueur
                <input type='checkbox' value='Maraschino Cherry Liqueur' onChange={this.handleChange} />Maraschino Cherry Liqueur
                <input type='checkbox' value='Galliano' onChange={this.handleChange} />Galliano
              </div>
              <button type='submit' >Go</button>
              <button type='reset' onClick={this.clearIngredients} >Clear</button>
            </div>
          </form>
      </div>
    )
  }
}

FilterMenu.protoTypes = {
  callback: PropTypes.func,
}

export default FilterMenu;
