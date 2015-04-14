var map, inputCoordinates, inputLat, inputLng, markerLayer;

function creatingMap() {
  L.mapbox.accessToken = 'pk.eyJ1IjoieWFsa3UiLCJhIjoid28tT1l4TSJ9.h-0UdndkudRdKxk1tRoWCg';
  map = L.mapbox.map('map', 'yalku.lekd3g9a', {
    doubleClickZoom: false,
      legendControl: {// legend for the actual map
      position: 'topright'
      }}).setView([inputLat, inputLng], 10);//coordinates for the view
  //global var to define if the input changes
  var inputCoordinates;//defining variable coordinates to bring the values in the inputs
}

function loadingMap() {
  map.legendControl.addLegend('<strong>Yal ku</strong>'); //content of the layer
  map.on('ready',function setExistantMarker(coordinates){
    var inputCoordinates = onLoads();//defining variable coordinates to bring the values in the inputs
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
                inputCoordinates.ilongitude,
                inputCoordinates.ilatitude
              ]
            },
            "properties": {
              "title": "Algun Lugar por ahi",
              "marker-color": "#3BCF56",
              "marker-size": "large",
              "marker-symbol": "rocket"
            }
          }
        ]
      }
    ];
    markerLayer = L.mapbox.featureLayer().addTo(map);//we add another layer for the markers and add to the map
    markerLayer.setGeoJSON(marker);//we add the marker to the map
  });
}

function changingMap() {
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
            "properties":{
              "title": "Algun Lugar por ahi",
              "marker-color": "#3C91A7",
              "marker-size": "large",
              "marker-symbol": "rocket"
            }
          }
        ]
      }
    ];
    markerLayer.clearLayers();
    markerLayer = L.mapbox.featureLayer().addTo(map);//we add another layer for the markers and add to the map
    markerLayer.setGeoJSON(marker);//we add the marker to the map
    document.getElementById('latitude').value = latitude;//we add the latitude to the input latitude
    document.getElementById('longitude').value = longitude;//we add the longitude to the input longitude
    return markerLayer;
  });
}
window.onload = function () {
  inputLat = document.getElementById('latitude').value;
  inputLng = document.getElementById('longitude').value;

  if (inputLat === "" && inputLng === "") {
    inputLat = 22;
    inputLng = -101;
    creatingMap();
    loadingMap();
    changingMap();
  } else {
    creatingMap();
    loadingMap();
    changingMap();
  }
};

function onLoads() {
  var returnv = {
    ilatitude: inputLat,
    ilongitude: inputLng
  };
  return returnv;//return the object 
}