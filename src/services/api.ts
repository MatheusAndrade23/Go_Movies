import axios from 'axios';

import config from '../config';

export const dbCEP = axios.create({
  baseURL: config.dbUrlCEP,
});

export const db = axios.create({
  baseURL: config.dbUrl,
});
