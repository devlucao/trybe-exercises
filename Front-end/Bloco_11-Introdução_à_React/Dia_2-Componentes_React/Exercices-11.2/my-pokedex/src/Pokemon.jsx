import React, { Component } from 'react';
import './data';
import pokemons from './data';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return(
            <div className="pokemon">
              <img src={ image } alt={ name } /> 
              <p> { name } </p>
              <p> { type } </p>
              <p> Average Weight: { averageWeight.value } { averageWeight.measurementUnit }</p>
            </div>
        )
    }
}

export default Pokemon;
