import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';



const WhereToForm = (props) => {
  const [value, setValue] = useState(null);

return (
    <div>
    <div className="row">
      <div className="col text-center">
        <h4>Where to Next?</h4>
      </div>
      </div>
  <div className="row">
  <div className="col-9">
        <CountrySelect
        value={value}
        onChange={setValue}
        size='sm'
        />
      </div>
      <button type="button">
        Find People Who Have Been!
      </button>
  </div>
  </div>
)
}

export default WhereToForm;