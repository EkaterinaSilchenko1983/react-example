import { createStore } from "redux";
const initialState = [
  {
    id: "1",
    title: "Worm ",
    author: "John C. McCrae",
    favorite: true,
  },
  {
    id: "2",
    title: "Girl genius",
    author: "foglio",
    favorite: false,
  },
];

const reducer = (state) => {
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
