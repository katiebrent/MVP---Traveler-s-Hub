import React from 'react';
import AddCountry from './AddCountry.jsx';
import ShowMeMyMap from './ShowMeMyMap.jsx';
import ShowMeMyStats from './ShowMeMyStats.jsx';


const WhereBeenForm = (props) => {
  const {name} = props;

  return(
    <div>
      <div className="row">
        <div className="col text-center">
          <h4>Where Have You Been?</h4>
        </div>
        </div>
    <div className="row">
      <AddCountry name={name}/>
      <ShowMeMyStats/>
      <ShowMeMyMap/>
    </div>
    </div>

  )
}

export default WhereBeenForm;