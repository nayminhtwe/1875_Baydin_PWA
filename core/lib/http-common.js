import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://1875pb.blueplanet.com.mm/api/`,
  // baseURL: `http://localhost:4500/api/`,
  headers: {
    Authorization: ''
  }
})