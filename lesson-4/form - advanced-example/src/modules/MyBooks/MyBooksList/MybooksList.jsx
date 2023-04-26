import styles from "./my-books-list.module.scss";

const MyBooksList = ({ items, onDeleteBook }) => {
  const elements = items.map(({ id, title, author }) => (
    <li key={id} className={styles.listItem}>
      Title:{title}. author: {author}.
      <button
        onClick={() => {
          onDeleteBook(id);
        }}
      >
        delete
      </button>
    </li>
  ));
  return <ol className={styles.list}>{elements}</ol>;
};
export default MyBooksList;
