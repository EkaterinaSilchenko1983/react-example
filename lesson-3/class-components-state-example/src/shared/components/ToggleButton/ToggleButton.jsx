import { Component } from "react";

import styles from "./toggle-button.module.scss";

class ToggleButton extends Component {
  state = {
    isActive: false,
  };
  //якщо є метод класу який треба вішати в якості обробника подій без аргументу треба його робити стрілочним, тоді this буде посилатись на об'єкт
  handleclick = () => {
    //чи буде нове значення стейту залежати від попереднього, якщо так, тоді передаємо колбек який передає попереднє значення стейту prevState
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive,
      };
    });
  };
  render() {
    const { text } = this.props;
    const { isActive } = this.state;
    const fullClassName = isActive
      ? `${styles.btn} ${styles.active}`
      : styles.btn;

    return (
      <button onClick={this.handleclick} className={fullClassName}>
        {text}
      </button>
    );
  }
}

export default ToggleButton;
