const mongoose = require('mongoose');
const db = require('./travelSchema.js');

mongoose.connect('mongodb://localhost/travelSchema',
{useNewUrlParser: true, useUnifiedTopology: true});

let fetchUser = (username, cb) => {
  db.travelers.find({name: username.name})
  .then ((response) => {
    console.log('this is the response on login', response)
    cb(null, response)
  })
  .catch((err) => {
    console.log('unable to find user', err)
  })
}

let addUser = (name, email, cb) => {
  var user = {
    "name": name,
    "email": email,
    countries: []
  }
  db.travelers.create(user)
  .then((resp) => {
    cb(null, resp)
  })
  .catch((err) => {
    console.log('error adding user')
  })
}

let addCountry = (request, cb) => {
  db.travelers.find({name: request.name})
  .then((resp) => {
    const currentCountries = resp[0].countries;
    console.log('this is countries', currentCountries);
    const addCountry = {
      country_id: request.countryObj.alpha2,
      country_name: request.countryObj.name,
      budget: request.budget
    }
    currentCountries.push(addCountry)
    db.travelers.updateOne({name: request.name}, {countries: currentCountries})
    .then ((saved) => {
      cb(null, saved)
    })
  })
  .catch((err) => {
    console.log('error adding new country')
  })
}

module.exports.addUser = addUser;
module.exports.addCountry = addCountry;
module.exports.fetchUser = fetchUser;