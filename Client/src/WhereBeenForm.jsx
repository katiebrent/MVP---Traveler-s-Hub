import React from 'react';
import AddCountry from './AddCountry.jsx';
import ShowMeMyMap from './ShowMeMyMap.jsx';
import ShowMeMyStats from './ShowMeMyStats.jsx';


const WhereBeenForm = (props) => {

  return(
    <div className="row">
      <AddCountry/>
      <ShowMeMyStats/>
      <ShowMeMyMap/>
    </div>

  )
}

export default WhereBeenForm;