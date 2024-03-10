import axios from "axios";

class Api {
  constructor() {
    this.baseURL = process.env.EXPO_PUBLIC_QDRANT_URL;
  }

  async get(endpoint, params = {}) {
    try {
      return await axios.get(`${this.baseURL}/${endpoint}`, { params });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async post(endpoint, body = {}, params = {}) {
    try {
      return await axios.post(`${this.baseURL}/${endpoint}`, body, { params });
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

export default Api;
