import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "https://pern-article.herokuapp.com/",
});
