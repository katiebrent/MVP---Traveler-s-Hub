const mongoose = require('mongoose');

let travelSchema = mongoose.Schema({
  name: String,
  email: String,
  countries: [{
    country_id: String,
    country_name: String,
    budget: String
  }],
},{collection: "travelers"}
);

let traveler = mongoose.model('traveler', travelSchema);

module.exports.traveler = traveler;