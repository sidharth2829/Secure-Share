import Constants from 'expo-constants'
import axios from 'axios'

const API_URL = Constants.expoConfig?.extra?.API_URL || Constants.manifest?.extra?.API_URL || 'http://localhost:4000'

export const api = axios.create({ baseURL: `${API_URL}/api`, timeout: 10000 })
