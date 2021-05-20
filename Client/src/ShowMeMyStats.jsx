import React from 'react';
import Stats from './Stats.jsx'


const ShowMeMyStats = (props) => {
  const {countries} = props;
  return (
    <div className="col text-center small">

    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#stats">
  Show My Stats
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
          <Stats countries={countries}/>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ShowMeMyStats;

