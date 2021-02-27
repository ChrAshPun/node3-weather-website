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

module.exports = forecast;
