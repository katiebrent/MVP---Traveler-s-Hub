import React from 'react';
import ReactSvgPieChart from 'react-svg-piechart';
import { PieChart } from 'react-minimal-pie-chart';

const Stats = (props) => {
  const {countries} = props;

  const count = countries.length;

  const findTier = (tier) => {
    var tierCount = 0;
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].budget === tier) {
        tierCount++
      }
    }
    return tierCount
  }

  const budget = findTier('Roughing It');
  const midTier = findTier('Mid Tier');
  const luxury = findTier('Luxury Travel');

  const max = Math.max(budget, midTier, luxury);

  var travelerType = '';
  var accommodations = '';

  if(max === budget) {
    travelerType = 'Budget';
    accommodations = 'Hostels and/or CouchSurfing';
  } else if ( max === midTier) {
    travelerType = 'Middle Tier';
    accommodations = 'AirBnbs and/or mid-tier Hotels';
  } else {
    travelerType = 'Luxury';
    accommodations = 'extravagant Resorts and/or Villas';
  }

  const pieData = [
    {title: 'Budget Travel', value: budget, color: '#4FC3F7', key: 'Roughing It'},
    {title: 'Mid Priced Travel', value: midTier, color: '#0288D1', key: 'Mid Tier'},
    {title: 'Luxury Travel', value: luxury, color: '#0D47A1', key: 'Luxury'}
  ]

  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
  };



  if(countries.length ===0) {
    return "You haven't visited anywhere yet! Start exploring or enter countries you have visited to see them on your map!"
  } else {
    return(
      <div>
        <h4>You have been to {count} countries!</h4>
        <div className="row text-center p-5">
          <PieChart data={pieData} label={({dataEntry}) => `${dataEntry.key} ${Math.round(dataEntry.percentage)}%`} labelStyle={{...defaultLabelStyle,}} labelPosition={70}/>
        </div>
        <h5>
          You are typically a {travelerType} traveler, staying in {accommodations} on {max} of your trips.
        </h5>
      </div>
    )
  }
}

export default Stats;