import axios from "axios";

class Api {
  constructor(baseURL = "http://localhost:5000") {
    this.baseURL = baseURL;
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
