const axios = require('axios');

const getClima = async (lat, lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=60ffe2227c7b5ff92e2678c1de355c06&units=metric&lang=ca`);
	return resp.data.main.temp;
}

module.exports = {
	getClima
}