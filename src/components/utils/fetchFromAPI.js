import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '53aa72baa1msh528e851baf9fd92p178a4fjsnc64fa1b6724e',    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// TODO - Fix the API error caught ReferenceError: process is not defined
//     at fetchFromAPI.js?t=1684334314364:10:23