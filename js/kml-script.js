var kmlLayer = new L.KML("kml/arh.kml", {
    async: true,
});
                                                                  
kmlLayer.on("loaded", function(e) { 
    map.fitBounds(e.target.getBounds());
});


map.addLayer(kmlLayer);
