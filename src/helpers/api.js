/* eslint-disable no-param-reassign */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_API;

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-Auth-Token': '34a46c95352e4e62a88947219f5a7f70',
    },
});

const {
    get, post, put, delete: destroy,
} = apiClient;
export {
    get, post, put, destroy,
};
