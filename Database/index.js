const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/travelSchema',
{useNewUrlParser: true, useUnifiedTopology: true});

let travelSchema = mongoose.Schema({
  name: String,
  email: String,
  countries: [{
    country_id: Number,
    country_name: String,
    continent: String,
    budget: String
  }],
},{collection: "travelers"}
);

let traveler = mongoose.model('traveler', travelSchema);

module.exports.traveler = traveler;