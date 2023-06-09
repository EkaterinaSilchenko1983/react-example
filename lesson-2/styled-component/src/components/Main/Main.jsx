import Button from "../Button/Button";
import List from "../List/List";

import buyListItems from "../../data/buyListItems.json";

import "./main.css";

const Main = () => {
  return (
    <main>
      <h1>Page title</h1>
      {/* createElement("h1", {}, "Page title") */}
      <p>page main text</p>
      <List title="Buy list" items={buyListItems} />
      <Button active>Click me</Button>

      {/* 
            const props = {
                text: "Click me",
                active: true,
            }
            Button(props);
            */}
    </main>
  );
};

export default Main;
