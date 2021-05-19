import React, { useState } from 'react';
import WhereBeenForm from './WhereBeenForm.jsx';
import Login from './Login.jsx';
import WhereToForm from './WhereToForm.jsx'


const App = (props) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [logInClick, setLogInClick] = useState(false);





  return(
    <div className="container">
      <div className="row">
        <div className="col">
      <h1>Traveler's Hub</h1>

        </div>
      <img src="airplane.png"/>
        <div className="col text-right">
      <Login setName={setName} setEmail={setEmail} setLogInClick={setLogInClick}/>
        </div>
      </div>
      <div className="row">
      <h3>Welcome to Traveler's Hub, where you can keep track of where you've been, and plan future trips by connecting with those who have been there before!
      &nbsp;
      &nbsp;
      &nbsp;
      </h3>
      <h5>{ }</h5>
      </div>
      <div className="container border">
        <WhereBeenForm/>
      </div>
      <div className="container border">
        <WhereToForm/>
      </div>
    </div>
  )

}

export default App;