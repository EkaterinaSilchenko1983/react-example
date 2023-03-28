import { Component } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksblock";

import styles from "./my-books.module.scss";

class myBooks extends Component {
  state = {
    items: [
      {
        id: "1",
        title: "Worm",
        author: "Jon C. McCrae",
      },
      {
        id: "2",
        title: "Ward",
        author: "Jon C. McCrae",
      },
    ],
    title: "",
    author: "",
    filter: "",
  };
  // name в інпуті повинен бути такий самий як частинка state яку ми змінюємо
  handleChange = ({ target }) => {
    // console.log(e.target.name, e.target.value);
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  //при handleSubmit в setState створюємо нову книгу (новий об'єкт) додаючи id
  //  { items: [...items, newBook], title: "", author: "" } --title: "", author: "" - очистка форми
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isDublicate()) {
      const { title, author } = this.state;
      alert(`${title} - ${author}   - is already exist`);
      return;
    }

    this.setState((prevState) => {
      const { title, author, items } = prevState;

      //   console.log(prevState);
      const newBook = {
        id: nanoid(),
        title,
        author,
      };
      return { items: [...items, newBook] };
    });

    this.reset();
  };

  reset() {
    this.setState({ title: "", author: "" });
  }

  onDeleteBook(id) {
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      // в items потрапляють всі книги крім тої id якої спвіпадає з id книги яку треба видалити
      return { items: newItems };
    });
  }

  isDublicate() {
    const { title, author, items } = this.state;
    // приводимо до одного реєстру
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();
    //   перевіряємо чи є в items такий автор та назва
    const dublicate = items.find((item) => {
      return (
        item.title.toLowerCase() === normalizedTitle &&
        item.author.toLowerCase() === normalizedAuthor
      );
    });
    return Boolean(dublicate);
  }
  // спочатку получаємо відфільтровані книги а потім робимо map() масиву книг items в render()
  getfilteredBooks() {
    const { filter, items } = this.state;
    if (!filter) {
      return items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = items.filter((item) => {
      return (
        item.title.toLowerCase().includes(normalizedFilter) ||
        item.author.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  }

  render() {
    const { title, author } = this.state;
    const items = this.getfilteredBooks();
    const elements = items.map(({ id, title, author }) => (
      <li key={id} className={styles.listItem}>
        Title:{title}. author: {author}.
        <button
          onClick={() => {
            this.onDeleteBook(id);
          }}
        >
          delete
        </button>
      </li>
    ));
    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>My Books</h3>
        <div className={styles.blocks}>
          <MyBooksBlock title="Add book">
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label>Book title</label>
                <input
                  value={title}
                  name="title"
                  onChange={this.handleChange}
                  className={styles.textField}
                  placeholder="Book title"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Book author</label>
                <input
                  value={author}
                  name="author"
                  onChange={this.handleChange}
                  className={styles.textField}
                  placeholder="Book title"
                />
              </div>
              <button type="submit">Add book</button>
            </form>
          </MyBooksBlock>
          <MyBooksBlock title="Book list">
            <input
              name="filter"
              onChange={this.handleChange}
              className={styles.textField}
              placeholder="Enter book title or author"
            />
            <ol className={styles.list}>{elements}</ol>
          </MyBooksBlock>
        </div>
      </div>
    );
  }
}
export default myBooks;
