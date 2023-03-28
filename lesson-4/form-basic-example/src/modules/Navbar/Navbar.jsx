import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./navbar.module.scss";

const Navbar = ({ menuItems }) => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarRow}>
          <a href="#">Logo</a>
          <NavbarMenu items={menuItems} />
          {/* Реакт Створює об'єкт з пропсами const props = {
          items: menuItems
          }
          та створює екзмепляр класу і передає йому пропси як аргумен
          const obj = new NavbarMenu(props)
          викликає метод рендер obj.render()
          */}
          <button>To books lists</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
