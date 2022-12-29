import React from "react";
import BookTop from "../moleclues/bookTop";
import { BookAuthors, BookTitle } from "../atoms";
import PropTypes from "prop-types";

/**
 * 
 * @param {object} book holding current book data to be rendered through this component
 * @param {number} index holding unique key used to identify each component. (using index for now )
 * @param {func} updateBookShelf passing new shelf data to parent component to invoke the required functions. 
 * 
 */
export default function BookItem({ book, index, updateBookShelf }) {

  /**
   * destructing data from book object to pass them to children
   */
  const { authors, title } = book;

  return (
    <li key={index}>
      <div className="book">
        <BookTop book={book} updateBookShelf={updateBookShelf} />
        <BookTitle title={title} />
        <BookAuthors authors={authors} />
      </div>
    </li>
  );
}

BookItem.propTypes={
  book: PropTypes.object.isRequired,
  index:PropTypes.any, 
  updateBookShelf:PropTypes.func
}