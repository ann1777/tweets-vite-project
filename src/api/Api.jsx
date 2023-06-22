import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6492eafc428c3d2035d0e662.mockapi.io/api/",
});
