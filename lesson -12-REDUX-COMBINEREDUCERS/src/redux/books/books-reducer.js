import { ADD_BOOK, DELETE_BOOK } from "./books-types";

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

const booksReducer = (state = initialState, { type, payload }) => {
  // console.log(action);
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case DELETE_BOOK:
      return state.books.filter((item) => item.id !== payload); // в новий масив потрапляють всі книги, крім тої яку треба видалити(id яких не дорівнюють action.payload)
    default:
      return state;
  }
};
export default booksReducer;
