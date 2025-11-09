import axios from 'axios'

const base = process.env.REACT_APP_API_URL || 'http://localhost:3030/api'
const http = axios.create({
  baseURL: base,
  withCredentials: true,
})

// Example helpers (keep your own if they exist)
export const httpService = {
  get: (url, config) => http.get(url, config).then(res => res.data),
  post: (url, data, config) => http.post(url, data, config).then(res => res.data),
  put: (url, data, config) => http.put(url, data, config).then(res => res.data),
  delete: (url, config) => http.delete(url, config).then(res => res.data),
}