import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SearchBar from "../components/moleclues/searchBar";
import ShelfBooks from "../components/templates/shelfBooks";
import * as BooksAPI from "../api/BooksAPI";
import { NONE, SEARCH_TIMEOUT } from "../util/constants";

export default function SearchPage({ userBooks, updateBookShelf }) {
  const [searchText, setSearchText] = useState("");
  const [searchBooks, setSearchBook] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const clearTimer = setTimeout(() => getBooksBySearch(), SEARCH_TIMEOUT);
    return () => clearTimeout(clearTimer);
  }, [searchText]);

  /**
   * mapping shelf value to all the books' data received from the BookAPI to be able to
   * use them with current components.
   *
   * @param {object} resultItem holding book data
   *
   */
  const mapShelfToBooks = (resultItem) => {
    const book = userBooks.filter((item) => item.id === resultItem.id)
    return {
      ...resultItem,
      // if one book of the search results is already a user book. then map the current shelf to it.
      // otherwise add "none" value

      shelf: book.length === 1
        ? book[0].shelf
        : NONE,
    };
  };

  /**
   * Calling the BookAPI to get user search input user.
   * if there are any result. then apply it as a new state
   * otherwise set Search books to []
   *
   */
  const getBooksBySearch = async () => {
    let bookResults = [];
    if (searchText.length !== 0) {
      setLoading(true);
      BooksAPI.search(searchText)
        .then((bookResults) => {
          setSearchBook(
            !bookResults?.error ? bookResults.map(mapShelfToBooks) : []
          );
          if (bookResults?.error) alert("No Books Found!");
        })
        .catch((error) => console.log("Error: ", error))
        .finally(() => setLoading(false));
    }
  };

  const _handleSearchText = (text) => {
    if (text.length === 0 && searchText.length > 0) setSearchBook([]);
    setSearchText(text);
  };

  return (
    <div className="app">
      <div className="search-books">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={_handleSearchText}
        />
        {!loading && searchBooks.length > 0 && (
          <ShelfBooks
            shelfBooks={searchBooks}
            updateBookShelf={updateBookShelf}
            className="search-books-results"
          />
        )}
      </div>
    </div>
  );
}

SearchPage.propTypes = {
  books: PropTypes.array,
  updateBookShelf: PropTypes.func,
};
