import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://1875pb.blueplanet.com.mm/api/`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})