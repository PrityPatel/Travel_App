var request = require('request');
var baseURL = "https://api.instagram.com/v1/locations/";
var clientID = "/media/recent?client_id=cde1c4dc8c754eb5972571ef38e6b6e3";


// 167346217/media/recent?client_id=cde1c4dc8c754eb5972571ef38e6b6e3"

var get = function(locationId, callback) {
  request(baseURL + locationId + clientID, function(error, response, body) {
    console.log('body: ' + body.constructor);
    callback(body);
  });

};

module.exports = {
  get: get
};
