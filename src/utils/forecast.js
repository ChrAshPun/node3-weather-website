const request = require("request");

// Use Weatherstack API to get current forecast

const forecast = (url, callback) => {
  request({ url, json: true }, (error, response) => {
    console.log(response.body);
    callback(undefined, {
      location: response.body.location.name,
      forecast:
        response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out. It feels like " +
        response.body.current.feelslike +
        " degrees out. The humidity is " +
        response.body.current.humidity +
        "%.",
    });
  });
};

module.exports = forecast;
