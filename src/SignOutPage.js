import React, { Component } from 'react';
import { withRouter } from 'react-router';
import AuthService from './AuthService';
// eslint-disable-next-line
import Notifications, {notify} from 'react-notify-toast';

class SignOutPage extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
    this.show = notify.createShowQueue();
  }

  componentWillMount(){
    if(this.Auth.loggedIn()) {
      this.Auth.logout();
    }
    this.show('Signed out of account', 'success');
    this.props.history.replace('/');
    return;
  }

  render() {
    return(<div />);
  }
}

export default withRouter(SignOutPage);
