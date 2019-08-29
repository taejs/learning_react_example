import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=C3D4kybXXCQUXLo4kzNtqrJSZh8yhTzwcFcVVtxD&date=${date}`);
}

