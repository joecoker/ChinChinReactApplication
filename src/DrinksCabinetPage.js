import React, { Component } from 'react';

import DrinksCabinetList from './DrinksCabinetList';

class DrinksCabinetPage extends Component {

  static go() {
    return (
      <div className='drinks-cabinet-page'>
        <DrinksCabinetList />
      </div>
    )
  }
}

export default DrinksCabinetPage;
