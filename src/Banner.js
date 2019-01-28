import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AuthService from './AuthService';

class Banner extends Component {

  constructor() {
    super();
    this.state = {isVisible: false};

    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.Auth = new AuthService();
  }

  handleClick() {
    if (!this.state.isVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.toggleMenuIcon();
  }

  handleOutsideClick(e) {
    this.handleClick();
  }

  toggleMenuIcon() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }))
  }

  render() {

    let loggedIn = this.Auth.loggedIn();

    const homeAdd = '/';
    const cocktailsAdd = '/cocktails/all';
    const signInAdd = '/sign-in';
    const signUpAdd = '/sign-up';
    const signOutAdd = '/sign-out';
    const drinksCabinetAdd = '/drinks-cabinet';

    return (
      <div id='banner'>
        <div id='hamburger' onClick={this.handleClick}><i className={this.state.isVisible ? 'fas fa-times' : 'fas fa-bars'} /></div>
        <img id='logo' src='/negroni.ico' alt='Chin Chin logo'></img>
        <div id='chin-chin-logo'>Chin Chin</div>
        <div id='menu' className={this.state.isVisible ? 'visible' : 'hidden'}>
          <Link to={homeAdd}><div className='menu-item'><span className='menu-icon'><i className='fas fa-home' /></span> Home</div></Link>
          <Link to={cocktailsAdd}><div className='menu-item'><span className='menu-icon'><i className='fas fa-cocktail' /></span> Cocktails</div></Link>
          {!loggedIn && <Link to={signInAdd}><div className='menu-item'><span className='menu-icon'><i class='fas fa-sign-in-alt' /></span> Sign In</div></Link>}
          {!loggedIn && <Link to={signUpAdd}><div className='menu-item'><span className='menu-icon'><i class='fas fa-user-plus' /></span> Sign Up</div></Link>}
          {loggedIn && <Link to={drinksCabinetAdd}><div className='menu-item'><span className='menu-icon'><i class='fas fa-wine-bottle' /></span> My Drinks Cabinet</div></Link>}
          {loggedIn && <Link to={signOutAdd}><div className='menu-item'><span className='menu-icon'><i class='fas fa-sign-out-alt' /></span> Sign Out</div></Link>}
        </div>
      </div>
    )
  }
}

export default Banner;
