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
        maxMissing: null
      };
    this.toggleFilterMenu = this.toggleFilterMenu.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearIngredients = this.clearIngredients.bind(this);
  }

  // handleClick() {

  // }

  toggleFilterMenu() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }))
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.callback(this.state.ingredients, this.state.maxMissing)
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
    await this.setState({ingredients: [], maxMissing: null})
    this.props.callback(this.state.ingredients, this.state.maxMissing)
  }

  handleNumber(event) {
    this.setState({maxMissing: event.target.value});
  }

  render() {
    return (
      <div id='filters'>
        <div id='filter-bar' class={this.state.isVisible ? 'collapse-filter-menu' : 'show-filters-menu'} onClick={this.toggleFilterMenu} >
          <span id='filter-clicker'>Filter</span>
        </div>
          <div id='filter-items' class={this.state.isVisible ? 'show-filters-menu' : 'collapse-filter-menu'}>
            <form onSubmit={this.handleFormSubmit}>
              <div id='spirits'>
              <span class='ingredient-category'>Spirits</span>
              <span class='collapse-menu' onClick={this.toggleFilterMenu}>Collapse</span><br/>
                <input type='checkbox' class='spirit' value='Gin' onChange={this.handleChange} />Gin
                <input type='checkbox' class='spirit' value='Vodka' onChange={this.handleChange} />Vodka
                <input type='checkbox' class='spirit' value='Triple Sec' onChange={this.handleChange} />Triple Sec
                <input type='checkbox' class='spirit' value='White Rum' onChange={this.handleChange} />White Rum
                <input type='checkbox' class='spirit' value='Dark Rum' onChange={this.handleChange} />Dark Rum
                <input type='checkbox' class='spirit' value='Cognac' onChange={this.handleChange} />Cognac
                <input type='checkbox' class='spirit' value='Vermouth' onChange={this.handleChange} />Vermouth
                <input type='checkbox' class='spirit' value='Whiskey' onChange={this.handleChange} />Whiskey
                <input type='checkbox' class='spirit' value='Tequila' onChange={this.handleChange} />Tequila
                <input type='checkbox' class='spirit' value='Champagne' onChange={this.handleChange} />Champagne
              </div>
              <div id='mixers'>
              <div class='ingredient-category'>Mixers</div>
                <input type='checkbox' class='spirit' value='Orange Juice' onChange={this.handleChange} />Orange Juice
                <input type='checkbox' class='spirit' value='Pineapple Juice' onChange={this.handleChange} />Pineapple Juice
                <input type='checkbox' class='spirit' value='Cranberry Juice' onChange={this.handleChange} />Cranberry Juice
                <input type='checkbox' class='spirit' value='Lemon Juice' onChange={this.handleChange} />Lemon Juice
                <input type='checkbox' class='spirit' value='Lime Juice' onChange={this.handleChange} />Lime Juice
                <input type='checkbox' class='spirit' value='Cream' onChange={this.handleChange} />Cream
              </div>
              <div id='liqueurs'>
              <div class='ingredient-category'>Liqueurs</div>
                <input type='checkbox' class='spirit' value='Coffee Liqueur' onChange={this.handleChange} />Coffee Liqueur
                <input type='checkbox' class='spirit' value='Créme Liqueur' onChange={this.handleChange} />Créme Liqueur
                <input type='checkbox' class='spirit' value='Maraschino Cherry Liqueur' onChange={this.handleChange} />Maraschino Cherry Liqueur
                <input type='checkbox' class='spirit' value='Galliano' onChange={this.handleChange} />Galliano
              </div>
              <div>
                <input id='max-missing-input' type='number' onChange={this.handleNumber} />Maximum number of missing ingredients in each recipe
              </div>
              <button type='submit' >Go</button>
              <button type='reset' onClick={this.clearIngredients} >Clear</button>
            </form>
          </div>
      </div>
    )
  }
}

FilterMenu.protoTypes = {
  callback: PropTypes.func,
}

export default FilterMenu;
