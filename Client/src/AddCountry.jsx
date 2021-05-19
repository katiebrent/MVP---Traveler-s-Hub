import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const AddCountry = (props) => {
  const [ value, setValue] = useState(null);
  const [budget, setBudget] = useState("Select Budget")

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
          <button className="btn btn-secondary dropdown-toggle small" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <button type="button">
        Add Country
      </button>
      </div>
    </div>
    </div>
  )
}

export default AddCountry;