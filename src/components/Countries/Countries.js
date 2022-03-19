import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setToCountries/* this function will send the fetched value to use state and after useState() is done with the data, it will be sent to countries variable */] = useState([/* default value */])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setToCountries(data))
    }, []);

    return (
        <div>
            <h1>Available Countries: {countries.length}</h1>
            <div className='countries-container'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;