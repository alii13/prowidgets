import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://poweup-backend.herokuapp.com/',
    responseType: 'json'
});
