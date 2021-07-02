import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://1875pb.blueplanet.com.mm/api/`,
  // baseURL: `http://localhost:4500/api/`,
  headers: {
    Authorization: ''
  }
})

export const Horo = axios.create({
  baseURL: `https://chatbothoro.blueplanet.com.mm/api/v1/`,
  auth: {
    username: 'admin2021@horo.com',
    password: 'blue0cean@2021'
  }
})