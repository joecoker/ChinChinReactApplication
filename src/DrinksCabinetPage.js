import React, { Component } from 'react';

import DrinksCabinetList from './DrinksCabinetList';
import { Link } from 'react-router-dom';

class DrinksCabinetPage extends Component {

  static go() {
    return (
      <div className='drinks-cabinet-page'>
        <Link to='/drinks-cabinet-cocktails'><button className='cabinet-button left-button card'>Ingredients required...</button></Link>
        <Link to='/drinks-cabinet-cocktails/only'><button className='cabinet-button card'>Ready to make...</button></Link>
        <DrinksCabinetList />
      </div>
    )
  }
}

export default DrinksCabinetPage;
