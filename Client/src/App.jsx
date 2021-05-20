import React, { useState } from 'react';
import axios from 'axios';
import WhereBeenForm from './WhereBeenForm.jsx';
import Login from './Login.jsx';
import WhereToForm from './WhereToForm.jsx';



const App = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [countries, setCountries] = useState([]);


  return(
    <div className="container border rounded bg-light p-2 shadow-lg">
      <div className="row p-2">
        <div className="col-4">
      <h1>Traveler's Hub</h1>

        </div>
        <div className="col-4">
      <img src="airplane.png" className="img-fluid"/>
        </div>
        <div className="col text-right">
      <Login setName={setName} setEmail={setEmail} name={name} email={email} setCountries={setCountries}/>
        </div>
      </div>
      <div className="row">
      <h4 className="container text-center bg-primary rounded p-2 m-2">Welcome to Traveler's Hub, where you can keep track of where you've been, and plan future trips by connecting with those who have been there before!
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      </h4>
      <h5>{ }</h5>
      </div>
      <div className="row">
      <div className="container shadow-sm rounded">
        <WhereBeenForm name={name} countries={countries} setCountries={setCountries}/>
      </div>
      </div>
      <div className="row">
      <div className="container text-center">
      <img src="whereto.png" className="img-fluid"/>
      </div>
      </div>
      <div className="row">

      <div className="container shadow rounded">
        <WhereToForm/>
      </div>
      </div>
      <div className="row text-center t-2">
      <h5>{ }</h5>
      <h4 className="container text-center bg-primary rounded p-2 m-2">Safe Travels!
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      </h4>
      </div>
    </div>
  )

}

export default App;