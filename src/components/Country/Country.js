import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.country.name}</h2>
            <p>Country population: {props.country.population}</p>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;