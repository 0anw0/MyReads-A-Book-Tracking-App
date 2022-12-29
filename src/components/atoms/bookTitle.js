import React from 'react'
import PropTypes from "prop-types";

/**
 * BookTitle
 * Showing the book's title 
 * @param {string} title holding book title
 */
function BookTitle({title}) {
  return (
    <div className="book-title">{title}</div>
  )
}

BookTitle.propTypes = {
  title: PropTypes.string,
};

export default React.memo(BookTitle, (prv, nxt) => (prv.title !== nxt.title ? false : true));
