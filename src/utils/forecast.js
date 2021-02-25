const request = require("request");

// Use Weatherstack API to get current forecast

const forecast = (url, callback) => {
    request({url, json: true }, (error, response) => {
        callback(undefined, {
            forecast: response.body.current.weather_descriptions[0],
            location: response.body.location.name
          });
    });
}




// (error, response) => {
//     const url = response.url(); // weatherstack API endpoint with lat & long coordinates
  
//     // request current forecast based on lat & long coordinates
//     request({ url: url, json: true }, (error, response) => {
//       return response.body
//     });
//   };

  


module.exports = forecast;
