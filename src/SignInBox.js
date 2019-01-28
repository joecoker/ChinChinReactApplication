import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthService from './AuthService';
import Notifications, {notify} from 'react-notify-toast';

class SignInBox extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
    this.show = notify.createShowQueue();
  }

  componentWillMount(){
    if(this.Auth.loggedIn())
      this.props.history.replace('/');
  }

  handleFormSubmit(e){
    e.preventDefault();

    this.Auth.login(this.state.email,this.state.password)
      .then(res =>{
        this.show(`Signed in as ${this.state.email}`, 'success');
        this.props.history.replace('/');
        return;
      })
      .catch(err =>{
        if(err.hasOwnProperty('response') && err.response.status === 401) {
          this.show('Wrong email or password!', 'warning');
          return;
        }
        console.log(err);
      })
  }

  handleChange(e){
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  render() {
    return (
      <div className='form card'>
        <form
          className='signin-form'
          onSubmit={this.handleFormSubmit}
        >
            <input
                className="form-item"
                placeholder="email"
                name="email"
                type="email"
                onChange={this.handleChange}
            />
            <input
                className="form-item"
                placeholder="password"
                name="password"
                type="password"
                onChange={this.handleChange}
            />
            <button
              className="form-submit"
              type="submit"
            >
            Sign In
            </button>
          <div className='message'>Not registered? <Link to={'/sign-up'}>Create an account</Link></div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignInBox);
