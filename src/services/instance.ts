import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_TMDB_BASE_URL;
const API_ACCESS_TOKEN = import.meta.env.VITE_APP_TMDB_API_ACCESS_TOKEN;

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${API_ACCESS_TOKEN}`,
		Accept: 'application/json',
	},
});
