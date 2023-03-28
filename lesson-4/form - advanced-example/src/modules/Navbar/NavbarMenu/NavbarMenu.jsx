import { Component } from "react";

import styles from "./navbar-menu.module.scss";

class NavbarMenu extends Component {
  state = {
    activeIndex: 0,
  };

  handleClick(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    // console.log(items);

    const elements = items.map((item, index) => {
      //   console.log(item.id);
      const fullClassName =
        index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;
      // при items.map() ми на кожну <a/> вішаємо  анонімну функцію де викликаємо handleClick(index) ш передаємо активний параметр index. Наприклад, на Home page ми передаємо 0, на books page ми передаємо 1 і тд
      return (
        <li key={item.id}>
          <a
            onClick={() => this.handleClick(index)}
            href={item.link}
            className={fullClassName}
          >
            {item.text}
          </a>
        </li>
      );
    });

    return <ul className={styles.menu}>{elements}</ul>;
  }
}
export default NavbarMenu;
