import axios from 'axios';

const axios = require('axios');
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

const options = {
  url: BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': '53aa72baa1msh528e851baf9fd92p178a4fjsnc64fa1b6724e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}