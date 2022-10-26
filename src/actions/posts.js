import axios from "axios";

export const getPosts = async () =>
  await axios(`${import.meta.env.VITE_APP_API}/posts`);

export const getPostById = async (id) =>
  await axios(`${import.meta.env.VITE_APP_API}/posts/${id}`);

export const getPostComments = async (id) =>
  await axios(`${import.meta.env.VITE_APP_API}/posts/${id}/comments`);
