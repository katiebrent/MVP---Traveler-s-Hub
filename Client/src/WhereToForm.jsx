import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';
import Friends from './Friends.jsx';
import axios from 'axios';



const WhereToForm = (props) => {
  const [value, setValue] = useState(null);
  const [friends, setFriends] = useState([]);

  const findPeople = (countryid) => {
    axios.get(`/friend/?country=${value.alpha2}`)
    .then((resp) => {
      setFriends(resp.data);
      console.log('this is the response', resp);
    })
    .catch((err) => {
      console.log(err)
    })


  }

  const handleClose = () => {
    setValue(null);
  }

  const modalBody = !value ? '' : <Friends country={value} friends={friends}/>

return (
    <div>
    <div className="row">
      <div className="col text-center">
        <h2>Where to Next?</h2>
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
      <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#friends" onClick={() => {findPeople(value.alpha2)}}>
  Find People Who Have Been
    </button>
    <div className="modal" id="friends" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Who to connect with!</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {handleClose()}}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {modalBody}
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
)
}

export default WhereToForm;