import { useState, useEffect } from 'react';
import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';
import InfoBox from './InfoBox';
import Map from './Map'

import {Card , CardContent , Typography} from '@material-ui/core';

function App() {

  // state is variable in react or short term memory

  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState('worldwide');

  // useEffect run's peace of code on given conditiion
  useEffect(() => {
    // empty brackte mean's componenet run's once when app is loaded not again
    // we need to do async call because it will call server and wait for some time then gets info

    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));
          setCountries(countries);
        });
    }

    getCountriesData();

  }, []);


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  }

  return (
    // BEM naming convention
    <div className="app">
      <div className='app__left'>
        <div className='app__header'>
          {/* Header */}
          {/* Title + select input dropdown list */}

          <h1>COVID-19 Tracker</h1>

          <FormControl className='app__dropdown'>
            <Select
              variant='outlined'
              value={country}
              onChange={onCountryChange}
            >
              {/* loop through contries show dropdown list and also add worldwide */}
              <MenuItem value='worldwide'>Worldwide</MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value} >{country.name}</MenuItem>
                ))
              }


            </Select>

          </FormControl>
        </div>

        {/* InfoBoxs */}
        {/* InfoBoxs */}
        {/* InfoBoxs */}

        <div className='app__stats'>

          <InfoBox title="Coronavirus cases" cases={129} total={2000} />
          <InfoBox title="Recovered" cases={134} total={300} />
          <InfoBox title="Deaths" cases={149} total={40} />

        </div>
        {/* Map */}
        <Map />

      </div>
      
      <Card className='app__right' >

        {/* Table of contries based on covid cases */}
        {/* Graph */}
        <CardContent>
              <h3>Live Cases By Country</h3>

              <h3>Worldwide New Cases</h3>
        </CardContent>

      </Card>

    </div>
  );
}

export default App;
