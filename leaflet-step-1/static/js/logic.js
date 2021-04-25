// API Call 
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

// layerGroups for earthquake 
var earthquakes = new.L.LayerGroup();

// Create the tile layer that will be the background of our map 
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

// Create a baseMaps object to hold the lightmap layers 
var baseMaps = {
    "Light Map": lightmap
};

  // Create an overlayMaps object to hold the bikeStations layer
var overlayMaps = {
    "Bike Stations": bikeStations
};

