import Navbar from "./modules/Navbar/Navbar";

import navbarMenuItems from "./data/navbarMenuItems.json";
import "./shared/styles/styles.scss";
import ToggleButton from "./shared/components/ToggleButton/ToggleButton";
import Vote from "./modules/Vote/Vote";
import MyBooks from "./modules/MyBooks/MyBooks";
import Posts from "./modules/Posts/Posts";

function App() {
  return (
    <>
      {/* <Navbar menuItems={navbarMenuItems} /> */}
      <div className="container">
        {/* <ToggleButton text="Click me" /> */}
        {/* <Vote /> */}
        {/* <MyBooks /> */}
        <Posts />
      </div>
    </>
  );
}

export default App;
