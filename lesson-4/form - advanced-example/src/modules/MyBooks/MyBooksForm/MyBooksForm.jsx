import { Component } from "react";
import initialState from "./initialState";
import styles from "./my-books-form.module.scss";

class MyBooksForm extends Component {
  state = { ...initialState };

  // name в інпуті повинен бути такий самий як частинка state яку ми змінюємо
  handleChange = ({ target }) => {
    // console.log(e.target.name, e.target.value);
    const { name, value, checked, type } = target;
    const newValue = type === "checkbox" ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  // форма збирає данні і під час сабміту зупиняє обробку, передає у функцію яку отримала від батьків onSubmit({ ...this.state }) і обнуляє
  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    // console.log(this.state);
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...initialState });
  }

  render() {
    const { title, author, favorite } = this.state;
    return (
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

        <div className={styles.formGroup}>
          <label>Favorite</label>
          <input
            className={styles.checkbox}
            checked={favorite}
            type="checkbox"
            name="favorite"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Add book</button>
      </form>
    );
  }
}

export default MyBooksForm;
