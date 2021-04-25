// API Call 
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

// layerGroups for earthquake 
var earthquakes = new.L.LayerGroup();

function createMap(earthquakes) {

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
    "Earthquakes": Earthquakes
};

 // Create the map object with options
var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 3,
    layers: [lightmap, bikeStations]
});

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(map);
}