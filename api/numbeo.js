require('dotenv').load();
var request = require('request');
var baseURL = "http://www.numbeo.com/api/city_prices?api_key=";
var clientID = process.env.NUMBEO_API_KEY;



var get = function(locationName, callback) {
  request(baseURL + clientID + locationName, function(error, response, body) {
    callback(body);
  });
};

module.exports = {
  get: get
};
