import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import axios from 'axios';

const AddCountry = (props) => {
  const [value, setValue] = useState(null);
  const [budget, setBudget] = useState("Select Budget");
  const {name, countries, setCountries, setCount} = props;


  const handleAddCountry = (country, bdgt) => {
    if(name === null) {
      alert("Remember to login or create an account first!")
      setValue(null);
      setBudget("Select Budget")
    } else {
      axios({
        method: 'PUT',
        url: '/user',
        data: {
          countryObj: country,
          budget: bdgt,
          name: name
        }
      })
      .then (() => {
        var currentCountries = countries;
        var newCountry = {
          country_id: country.alpha2,
          country_name: country.name,
          budget: bdgt
        }
        var newCountries = currentCountries.concat(newCountry)
        setCountries(newCountries);
        setValue(null);
        setBudget("Select Budget");
        setCount(newCountries.length);

      })
    }

  }

  return(
    <div className='col-7'>
    <div className="row">
      <div className="col-5">
        <CountrySelect
        value={value}
        onChange={setValue}
        size='sm'
        />
      </div>
      <div className="col">
      <div className="dropdown">
          <button className="btn btn-light dropdown-toggle btn-sm btn-outline-secondary" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {budget}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#!" onClick={() => {setBudget('Roughing It')}}> Roughing It </a>
            <a className="dropdown-item" href="#!" onClick={() => {setBudget('Mid Tier')}}>Mid Tier </a>
            <a className="dropdown-item" href="#!" onClick={() => {setBudget('Luxury Travel')}}>Luxury Travel</a>
          </div>
        </div>
      </div>
      <div className= "col">
      <button type="button" className="btn-secondary btn-sm" onClick={() => {handleAddCountry(value, budget)}}>
        Add Country
      </button>
      </div>
    </div>
    </div>
  )
}

export default AddCountry;