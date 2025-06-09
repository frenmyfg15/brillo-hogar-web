
import axios from 'axios'
import { api } from '../const/api'

const apiClient = axios.create({
  baseURL: `${api}`,
})

export default apiClient
