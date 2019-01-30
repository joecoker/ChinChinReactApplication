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
    await this.setState({ingredients: [], maxMissing: null});
    this.props.callback(this.state.ingredients, this.state.maxMissing)
  }

  handleNumber(event) {
    this.setState({maxMissing: event.target.value});
  }

  render() {
    return (
      <div id='filters'>        
        <div id='filter-bar' className={this.state.isVisible ? 'collapse-filter-menu' : 'show-filters-menu'} onClick={this.toggleFilterMenu} >
          Filter
        </div>
        <div id='filter-items' className={this.state.isVisible ? 'show-filters-menu' : 'collapse-filter-menu'}>
          <form onSubmit={this.handleFormSubmit}>
            <div className='collapse-menu' onClick={this.toggleFilterMenu}>Collapse</div>
            <div id='spirits'>
              <div className='ingredient-category'>Spirits</div>
              <div className='spirit-column'>
                <input type='checkbox' className='spirit' value='Gin' onChange={this.handleChange} />Gin<br/>
                <input type='checkbox' className='spirit' value='Vodka' onChange={this.handleChange} />Vodka<br/>
                <input type='checkbox' className='spirit' value='Triple Sec' onChange={this.handleChange} />Triple Sec<br/>
                <input type='checkbox' className='spirit' value='White Rum' onChange={this.handleChange} />White Rum
              </div>
              <div className='spirit-column'>
                <input type='checkbox' className='spirit' value='Dark Rum' onChange={this.handleChange} />Dark Rum<br/>
                <input type='checkbox' className='spirit' value='Cognac' onChange={this.handleChange} />Cognac<br/>
                <input type='checkbox' className='spirit' value='Vermouth' onChange={this.handleChange} />Vermouth
              </div>
              <div className='spirit-column'>
                <input type='checkbox' className='spirit' value='Whiskey' onChange={this.handleChange} />Whiskey<br/>
                <input type='checkbox' className='spirit' value='Tequila' onChange={this.handleChange} />Tequila<br/>
                <input type='checkbox' className='spirit' value='Champagne' onChange={this.handleChange} />Champagne
              </div>
            </div>
            
            <div id='mixers'>
              <div className='ingredient-category'>Mixers</div>
              <div className='mixer-column'>
                <input type='checkbox' className='spirit' value='Orange Juice' onChange={this.handleChange} />Orange Juice<br/>
                <input type='checkbox' className='spirit' value='Pineapple Juice' onChange={this.handleChange} />Pineapple Juice<br/>
                <input type='checkbox' className='spirit' value='Cranberry Juice' onChange={this.handleChange} />Cranberry Juice
              </div>
              <div className='mixer-column'>
                <input type='checkbox' className='spirit' value='Lemon Juice' onChange={this.handleChange} />Lemon Juice<br/>
                <input type='checkbox' className='spirit' value='Lime Juice' onChange={this.handleChange} />Lime Juice<br/>
                <input type='checkbox' className='spirit' value='Cream' onChange={this.handleChange} />Cream
              </div>
            </div>

            <div id='liqueurs'>
              <div className='ingredient-category'>Liqueurs</div>
              <div className='liqueurs-column'>
                <input type='checkbox' className='spirit' value='Coffee Liqueur' onChange={this.handleChange} />Coffee Liqueur<br/>
                <input type='checkbox' className='spirit' value='Créme Liqueur' onChange={this.handleChange} />Créme Liqueur<br/>
                <input type='checkbox' className='spirit' value='Galliano' onChange={this.handleChange} />Galliano
              </div>
            </div>

            <div>
              <div id='max-missing'>Max. missing ingredients: <input id='max-missing-input' type='number' onChange={this.handleNumber} /></div>
              <button className='filter-buttons left-filter-button' type='submit' onClick={this.toggleFilterMenu}>Go</button>
              <button className='filter-buttons' type='reset' onClick={this.clearIngredients}>Clear</button>
            </div>


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
