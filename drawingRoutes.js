L.mapbox.accessToken = 'pk.eyJ1IjoieWFsa3UiLCJhIjoid28tT1l4TSJ9.h-0UdndkudRdKxk1tRoWCg';
var map = L.mapbox.map('map', 'yalku.lekd3g9a', {
  doubleClickZoom: false,//no double click because with double we obtain the coordinates
    legendControl: {// legend for the actual map
    position: 'topright'
    }}).setView([22,-101],6);//coordinates for the view
map.legendControl.addLegend('<strong>Drawing route yalku</strong>'); //content of the layer

var featureGroup = L.featureGroup().addTo(map);
var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: featureGroup
  },
  draw: {
    polygon: false,
    polyline: true,
    rectangle: false,
    circle: false,
    marker: false
  }
}).addTo(map);

map.on('draw:created', showPolygonArea);
map.on('draw:edited', showPolygonAreaEdited);

function showPolygonAreaEdited(e) {
  e.layers.eachLayer(function(layer) {
    showPolygonArea({ layer: layer });
  });
}
function showPolygonArea(e) {
  featureGroup.clearLayers();
  featureGroup.addLayer(e.layer);
  var routeArray = e.layer.getLatLngs();
  getLatLngRoute(routeArray);
}
function getLatLngRoute(routeArray) {
  var routeArrayLat, routeArrayLng;
  for (var i = 0; i < routeArray.length; i++) {
    routeArrayLat = routeArray[i].lat;
    routeArrayLng = routeArray[i].lng;
    document.getElementById('id_latitude'+i).value = routeArrayLat;
    document.getElementById('id_longitude'+i).value = routeArrayLng;
  }
}