// mapbox token for access do not change 
L.mapbox.accessToken = 'pk.eyJ1IjoieWFsa3UiLCJhIjoid28tT1l4TSJ9.h-0UdndkudRdKxk1tRoWCg'
var marker;
var markerLayer;
// initialize the map
var map = L.mapbox.map('map', 'yalku.lekd3g9a', {
	doubleClickZoom: false,//no double click because with double we obtain the coordinates
    legendControl: {// legend for the actual map
        position: 'topright'
    }}).setView([19.41,-98],7);//coordinates for the view
map.on('dblclick', function(coordinates) {//function to obtain the coordinates with double click on the map
    var latitude = coordinates.latlng.lat;
    var longitude = coordinates.latlng.lng;
// all coordinates and info of the marker in here
    marker = [
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
                          "marker-color": "#1D83D6",
                          "marker-size": "medium",
                          "marker-symbol": "rocket"
                        }
                      }
                    ]
                  }
                  ];
var markerLayer = L.mapbox.featureLayer().addTo(map);//we add another layer for the markers and add to the map
markerLayer.setGeoJSON(marker);//we add the marker to the map
});

map.legendControl.addLegend('<strong>My first map for yalku</strong>');//content of the layer

function removeLayer(){  
  console.log(marker)
  map.removeLayer(markerLayer)
  console.log("se supone que esta borrando");
  console.log(marker)
}