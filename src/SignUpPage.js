import React, { Component } from 'react';
import SignUpBox from './SignUpBox';

class SignUpPage extends Component {

  static go() {
    return (
      <div className='sign-page'>
        <SignUpBox />
      </div>
    )
  }
}

export default SignUpPage;
