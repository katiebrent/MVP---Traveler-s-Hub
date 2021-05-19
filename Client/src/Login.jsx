import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const { setName, setEmail, name, email, setCountries } = props;

  const [login, setLogin] = useState(false);

  const addUser = (e, user, address) => {
    axios({
      method: 'POST',
      url: '/user',
      data: {
        name: user,
        email: address
      }
    })
  }

  const logIn = (e, userName) => {
    axios.get(`/user/?name=${name}`)
    .then((resp) => {
      setEmail(resp.data[0].email);
      setCountries(resp.data[0].countries);
      setLogin(true)
    })
    .catch((err) => {
      console.log('error logging in', err)
    })
  }

  // if(login) {
  //   return(`Welcome ${name}!`)
  // } else {
  return(
    <div className="row">
      <div className='col'>
        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
          New User
        </button>
        <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <form>
                  <label className="row text-left">Username:
                  <input placeholder="Enter username here" className="w-100" onChange={(e) => {setName(e.target.value)}}/>
                  </label>
                  <label className="row text-left">User email:
                  <input placeholder="Enter email address here" className="w-100" onChange={(e) => {setEmail(e.target.value)}}/>
                  </label>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={(e)=> {addUser(e, name, email)}}>Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-4'>
      <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#login">
  Login
</button>
<div className="modal" id="login" tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
        <button type="button" className="close text-right" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div className="modal-body">
        <form>
          <label className="row text-left">Username:
          <input placeholder="Enter username here" className="w-100" onChange={(e) => {setName(e.target.value)}} />
          </label>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={(e)=> {logIn(e, name)}}>Login</button>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
  )
// }
};''

export default Login;