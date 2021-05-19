import React from 'react';
import { WorldMap } from "react-svg-worldmap";


const TravelMap = (props) => {
  const data =
  [
    { country: "cn", value: 1 }, // china
    { country: "in", value: 1 }, // india
    { country: "us", value: 1 }  // united states
  ]
  return (
    <div>
      <WorldMap color="dodgerblue" data={data} size="lg" />
    </div>
  )
}

export default TravelMap;