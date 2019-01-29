import React, { Component } from 'react';

class Home extends Component {

  static go() {
    return (
      <div id='home'>
        <div className='top-heading'>Welcome to Chin&nbsp;Chin</div>
        <div className='body-text'>Chin Chin is your knowledgable guide on your
          foray into the world of cocktail making. It was inspired by the idea
          of being able to find out which cocktails you can make with the
          ingredients you already have at home.
          <br/><br/>
          This data for this web app is stored on the Chin Chin API, which is
          populated using data compiled
          by <a href='https://github.com/teijo/iba-cocktails'>teijo</a>, of
          official cocktail recipes from
          the <a href='http://iba-world.com/'>International Bartender's Association</a>
          . Chin Chin currently uses a dataset of 77 classic cocktail recipes.
          <br/><br/>
          It is the final project at
          Makers Academy for <a href='https://github.com/StuAA78'>Stuart Adair</a>
          , <a href='https://github.com/joecoker'>Joe Coker</a>
          , <a href='https://github.com/Vaent'>Al Eccles</a>
          , <a href='https://github.com/alittlecross'>Paul Fazackerley</a>
          , and <a href='https://github.com/DGajewska'>Dana Gajewska</a>.
          </div>
      </div>
    )
  }
}

export default Home;
