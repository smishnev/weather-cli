import axios from 'axios';
import { getKey, TOKEN_DICTIONARY } from './storage.service.js'

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};


const getWeather = async (city) => {
    const token = await getKey(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Token not found, please set him throw command -t [API_KET]')
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric',
        }
    })

    return data;

};

export {getWeather, getIcon};

