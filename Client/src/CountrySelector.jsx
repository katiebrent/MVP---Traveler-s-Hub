import React from 'react';


const CountrySelector = (props) => {
  return(
    <div className="row">
      <div className="col">
        Country Dropdown
      </div>
      <div className="col">
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Budget
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <a class="dropdown-item" href="#!">Roughing It</a>
            <a class="dropdown-item" href="#!">Mid Tier</a>
            <a class="dropdown-item" href="#!">Luxury Travel</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CountrySelector;