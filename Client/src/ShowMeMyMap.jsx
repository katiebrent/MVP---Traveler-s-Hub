import React from 'react';
import TravelMap from './Map.jsx'


const ShowMeMyMap = (props) => {
  const {countries, count} = props;

  console.log('this is countries at show me my map', countries)

  return (
    <div className="col text-center">

<button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#map">
  Show My Map
</button>

<div className="modal" id="map" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-xl" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">My Travels</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <TravelMap countries={countries} count={count} />
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ShowMeMyMap;

