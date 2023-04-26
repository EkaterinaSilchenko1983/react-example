import axios from "axios";

const postsInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const getPosts = async () => {
  return postsInstance.get("/");
};
