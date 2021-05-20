import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';



const WhereToForm = (props) => {
  const [value, setValue] = useState(null);

  const findPeople = (countryid) => {

  }

return (
    <div>
    <div className="row">
      <div className="col text-center">
        <h4>Where to Next?</h4>
      </div>
      </div>
  <div className="row p-2">
  <div className="col-9">
        <CountrySelect
        value={value}
        onChange={setValue}
        size='sm'
        />
      </div>
      <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#stats">
  Find People Who Have Been
    </button>
    <div className="modal" id="stats" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">My Stats</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Friends country={value}/>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
)
}

export default WhereToForm;