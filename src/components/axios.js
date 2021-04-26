import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-7b84c/us-central1/api' //The API (Cloud function) URL
});

export default instance;