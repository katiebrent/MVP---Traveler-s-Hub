import React from 'react';
import AddCountry from './AddCountry.jsx';
import ShowMeMyMap from './ShowMeMyMap.jsx';
import ShowMeMyStats from './ShowMeMyStats.jsx';
import ShowMeMyList from './ShowMeMyList.jsx'


const WhereBeenForm = (props) => {
  const {name, countries, setCountries} = props;

  return(
    <div>
      <div className="row">
        <div className="col text-center">
          <h2>Where Have You Been?</h2>
        </div>
        </div>
    <div className="row p-2">
      <AddCountry name={name} countries={countries} setCountries={setCountries}/>
      <ShowMeMyList countries={countries}/>
      <ShowMeMyStats countries={countries}/>
      <ShowMeMyMap countries={countries}/>
    </div>
    </div>

  )
}

export default WhereBeenForm;