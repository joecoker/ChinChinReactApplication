import React, { Component } from 'react';

import CocktailListItem from './CocktailListItem';
import Spinner from './Spinner';

class CocktailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: null,
      loading: true
    };
  }

  componentWillMount() {
    window.scrollTo(0, 0)
    if(!this.props.noInitialRender) {
      fetch('https://chinchinapi.herokuapp.com/cocktails/all')
      .then(res => res.json())
      .then(result => {
          this.setState({
            cocktails: result,
            loading: false
          });
        }
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loading: true});
    window.scrollTo(0, 0)
    let url;
    if (nextProps.data.ingredients.length === 0) {
      url = 'https://chinchinapi.herokuapp.com/cocktails/all';
    } else {
      url = 'https://chinchinapi.herokuapp.com/cocktails/filter/by-ingredient/' + nextProps.data.ingredients;
      if (!!nextProps.data.maxMissing) {
        url += '/' + nextProps.data.maxMissing
      }
    }
    fetch(url)
      .then(res => res.json())
      .then(result => {
          this.setState({
            loading: false
          });
        }
      )
  }

  render() {
    let { cocktails } = this.state,
      display;

      if (this.state.loading) {
        return (<Spinner />)
      }

    if (!cocktails) {
      display = null;
    } else if (cocktails.length > 0) {
      display = cocktails.map(cocktail => {
        return <CocktailListItem cocktail={cocktail} />
      })
    } else {
      display = <div id='no-results'>No cocktails were found that meet your selected criteria</div>
    }

    return (
      <div id="flex-container">
        {display}
      </div>
    );
  }
}

export default CocktailList;
