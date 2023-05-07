import { useSelector } from "react-redux";

import styles from "./my-favorite-books-page.module.scss";

const MyFavoriteBooksPage = () => {
  const favoriteBooks = useSelector((store) => {
    return store.filter(({ favorite }) => favorite); // повертаємо лише ті книги в яких поле favorite =true
  });

  const elements = favoriteBooks.map(({ id, title, author }) => (
    <li>
      {title}. {author}.
    </li>
  ));
  return (
    <div className="container">
      <h1 className="page-title">My favorite books page </h1>
      <ol>{elements}</ol>
    </div>
  );
};

export default MyFavoriteBooksPage;
