// URL 
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// layerGroups for earthquake 
var earthquakes = new.L.LayerGroup();

// Create the tile layer that will be the background of our map 
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
});

// Create the map object with options
var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 3,
    layers: [lightmap, earthquakes]
});

d3.json(url, function(quakeData){
    function markerSize (magniture)
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
        return L.marker(coordinate,
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
    
})
    
)



