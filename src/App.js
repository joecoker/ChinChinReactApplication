import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Banner from './Banner';
import Notifications from 'react-notify-toast';
import Home from './Home'
import CocktailDetails from './CocktailDetails'
import CocktailsAll from './CocktailsAll'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import SignOutPage from './SignOutPage'
import DrinksCabinetPage from './DrinksCabinetPage'
import DrinksCabinetCocktailsPage from './DrinksCabinetCocktailsPage'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Banner />
          <Notifications />
          <div id='gradient' />
          <div id='page-content'>
            <Route exact path="/" component={Home.go} />
            <Route exact path="/cocktails/all" component={CocktailsAll} />
            <Route path="/cocktail/:name" component={CocktailDetails} />
            <Route exact path="/sign-in" component={SignInPage.go} />
            <Route exact path="/sign-up" component={SignUpPage.go} />
            <Route exact path="/drinks-cabinet" component={DrinksCabinetPage.go} />
            <Route path="/drinks-cabinet-cocktails/:param?" component={DrinksCabinetCocktailsPage} />
            <Route exact path="/sign-out" component={SignOutPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
