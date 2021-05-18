import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const CountrySelector = (props) => {
  const [ value, setValue] = useState(null);

  return(
    <div className="row">
      <div className="col">
        <CountrySelect
        value={value}
        onChange={setValue}
        size='sm'
        />
      </div>
      <div className="col">
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Budget
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a className="dropdown-item" href="#!">Roughing It</a>
            <a className="dropdown-item" href="#!">Mid Tier</a>
            <a className="dropdown-item" href="#!">Luxury Travel</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CountrySelector;