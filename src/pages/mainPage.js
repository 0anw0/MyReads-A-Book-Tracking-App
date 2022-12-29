import React from "react";

import Shelf from "../containers/shelf";
import {
  CURRENTLY_READING,
  READ,
  WANT_TO_READ,
  WEB_APP_TITLE,
  shelfTitles,
} from "../util/constants";
import { AddABook, PageHeader } from "../components/atoms";

export default function MainPage({ books, updateBookShelf }) {

  // filtering current reading shelf data
  const currentlyReadingShelf = books.filter(
    (book) => book.shelf === CURRENTLY_READING
  );

  // filtering want To Read Shelf data
  const wantToReadShelf = books.filter((book) => book.shelf === WANT_TO_READ);

  // filtering read shelf data
  const readShelf = books.filter((book) => book.shelf === READ);

  return (
    <div className="list-books">
      <PageHeader title={WEB_APP_TITLE} />
      {books.length === 0 ? (
        <div></div>
      ) : (
        <div className="list-books-content">
          <Shelf
            shelfBooks={currentlyReadingShelf}
            shelfTitle={shelfTitles.CURRENTLY_READING}
            updateBookShelf={updateBookShelf}
          />
          <Shelf
            shelfBooks={wantToReadShelf}
            shelfTitle={shelfTitles.WANT_TO_READ}
            updateBookShelf={updateBookShelf}
          />

          <Shelf
            shelfBooks={readShelf}
            shelfTitle={shelfTitles.READ}
            updateBookShelf={updateBookShelf}
          />
        </div>
      )}
      <AddABook />
    </div>
  );
}
