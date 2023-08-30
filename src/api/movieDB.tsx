import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '3b631b0a18599ad865e9044ad200434e',
    language: 'es-ES',
  },
});

export default movieDB;
