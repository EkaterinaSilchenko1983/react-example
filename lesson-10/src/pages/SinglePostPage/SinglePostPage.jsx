import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./single-post-page.module.scss";

import { getPostById } from "../../shared/api/posts";

const SinglePostPage = () => {
  const [post, setPost] = useState({});
  const params = useParams(); // динамична частина запроса, збираються в об'єкт за допомогою UseParams()
  const navigate = useNavigate(); // дозволяє примусовий перехід
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

  const goBack = () => navigate(-1); //можливо просто "/", "/posts", +1

  return (
    <div className="container">
      <button onClick={goBack}>Go back</button>
      <h1 className="page-title">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePostPage;
