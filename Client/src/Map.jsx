import React,  { useState } from 'react';
import { WorldMap } from "react-svg-worldmap";


const TravelMap = (props) => {
  const dataArr = [];


  const [count, setCount] = useState(dataArr.length)
  const {countries} = props;


  // const defaultData = [{ country: "us", value: 1 }]
  console.log('this is countries data at travel Map', countries)


  const dbData = countries.map((country) => {
      dataArr.push({"country": country.country_id,
      "value": 1})
  })


  const data = dataArr;

  console.log('this is countries data', data, Array.isArray(dataArr))

if(dataArr.length < 1) {
  return (
    "You haven't visited anywhere yet! Start exploring or enter countries you have visited to see them on your map!"
  )
} else {
  return (
    <div>
      {dataArr.length % 2 === 0 ? <WorldMap color="dodgerblue" data={data} size="responsive" /> : <WorldMap color="dodgerblue" data={data} size="responsive" />}
    </div>
  )

}
}

export default TravelMap;