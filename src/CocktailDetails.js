import React, { Component } from 'react';

import CocktailDetailsItem from './CocktailDetailsItem';
import Spinner from './Spinner';

class CocktailDetails extends Component {

	constructor(props) {
    super(props);
    this.state = {
      cocktail: [],
			loading: true
		};
	}

  componentDidMount() {
    fetch('https://chinchinapi.herokuapp.com/cocktails/name/' + this.props.match.params.name)
      .then(res => res.json())
      .then(result => {
          this.setState({
            cocktail: result,
						loading: false
          });
        }
      )
  }

  render() {
    const { cocktail } = this.state;

		if (this.state.loading) {
      return (<Spinner />)
    }

    return (
      <div className='cocktail-details-parent'>
	      {cocktail.map(cocktail => {
	        return <CocktailDetailsItem cocktail={cocktail} />
	      })}
      </div>
    )
  	}
	}

	export default CocktailDetails;
