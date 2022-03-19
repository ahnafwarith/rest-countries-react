import React from 'react';
import './Country.css'

const Country = (props) => {
    /* Accessing using destructuring */
    const { name, population, flags } = props.country;
    return (
        <div className='country-grid'>
            <div className='country'>
                <h2>Country Name: {name.common}</h2>
                <img src={flags.png} alt="" />
                <p>Country population: {population}</p>
            </div>
        </div>
    );
};

export default Country;