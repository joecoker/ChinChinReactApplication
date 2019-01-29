import React, { Component } from 'react';

import DrinksCabinetList from './DrinksCabinetList';
import { Link } from 'react-router-dom';

class DrinksCabinetPage extends Component {

  static go() {
    return (
      <div className='drinks-cabinet-page'>
        <Link to='/drinks-cabinet-cocktails'><button>See cocktails I could make</button></Link>
        <Link to='/drinks-cabinet-cocktails/only'><button>See only cocktails I can make</button></Link>
        <DrinksCabinetList />
      </div>
    )
  }
}

export default DrinksCabinetPage;
