import React, { Component } from 'react';
	
	import CocktailDetailsItem from './CocktailDetailsItem';
	
	class CocktailDetails extends Component {
	
	  constructor(props) {
	    super(props);
	    this.state = {
	      cocktail: []
			};
		}
	
	  componentDidMount() {
	    fetch('https://chinchinapi.herokuapp.com/cocktails/name/' + this.props.name)
	      .then(res => res.json())
	      .then(result => {
	          this.setState({
	            cocktail: result
	          });
	        }
	      )
	  }
      
    render() {
	    const { cocktail } = this.state;
	    return (
	      <div>
	      {cocktail.map(cocktail => {
	        return <CocktailDetailsItem cocktail={cocktail} />
	      })}
	      </div>
	    )
	  }
	}
	
	export default CocktailDetails;
