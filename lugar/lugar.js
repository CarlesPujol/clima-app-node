const axios = require('axios');

const getLugarLatLng = async( direccion ) => {
	
	const encodeUlr = encodeURI(direccion);

	const instance = axios.create({
	  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json?access_token=pk.eyJ1IjoiY2FybGVzcHVqb2wiLCJhIjoiY2tqaG5xaWlkNDZ6ZjJxbnZwajhrOXhyYiJ9.UxMkM4WI7GnWoIhSJ6Z2MQ`
	});

	const resp = await instance.get();
		// console.log(resp.data.features[0]);
	if (resp.data.features.length === 0){
		// throw new Error(`No hay resultados para $(direccion)`);
	}
	
	const data = resp.data.features[0];
	const direc = data.text;
	const lat = data.center[1];
	const lng = data.center[0];
	
	return {
		direc,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}

