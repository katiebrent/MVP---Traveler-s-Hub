import React from 'react';

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



  if(countries.length ===0) {
    return "You haven't visited anywhere yet! Start exploring or enter countries you have visited to see them on your map!"
  } else {
    return(
      <div>
        <h4>You have been to {count} countries!</h4>
        <div>

        </div>
      </div>
    )
  }
}

export default Stats;