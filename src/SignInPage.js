import React, { Component } from 'react';

import SignInBox from './SignInBox';

class SignInPage extends Component {

  static go() {
    return (
      <div className='sign-page'>
        <SignInBox />
      </div>
    )
  }
}

export default SignInPage;
