import styles from "./home-page.module.scss";
import Posts from "../../modules/Posts/Posts";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="page-title">Home page</h1>
      <Posts />
    </div>
  );
};

export default HomePage;
