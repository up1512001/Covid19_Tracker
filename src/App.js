import { useState } from 'react';
import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import './App.css';

function App() {

  const [countries,setCountries] = useState([
    'India' , 'USA' , 'France'
  ]);

// state is variable in react or short term memory
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
                  <MenuItem value={country} >{country}</MenuItem>
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
