import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/mainPage";
import SearchPage from "./pages/searchPage";
import * as BooksAPI from "./api/BooksAPI";
import { HOME_PATH, NONE, SEARCH_PATH } from "./util/constants";

function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getBooksFromBookAPI();
  }, []);

  /**
   * Loading Books from BookAPI
   */
  const getBooksFromBookAPI = async () => {
    try {
      const userBooks = await BooksAPI.getAll();
      setBookList(userBooks);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  /**
   * Updating Book's shelf based on the user choose.
   * Updating the current BookList.
   * if the user selected 'none' from drop menu && the book exists on the current book list state.
   * it will be removed througth array filtering using the method .filter()
   *
   * if user changed book's shelf to another one. it updates the state according the new shelf
   * if user added a new book. it is appended to the array.
   *
   * @param {object} book object holding book data
   * @param {string} newShelf the book's new shelf
   *
   */
  const updateBookShelf = (book, newShelf) => {
    // Apply Change to user's data on the Database
    BooksAPI.update(book, newShelf);

    const _removeBookFromBookListState = (prevState) =>
      prevState.filter((bookListItem) => bookListItem !== book && bookListItem);

    const _updateBookShelfInBookListState = (prevState) =>
      prevState.map((bookListItem) =>
        bookListItem === book ? { ...bookListItem, shelf: newShelf } : bookListItem
      );

    const _addANewBookToSpecificShelfInBookListState = (prevState) => [
      ...prevState,
      { ...book, shelf: newShelf },
    ];

    if (newShelf === NONE) setBookList(_removeBookFromBookListState);
    else {
      if (bookList.includes(book)) setBookList(_updateBookShelfInBookListState);
      else setBookList(_addANewBookToSpecificShelfInBookListState);
    }
  };

  // MainPage Component
  const MainRoute = (
    <MainPage books={bookList} updateBookShelf={updateBookShelf} />
  );

  // SearchPage Component
  const SearchRoute = (
    <SearchPage userBooks={bookList} updateBookShelf={updateBookShelf} />
  );

  return (
    <Routes>
      <Route exact path={HOME_PATH} element={MainRoute} />
      <Route path={SEARCH_PATH} element={SearchRoute} />
    </Routes>
  );
}

export default App;
