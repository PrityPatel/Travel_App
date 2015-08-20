var request = require('request');
var baseURL = "http://www.numbeo.com/api/city_prices?";
var clientID = "api_key=n584lhb87k93ms&query=";

//http://www.numbeo.com/api/city_prices?api_key=n584lhb87k93ms&query=London

var get = function(locationName, callback) {
  request(baseURL + clientID + locationName, function(error, response, body) {
    callback(body);
  });
};

module.exports = {
  get: get
};
