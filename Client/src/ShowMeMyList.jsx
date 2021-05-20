import React from 'react';


const ShowMeMyList = (props) => {
  const {countries} = props;


  return(
    <div className="col text-center">

<button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#list">
  Show My List
</button>

<div className="modal" id="list" tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">You have visited the following countries:</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <ol>
       {countries.map((country) => {
             return(
               <li key={country.country_id}>
                 <div>{country.country_name}</div>
               </li>
             )
           })}
    </ol>
      </div>
      </div>
    </div>
  </div>
</div>

  )
};

export default ShowMeMyList