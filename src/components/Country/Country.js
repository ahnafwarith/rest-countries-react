import React from 'react';
import './Country.css'

const Country = (props) => {
    /* Accessing using destructuring */
    const { name, population, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Country population: {population}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;