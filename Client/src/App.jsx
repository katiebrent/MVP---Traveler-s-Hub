import React, { useState } from 'react';
import axios from 'axios';
import WhereBeenForm from './WhereBeenForm.jsx';
import Login from './Login.jsx';
import WhereToForm from './WhereToForm.jsx';



const App = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [countries, setCountries] = useState(null);


  return(
    <div className="container border">
      <div className="row border">
        <div className="col">
      <h1>Traveler's Hub</h1>

        </div>
        <div className="col">
      <img src="airplane.png" className="img-fluid"/>
        </div>
        <div className="col text-right">
      <Login setName={setName} setEmail={setEmail} name={name} email={email} setCountries={setCountries}/>
        </div>
      </div>
      <div className="row">
      <h3 className="container text-center">Welcome to Traveler's Hub, where you can keep track of where you've been, and plan future trips by connecting with those who have been there before!
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      </h3>
      <h5>{ }</h5>
      </div>
      <div className="container border">
        <WhereBeenForm name={name}/>
      </div>
      <div className="container text-center">
      <img src="whereto.png" className="img-fluid"/>
      </div>
      <div className="container border">
        <WhereToForm/>
      </div>
    </div>
  )

}

export default App;