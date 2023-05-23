import { createReducer } from "@reduxjs/toolkit";

import { setFilter } from "./filter-actions";

const initialState = "";

const filterReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (_, { payload }) => payload);
});

// const filterReducer = (state = initialState, { type, payload }) => {
//   // console.log(action);
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
export default filterReducer;
