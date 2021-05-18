import React from 'react';


const ShowMeMyStats = (props) => {
  return (
    <div className="col">

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#stats">
  Show Me My Stats
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
          ...
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ShowMeMyStats;

