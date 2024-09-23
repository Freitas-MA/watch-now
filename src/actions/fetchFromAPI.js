import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

/**
 * Options for the API request.
 * 
 * @property {Object} params - The parameters for the API request.
 * @property {number} params.maxResults - The maximum number of results to return.
 * @property {Object} headers - The headers for the API request.
 * @property {string} headers["X-RapidAPI-Key"] - The API key for authentication.
 * @property {string} headers["X-RapidAPI-Host"] - The host for the API request.
 */
const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		"X-RapidAPI-Key": "53aa72baa1msh528e851baf9fd92p178a4fjsnc64fa1b6724e",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
