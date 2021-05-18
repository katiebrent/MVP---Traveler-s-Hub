import React, { useState } from 'react';

const Login = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [login, setLogin] = useState(false);
const loginLink = login ? `Welcome ${name}` :
  <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
  Login
</button>
<div className="modal" id="login" tabIndex="-1" role="dialog">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Enter Your Username</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <label className="row text-left">Username:
          <input placeholder="Enter username here" className="w-100"/>
          </label>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</div>
  </div>


  return(
    <div className='row'>
      <div className='col'>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
                  <input placeholder="Enter username here" className="w-100"/>
                  </label>
                  <label className="row text-left">User email:
                  <input placeholder="Enter email address here" className="w-100"/>
                  </label>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col'>
      {loginLink}
        </div>
    </div>
  )
}

export default Login;