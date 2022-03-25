import {
  BASE_URL
} from '../constants/config'
import axios from 'axios'

const conf = {
  baseURL: BASE_URL,
}

const http = axios.create(conf)


export default http;