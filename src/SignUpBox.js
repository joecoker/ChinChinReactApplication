import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthService from './AuthService';
import Notifications, {notify} from 'react-notify-toast';

let validator = require("email-validator");

class SignUpBox extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
    this.verifyForm = this.verifyForm.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPasswords = this.verifyPasswords.bind(this);
    this.Auth = new AuthService();
    this.state = {
        emailMessage: '',
        passwordMessage: '',
    }
    this.show = notify.createShowQueue();
  }

  componentWillMount(){
      if(this.Auth.loggedIn())
          this.props.history.replace('/');
  }

  verifyForm(email, pass1, pass2){
    let emailOkay = this.verifyEmail(email);
    let passwordsOkay = this.verifyPasswords(pass1, pass2);
    return (emailOkay && passwordsOkay);
  }

  verifyPasswords(pass1, pass2){
    if (pass1 !== pass2) {
      this.setState({ passwordMessage: 'Passwords must match'});
      return false;
    }
    this.setState({ passwordMessage: ''})
    return true;
  }

  verifyEmail(email){
    if (!validator.validate(email)) {
      this.setState({ emailMessage: 'Email must be valid'});
      return false;
    }
    this.setState({ emailMessage: ''});
    return true;
  }

  signUp(email, password){
    this.Auth.register(this.state.email,this.state.password)
        .then(res =>{
          console.log(res);
          if (res.name === 'UserExistsError') {
            this.show('Email already exists', 'error');
            return;
          }
          this.show(`Account ${this.state.email} created!`, 'success');
          this.props.history.replace('/');
          return;
        })
        .catch(err =>{
            alert(err);
        })
  }

  handleFormSubmit(e){
       e.preventDefault();

       let email = this.state.email;
       let password = this.state.password;
       let passwordcheck = this.state.passwordcheck;

       let formCorrect = this.verifyForm(email, password, passwordcheck)

       if (formCorrect) {
         this.signUp(email, password);
       }
   }

   handleChange(e){
       this.setState(
           {
               [e.target.name]: e.target.value
           }
       )
   }

  render() {
    return (
        <div className='form card'>
          <form
            className='signin-form'
            onSubmit={this.handleFormSubmit}
          >
            <div className='input-title'>
              <span className='input-name'>Email</span>
              <span className='input-message'>{ this.state.emailMessage }</span>
            </div>
            <input
                className='form-item'
                placeholder='email'
                name='email'
                type='email'
                onChange={this.handleChange}
            />
            <div className='input-title'>
              <span className='input-name'>Password</span>
              <span className='input-message'>{ this.state.passwordMessage }</span>
            </div>
            <input
                className='form-item'
                placeholder='password'
                name='password'
                type='password'
                onChange={this.handleChange}
            />
            <div className='input-title'>
              <span className='input-name'>Confirm password</span>
            </div>
            <input
                className='form-item'
                placeholder='password'
                name='passwordcheck'
                type='password'
                onChange={this.handleChange}
            />
            <button
              className='form-submit'
              type='submit'
            >
            Sign Up
            </button>
            <div className='message'>Already registered? <Link to={'/sign-in'}>Sign in to your account</Link></div>
          </form>
        </div>
    )
  }
}

export default withRouter(SignUpBox);
