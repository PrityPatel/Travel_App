require('dotenv').load();
var request = require('request');
var baseURL = "https://api.instagram.com/v1/locations/";
var clientID = process.env.INSTAGRAM_CLIENT_ID;

var get = function(locationId, callback) {
  request(baseURL + locationId + clientID, function(error, response, body) {
    console.log('body: ' + body.constructor);
    callback(body);
  });

};

module.exports = {
  get: get
};
