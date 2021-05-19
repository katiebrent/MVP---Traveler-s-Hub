import React from 'react';
import TravelMap from './Map.jsx'


const ShowMeMyMap = (props) => {
  return (
    <div className="col text-center">

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#map">
  Show Me My Map
</button>

<div className="modal" id="map" tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">My Map</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <TravelMap/>
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

export default ShowMeMyMap;

