/*
    Assignment #4
    {Robiat Abdulazeez}
*/

$(function () {
  //check if the geolocation is enabled
  if (!navigator.geolocation) {
    //disabled
    $("#locationhere").html("<h1>Please enable your location</h1>");
  } else {
    //if it is enabled
    navigator.geolocation.getCurrentPosition(success, fail);

    //getting the coordinate,the success function
    function success(pos) {
      console.log(pos);
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      let accuracy = (pos.coords.accuracy / 1000).toFixed(2); // Convert accuracy from meters to kilometers

      //to show these in the div
      $("#locationhere").html("<p>Your latitude is: " + lat + "</p>");
      $("#locationhere").append("<p>Your longitude is: " + lon + "</p>");
      $("#locationhere").append("<p>Your Accuracy is: " + accuracy + "km</p>");

      // Check if location is stored in localStorage
      let storedLocation = localStorage.getItem("location");

      if (storedLocation) {
        // Parse stored location from localStorage
        storedLocation = JSON.parse(storedLocation);

        // Calculate distance using provided function
        let distance = calcDistanceBetweenPoints(
          lat,
          lon,
          storedLocation.latitude,
          storedLocation.longitude
        );
        // Display stored location and distance in #locationhere div
        $("#locationhere").append(
          `<p>Stored Location: Latitude: ${
            storedLocation.latitude
          }, Longitude: ${
            storedLocation.longitude
          }, Distance Traveled: ${distance.toFixed(2)} km</p>`
        );

        // Display welcome back message
        $("header").html(
          "<h2>" +
            `Welcome back to E Corp! You traveled ${distance.toFixed(
              2
            )} meters since your last visit.` +
            "</h2>"
        );
      } else {
        // If no stored location, display welcome message
        $("header").html("<h1>Welcome to E Corp!</h1>");
      }

      // Store current location in localStorage
      // Store current location in localStorage
      let currentLocation = {
        latitude: lat,
        longitude: lon
      };

      localStorage.setItem("location", JSON.stringify(currentLocation));
    }

    // Error callback function
    function fail() {
      // Display error message if geolocation is blocked
      $("#locationhere").html(
        "<h1>Geolocation is blocked. Please allow geolocation to use this application.</h1>"
      );
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
      var toRadians = function (num) {
        return (num * Math.PI) / 180;
      };
      var R = 6371000; // radius of Earth in metres
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);

      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    }
  }
});
