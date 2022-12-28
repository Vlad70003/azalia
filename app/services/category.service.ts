import axios from "axios";

const API_URL = "https://fakestoreapi.com";

axios.defaults.baseURL = API_URL;

export const CategoryService = {
  async getAll() {
    return axios.get("/products/categories");
  },
};
