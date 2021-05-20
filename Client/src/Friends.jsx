import React from 'react';

const Friends = (props) => {
  const {country, friends} = props;

  const countryName = !country ? 'America' : country.name;

 if (friends.length === 0 ) {
   return(
     <div>No one in our community has been to {countryName} yet. Be the first!</div>
   )
 } else {
   return(
     <div className= "row">
       <div className="col">
         <ul className="unstyled">USERNAME
           {friends.map((friend) => {
             return(
               <li key={friend.name}>
                 <div>{friend.name}</div>
               </li>
             )
           })}
         </ul>
       </div>
       <div className="col">
         <ul className="unstyled">TRAVEL TIER
           {friends.map((friend) => {
             var selectedBudget = '';
             for(var i = 0; i< friend.countries.length; i++) {
               var currentCountry = friend.countries[i];
               if (currentCountry.country_id === country.alpha2) {
                 selectedBudget = currentCountry.budget;
                 stop;
               }
             }
             console.log('this is friend', friend)
             return(
               <li key={friend.name}>
                 <div>{selectedBudget}</div>
               </li>
             )
           })}
         </ul>
       </div>
       <div className="col">
         <ul className="unstyled">CONTACT INFO
           {friends.map((friend) => {
             return(
               <li key={friend.name}>
                 <div>{friend.email}</div>
               </li>
             )
           })}
         </ul>
       </div>
     </div>
   )
 }
}

export default Friends;