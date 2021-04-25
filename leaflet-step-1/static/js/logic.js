// URL 
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// layerGroups for earthquake 
var earthquakes = L.layerGroup();

// Create the tile layer that will be the background of our map 
var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

// Create the map object with options
var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 3,
    layers: [lightMap, earthquakes]
});

d3.json(url, function(quakeData){
    console.log(quakeData);
    function markerSize (magniture){
        return magnitude * 4;
};
    function chooseColor(depth){
        switch(true){
            case depth > 90:
                return "red";
        case depth > 70:
            return "darkorange";
        case depth > 50:
            return "orange";
        case depth > 30:
            return "yellow";
        case depth > 10:
            return "lightgreen";
        default:
        return "green";
        }
    }

L.geoJSON(quakeData, {
    layer: function (feature,coordinate){
        return L.Marker(coordinate,
            {
                radius: markerSize(feature.properties.mag),
                fillColor: color(feature.geometry.coordinates[2]),
                opacity: 0.5,
                weight: 0.5,
                color: "black",
                stroke: true
            }
        );
    },
    onEachFeature: function(feature, layer) {
        console.log(feature);
        layer.bindPopup("<h3>Location: " + feature.properties.place + "</h3><hr><p>Date: "
        + new Date(feature.properties.time) + "</p><hr><p>Magnitude: " + feature.properties.mag + "</p>");
    }
}).addTo(earthquakes);
earthquakes.addTo(map);

// Legend
var legend = L.control({position: "bottomright"});
legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend"),
    depth = [-10, 10, 30, 50, 70, 90];

    div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
for (var i =0; i < depth.length; i++) {
    div.innerHTML += 
    '<i style="background:' + chooseColor(depth[i] + 1) + '"></i> ' +
        depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
    }
    return div;
};
legend.addTo(map);
});
