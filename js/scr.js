var map = L.map('map').setView([64.54578, 40.54916],12);
L.tileLayer('https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

/* omnivore.kml('kml/arh.kml').addTo(map);
 */

var customLayer = L.geoJson(null, {
    style: function(feature) {
        return { color: '#ff0000' };
    }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/1arh.kml', null, customLayer).addTo(map); 

//
var customLayer2 = L.geoJson(null, {
  style: function(feature) {
      return { color: '#9c27b0' };
  }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/2arh.kml', null, customLayer2).addTo(map);


//
var customLayer3 = L.geoJson(null, {
  style: function(feature) {
      return { color: '#0000ff' };
  }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/2_arh.kml', null, customLayer3).addTo(map);


//
var customLayer4 = L.geoJson(null, {
  style: function(feature) {
      return { color: '#0f9d58' };
  }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/3arh.kml', null, customLayer4).addTo(map);


//
var customLayer5 = L.geoJson(null, {
  style: function(feature) {
      return { color: '#424242',
               weight: 0.8
    };
  }
});
// this can be any kind of omnivore layer
omnivore.kml('kml/trot.kml', null, customLayer5).addTo(map);

var customLayerOld = L.geoJson(null, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon: oldIcon}).bindPopup(feature.properties.name + '<br>lon: ' + feature.geometry.coordinates[0] + '<br>lat: ' + feature.geometry.coordinates[1]);
    }
 });