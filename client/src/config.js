import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "https://pern-deploy-article.herokuapp.com/",
});
