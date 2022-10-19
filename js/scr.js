var map = L.map('map').setView([64.943434, 43.719561], 7);
L.tileLayer('https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

omnivore.kml('kml/arh.kml').addTo(map);
