import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "https://tasks-mngr.onrender.com/api";

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;
