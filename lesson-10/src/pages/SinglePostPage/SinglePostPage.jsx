import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./single-post-page.module.scss";

import { getPostById } from "../../shared/api/posts";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const params = useParams(); // динамична частина запроса, збираються в об'єкт за допомогою UseParams()

  console.log(params);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await getPostById(params.id);

        console.log(data);
        setPost(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePostPage;
