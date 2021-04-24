var mymap = L.map('mapid').setView([54.443838, 18.555676], 16);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);
	L.marker([54.442537, 18.555837]).addTo(mymap)
		.bindPopup("<b>Uniwersytet Gdański</b><br />Wydział Zarządzania").openPopup();

    L.marker([54.445077, 18.554798]).addTo(mymap)
		.bindPopup("<b>Uniwersytet Gdański</b><br />Wydział Ekonomiczny").openPopup();

    L.marker([54.445079, 18.553566]).addTo(mymap)
		.bindPopup("<b>Uniwersytet Gdański</b><br />Centrum Dydaktyczne").openPopup();

	L.circle([54.444829, 18.557221], 40, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Komenda Miejska Policji w Sopocie");
	L.polygon([
		[54.44539, 18.552436],
		[54.445127, 18.552513],
		[54.445161, 18.55292],
        [54.445416, 18.552772]
	], {
		color: 'green',
		fillColor: '#76EEC6',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Parking dla studentów");
    L.polygon([
		[54.445096, 18.552518],
		[54.444984, 18.552562],
		[54.445071, 18.553218],
        [54.445368, 18.553124],
        [54.445337, 18.552864],
        [54.445149, 18.552949]
	]).addTo(mymap).bindPopup("Parking dla pracowników");
	var popup = L.popup();
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}
	mymap.on('click', onMapClick);
