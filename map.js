// mapbox token for access do not change 
L.mapbox.accessToken = 'pk.eyJ1IjoieWFsa3UiLCJhIjoid28tT1l4TSJ9.h-0UdndkudRdKxk1tRoWCg'

// initialize the map
var map = L.mapbox.map('map', 'yalku.lekd3g9a', {
  doubleClickZoom: false,//no double click because with double we obtain the coordinates
    legendControl: {// legend for the actual map
        position: 'topright'
    }}).setView([22,-101],6);//coordinates for the view
map.legendControl.addLegend('<strong>My first map for yalku</strong>'); //content of the layer

var polyline = L.polyline([]).addTo(map);

// Keep a counter of how many points we've added to the map.
var pointsAdded = 0;

// Start drawing the polyline.

function add() {

    // `addLatLng` takes a new latLng coordinate and puts it at the end of the
    // line. You optionally pull points from your data or generate them. Here
    // we make a sine wave with some math.
    polyline.addLatLng(
        L.latLng(
            Math.cos(pointsAdded / 40) * 30,
            pointsAdded));

    // Pan the map along with where the line is being added.
    map.setView([0, pointsAdded], 3);

    // Continue to draw and pan the map by calling `add()`
    // until `pointsAdded` reaches 360.
    if (++pointsAdded < 400) window.setTimeout(add, 100);
    console.log(pointsAdded)
}

map.on('dblclick', function setMarker(coordinates) {//function to obtain the coordinates with double click on the map
    var latitude = coordinates.latlng.lat;
    var longitude = coordinates.latlng.lng;
    var position = [longitude,latitude];
// all coordinates and info of the first marker in here
var marker = [
                {
                "type": "FeatureCollection",
                "features": [
                  {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                      "type": "Point",
                      "coordinates": [
                        longitude,
                        latitude
                      ]
                    },
                    "properties": {
                      "title": "The Pool ",
                      "marker-color": "#3BCF56",
                      "marker-size": "medium",
                      "marker-symbol": "rocket"
                    }
                  }
                ]
              }
              ];
var markerLayer = L.mapbox.featureLayer().addTo(map);//we add another layer for the markers and add to the map
markerLayer.setGeoJSON(marker);//we add the marker to the map
console.log("si imprime el marcador");
return marker;
});
map.featureLayer.on('dblclick', function(e) {
  var line = [];

  this.eachLayer(function(marker) {
    alert(marker.getLatLng());
    line.push(marker.getLatLng());
  });

  var polyline_options = {
    color: '#000'
  };

  var polyline = L.polyline(line, polyline_options).addTo(map);
});

