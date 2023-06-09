import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "./types";

import { nanoid } from "nanoid";

export const addBook = (payload) => {
  return {
    type: ADD_BOOK,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const deleteBook = (payload) => {
  return {
    type: DELETE_BOOK,
    payload,
  };
};

export const setFilter = (payload) => {
  return {
    type: SET_FILTER,
    payload,
  };
};
