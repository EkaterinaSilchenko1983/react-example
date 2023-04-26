import { Component } from "react";
import { nanoid } from "nanoid";

import MyBooksBlock from "./MyBooksBlock/MyBooksblock";
import MyBooksList from "./MyBooksList/MybooksList";
import MyBooksForm from "./MyBooksForm/MyBooksForm";
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

    filter: "",
  };

  onAddBook = ({ title, author }) => {
    // console.log(title, author);
    if (this.isDublicate({ title, author })) {
      return alert(`${title} - ${author} is already exist`);
    }
    this.setState((prevState) => {
      const { items } = prevState;

      //   console.log(prevState);
      const newBook = {
        id: nanoid(),
        title,
        author,
      };
      return { items: [...items, newBook] };
    });
  };

  onDeleteBook = (id) => {
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      // в items потрапляють всі книги крім тої id якої спвіпадає з id книги яку треба видалити
      return { items: newItems };
    });
  };

  isDublicate({ title, author }) {
    const { items } = this.state;
    // приводимо до одного реєстру
    console.log(title, author);
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
    const items = this.getfilteredBooks();

    return (
      <div className={styles.wrapper}>
        <h3 className={styles.title}>My Books</h3>
        <div className={styles.blocks}>
          <MyBooksBlock title="Add book">
            <MyBooksForm onSubmit={this.onAddBook} />
          </MyBooksBlock>
          <MyBooksBlock title="Book list">
            <input
              name="filter"
              onChange={this.handleChange}
              className={styles.textField}
              placeholder="Enter book title or author"
            />
            <MyBooksList items={items} onDeleteBook={this.onDeleteBook} />
          </MyBooksBlock>
        </div>
      </div>
    );
  }
}
export default myBooks;
