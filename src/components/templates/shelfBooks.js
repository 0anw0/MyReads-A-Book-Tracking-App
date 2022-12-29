import React from "react";
import PropTypes from 'prop-types'

import BookItem from "../origanisms/bookItem";


/**
 * Rendering the whole books shelf by mapping books data through mapping function 
 * @param {object} shelfBooks holds data of all the books related to this section  
 * @param {string} className holds className to be able to apply different styling depanding on the screen itself.  
 * @param {func} updateBookShelf updating Book shelf data on different levels 
 * 
 */
export default function ShelfBooks({
  shelfBooks,
  className = "bookshelf",
  updateBookShelf,
}) {

  return (
    <div className={className}>
      <ol className="books-grid">
        {shelfBooks?.map((item, index) => (
          <BookItem book={item} key={index} index={index} updateBookShelf={updateBookShelf} />
        ))}
      </ol>
    </div>
  );
}

ShelfBooks.propTypes={
  shelfBooks: PropTypes.array,
  className:PropTypes.string, 
  updateBookShelf:PropTypes.func
}