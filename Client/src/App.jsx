import React from 'react';
import WhereBeenForm from './WhereBeenForm.jsx'


const App = (props) => {
  return(
    <div className="container">
      <div className="row">
      <h1>Traveler's Hub</h1>
      <img src="airplane.png"/>
      </div>
      <div className="row">
      <h3>Welcome to Traveler's Hub, where you can keep track of where you've been, and plan future trips by connecting with those who have been there before!</h3>
      <h4>Click "Add Country" below to get started!</h4>
      </div>
      <div className="container">
        <WhereBeenForm/>
      </div>
    </div>
  )

}

export default App;