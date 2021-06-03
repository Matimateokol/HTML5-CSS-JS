var mymap = L.map('map').setView([0, 0], 1);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", (e) => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.response);
    for (var i = 0; i < 10; i++) {
      L.marker([data[i].address.geo.lat, data[i].address.geo.lng])
        .addTo(mymap)
        .bindPopup(
          data[i].name +
            ", " +
            data[i].address.street +
            ", " +
            data[i].address.suite +
            ", " +
            data[i].address.city +
            ", " +
            data[i].address.zipcode
        )
    }
  }
});

xhr.open('GET','https://jsonplaceholder.typicode.com/users', true)
xhr.send();

