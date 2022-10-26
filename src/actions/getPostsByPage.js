import axios from "axios";

export const getPostsByPage = async () =>
  await axios.get(`${import.meta.env.VITE_APP_API}/posts?_start=${0}&_limit=${8}`);
