const mongoose = require('mongoose');
const db = require('./travelSchema.js');

mongoose.connect('mongodb://localhost/travelSchema',
{useNewUrlParser: true, useUnifiedTopology: true});

let addUser = (name, email) => {
  var user = {
    "name": name,
    "email": email,
    countries: []
  }
  db.traveler.create(user)
  .then((resp) => {
    cb(null, resp)
  })
  .catch((err) => {
    console.log('error adding user')
  })
}

module.exports.addUser = addUser;