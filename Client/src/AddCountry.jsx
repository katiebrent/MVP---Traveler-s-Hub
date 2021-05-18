import React from 'react';
import CountrySelector from './CountrySelector.jsx';

const AddCountry = (props) => {


  return(
    <div className="col text-center">

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Add Country
    </button>

    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add Country</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <CountrySelector/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )

}
export default AddCountry;