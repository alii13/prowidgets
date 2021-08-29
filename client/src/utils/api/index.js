import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:5000/",
	responseType: "json",
});
// change the baseURL to heroku url once published to heroku eg: https://poweup-backend.herokuapp.com/
