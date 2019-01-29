import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home'
import CocktailSingle from './CocktailSingle'
import CocktailsAll from './CocktailsAll'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import SignOutPage from './SignOutPage'
import DrinksCabinetPage from './DrinksCabinetPage'
import Banner from './Banner';
import Notifications from 'react-notify-toast';

class App extends Component {

  render() {
    return (
      <Router>
        <div id='routes'>
          <Banner />
          <Notifications />
          <div id='page-content'>
            <Route exact path="/" component={Home.go} />
            <Route exact path="/cocktails/all" component={CocktailsAll.go} />
            <Route path="/cocktail/:name" component={CocktailSingle.go} />
            <Route exact path="/sign-in" component={SignInPage.go} />
            <Route exact path="/sign-up" component={SignUpPage.go} />
            <Route exact path="/drinks-cabinet" component={DrinksCabinetPage.go} />
            <Route exact path="/sign-out" component={SignOutPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
