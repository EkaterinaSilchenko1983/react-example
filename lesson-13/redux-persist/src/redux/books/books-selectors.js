export const getBooks = (store) => store.books;

export const getFavoriteBooks = (store) => {
  return store.books.filter(({ favorite }) => favorite); // повертаємо лише ті книги в яких поле favorite =true
};

export const getFilteredBooks = (store) => {
  const { filter, books } = store;
  if (!filter) {
    return books;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = books.filter(({ title, author }) => {
    return (
      title.toLowerCase().includes(normalizedFilter) ||
      author.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
