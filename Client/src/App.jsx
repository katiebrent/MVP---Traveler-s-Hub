import React from 'react';
import WhereBeenForm from './WhereBeenForm.jsx'
import Login from './Login.jsx'


const App = (props) => {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
      <h1>Traveler's Hub</h1>

        </div>
      <img src="airplane.png"/>
        <div className="col text-right">
      <Login/>
        </div>
      </div>
      <div className="row">
      <h3>Welcome to Traveler's Hub, where you can keep track of where you've been, and plan future trips by connecting with those who have been there before!
      &nbsp;
      &nbsp;
      &nbsp;
      </h3>

      <h5>Click "Add Country" below to get started!</h5>
      </div>
      <div className="container border">
        <WhereBeenForm/>
      </div>
      <div className="container">

      </div>
    </div>
  )

}

export default App;