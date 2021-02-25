const request = require("request");

// Use Mapbox Forward Geocoding API to convert location text into geographic coordinates

const geocode = (text, callback) => {
  // insert text into URL
  const mapboxurl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURI(text) +
    ".json?&access_token=pk.eyJ1IjoiY2hyYXNocHVuIiwiYSI6ImNrbGNydTFuYjFueXcyb212ajh5Zml5dG8ifQ.Dhu81LEAZfDbv2aDou6crQ&limit=1";

  // request lat & long geo coordinates
  request({ url: mapboxurl, json: true }, (error, response) => {
    if (error) {
      // if network connection fails
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      // if search fails
      callback("Unable to find location! Try another search.", undefined);
    } else {
      // fulfilled response
      callback(undefined, {
        url:
          "http://api.weatherstack.com/current?access_key=8e6bce7d1de78c5e4dc1b8c14b0caf0a&query=" +
          response.body.features[0].center[1] +
          "," +
          response.body.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
