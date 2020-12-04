import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://1875pb.blueplanet.com.mm/api/`,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYwNTQ5OTkxN30.cW49ls9-1aRANVvbQReNGW4qqMfab-cjLJxFu4qmDaM'
  }
})