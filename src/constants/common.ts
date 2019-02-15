import { default as axios } from 'axios';

const HOST = 'https://lazurey.github.io/jlpt-simulator/start';

export const CODE_REPO = 'https://github.com/lazurey/lazurey.github.io/tree/master/jlpt-simulator';
export const ASSETS_BASE = (process.env.NODE_ENV === 'production')
    ? `${HOST}`
    : '';

export const apiClient = axios.create({
  baseURL: ASSETS_BASE,
});
