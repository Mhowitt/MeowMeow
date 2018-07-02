import axios from 'axios'


export async function apiCall(method, path, data = {}) {
  try {
    let res = await axios[method](path, data);
    return res.data;
  } catch (err) {
    return Promise.reject(err.response.data.error);
  }
}