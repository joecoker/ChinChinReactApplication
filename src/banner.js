import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Banner extends Component {

  constructor() {
    super();
    this.state = {isToggleOn: true};
    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
  }

  toggleMenuIcon() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    const homeAdd = '/'
    const cocktailsAdd = '/cocktails/all'
    return (
      <div id='banner'>
        <div id='hamburger' onClick={this.toggleMenuIcon}><i class={this.state.isToggleOn ? "fas fa-bars" : "fas fa-times"}></i></div>
        <img id='logo' src='/negroni.ico' alt='Chin Chin logo'></img>
        <div id='chin-chin-logo'>Chin Chin</div>
        <div id='menu' class={this.state.isToggleOn ? 'hidden' : 'visible'}>
          <Link to={homeAdd}><div class='menu-item'>Home</div></Link>
          <Link to={cocktailsAdd}><div class='menu-item'>Cocktails</div></Link>
        </div>
      </div>
    )
  }
}

export default Banner;
