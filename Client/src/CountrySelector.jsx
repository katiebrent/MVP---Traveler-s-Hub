import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const CountrySelector = (props) => {
  const [ value, setValue] = useState(null);

  return(
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
            Select Budget
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#!">Roughing It</a>
            <a className="dropdown-item" href="#!">Mid Tier</a>
            <a className="dropdown-item" href="#!">Luxury Travel</a>
          </div>
        </div>
      </div>
      <div className= "col">
      <button type="button">
        Add Country
      </button>
      </div>
    </div>
  )
}

export default CountrySelector;