import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./books-actions";

const initialState = [];

const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, { payload }) => {
      state.push(payload); // запише ось так return [...state, payload] містить біблшотеку яка зпобігає мутації, тому можна тіпа мутіровать state, гапряму його змінювати
    })
    .addCase(deleteBook, (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    });
});

export default booksReducer;

// const booksReducer = (state = initialState, { type, payload }) => {
//   // console.log(action);
//   switch (type) {
//     case ADD_BOOK:
//       return [...state, payload];
//     case DELETE_BOOK:
//       return state.books.filter((item) => item.id !== payload); // в новий масив потрапляють всі книги, крім тої яку треба видалити(id яких не дорівнюють action.payload)
//     default:
//       return state;
//   }
// };
// export default booksReducer;
