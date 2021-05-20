import React,  { useState } from 'react';
import { WorldMap } from "react-svg-worldmap";


const TravelMap = (props) => {

  const {countries, count} = props;

  const dataArr = [];

  console.log('this is countries data at travel Map', countries)
  console.log('this is count', count)


  const dbData = countries ? countries.map((country) => {
      dataArr.push({"country": country.country_id,
      "value": 1})
  }) : []


  const data = dataArr;

  console.log('this is countries data', data, Array.isArray(dataArr))

if(dataArr.length < 1) {
  return (
    "You haven't visited anywhere yet! Start exploring or enter countries you have visited to see them on your map!"
  )
} else {
  const map = count % 2 === 0 ? <WorldMap key="1" color="dodgerblue" data={data} size="responsive" strokeOpacity={.4}/> : <WorldMap key="2" color="dodgerblue" data={data} size="responsive" strokeOpacity={.4} />
  return (
    <div>
     {map}
    </div>
  )

}
}

export default TravelMap;