import { Link } from "react-router-dom";
import styles from "./navbar-menu.module.scss";

const NavbarMenu = ({ items }) => {
  const elements = items.map(({ id, link, text }, index) => {
    return (
      <li key={id}>
        <Link>{text}</Link>
      </li>
    );
  });

  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;

/*
class NavbarMenu extends Component {
    state = {
        activeIndex: 0,
    }

    handleClick(index) {
        this.setState({
            activeIndex: index,
        })
    }

    render() {
        const { items } = this.props;
        const {activeIndex} = this.state;
        
        const elements = items.map(({ id, link, text }, index) => {
            const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;

            return (
                <li key={id}>
                    <a onClick={() => this.handleClick(index)} href={link} className={fullClassName}>{text}</a>
                </li>
            )
        });

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}
*/
