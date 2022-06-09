import { useState , useEffect } from 'react';
import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {
  
  // state is variable in react or short term memory

  const [countries,setCountries] = useState([]);

  // useEffect run's peace of code on given conditiion
  useEffect(()=>{
    // empty brackte mean's componenet run's once when app is loaded not again
    // we need to do async call because it will call server and wait for some time then gets info

    const getCountriesData = async() =>{
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) =>response.json())
      .then((data) =>{
        const countries = data.map((country) =>(
          {
            name : country.country,
            value : country.countryInfo.iso2
          }
        ));
        setCountries(countries);
      });
    }

    getCountriesData();

  },[]);

  return (
    // BEM naming convention
    <div className="app">
        <div className='app__header'>
          <h1>COVID-19 Tracker</h1>

          <FormControl className='app__dropdown'>
            <Select
              variant='outlined'
              value="abc"
            >
              {/* loop through contries show dropdown list and also add worldwide */}
              {/* <MenuItem value="worldwide" >worldwide1</MenuItem>
              <MenuItem value="worldwide" >worldwide2</MenuItem>
              <MenuItem value="worldwide" >worldwide3</MenuItem>
              <MenuItem value="worldwide" >worldwide4</MenuItem> */}
            
              {
                countries.map((country) =>(
                  <MenuItem value={country.value} >{country.name}</MenuItem>
                ))
              }


            </Select>

        </FormControl>
      </div>
        {/* Header */}
        {/* Title + select input dropdown list */}

        {/* InfoBoxs */}
        {/* InfoBoxs */}
        {/* InfoBoxs */}

        {/* Table of contries based on covid cases */}
        {/* Graph */}

        {/* Map */}

    </div>
  );
}

export default App;
