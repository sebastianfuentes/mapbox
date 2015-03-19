// mapbox token for access do not change 
L.mapbox.accessToken = 'pk.eyJ1IjoieWFsa3UiLCJhIjoid28tT1l4TSJ9.h-0UdndkudRdKxk1tRoWCg'

// initialize the map
var map = L.mapbox.map('map', 'yalku.lekd3g9a', {
  doubleClickZoom: false,//no double click because with double we obtain the coordinates
    legendControl: {// legend for the actual map
        position: 'topright'
    }}).setView([22,-101],6);//coordinates for the view
map.legendControl.addLegend('<strong>My first map for yalku</strong>'); //content of the layer

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
map.featureLayer.on('ready', function(e) {
  var line = [];
  console.log("si entra a la funcion")
  this.eachLayer(function(marker) {
    alert(marker.getLatLng());
    line.push(marker.getLatLng());
  });

  var polyline_options = {
    color: '#000'
  };

  var polyline = L.polyline(line, polyline_options).addTo(map);
});

