import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class FilterMenu extends Component {

  constructor() {
    super();
    this.state = {isVisible: false};


// EVENT HANDLERS HERE
  }

  handleClick() {

  }

  toggleFilterIcon() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }))
  }

  render() {
    return (
      <div id='filters'>
        <div>filter</div>
        <form class='tick-boxes' onSubmit={this.handleFormSubmit} ></form>
        <div id='filter-items'>
          <div id='spirits'>
          <div>Spirits</div>
            <input form='tick-boxes' type='checkbox' value='Gin' />Gin
            <input form='tick-boxes' type='checkbox' value='Vodka' />Vodka
            <input form='tick-boxes' type='checkbox' value='Triple Sec' />Triple Sec
            <input form='tick-boxes' type='checkbox' value='White Rum' />White Rum
            <input form='tick-boxes' type='checkbox' value='Dark Rum' />Dark Rum
            <input form='tick-boxes' type='checkbox' value='Cognac' />Cognac
            <input form='tick-boxes' type='checkbox' value='Vermouth'/>Vermouth
            <input form='tick-boxes' type='checkbox' value='Gin'/>Whiskey
            <input form='tick-boxes' type='checkbox' value='Whiskey'/>Tequila
            <input form='tick-boxes' type='checkbox' value='Champagne'/>Champagne
          </div>
          <div id='mixers'>
          <div>Mixers</div>
            <input form='tick-boxes' type='checkbox' value='Orange Juice' />Orange Juice
            <input form='tick-boxes' type='checkbox' value='Pineapple Juice' />Pineapple Juice
            <input form='tick-boxes' type='checkbox' value='Cranberry Juice' />Cranberry Juice
            <input form='tick-boxes' type='checkbox' value='Lemon Juice' />Lemon Juice
            <input form='tick-boxes' type='checkbox' value='Lime Juice' />Lime Juice
            <input form='tick-boxes' type='checkbox' value='Cream' />Cream
          </div>
          <div id='liqueurs'>
          <div>Mixers</div>
            <input form='tick-boxes' type='checkbox' value='Coffee Liqueur' />Coffee Liqueur
            <input form='tick-boxes' type='checkbox' value='Créme Liqueur' />Créme Liqueur
            <input form='tick-boxes' type='checkbox' value='Maraschino Cherry Liqueur' />Maraschino Cherry Liqueur
            <input form='tick-boxes' type='checkbox' value='Galliano' />Galliano
          </div>
        </div>
      </div>
    )
  }
  
}

export default FilterMenu;
