import React from "react";
import PropTypes from "prop-types";

/**
 * Book Cover Image
 * Showing the book's cover image. 
 * if book don't hold a cover image uri. it renders default uri 
 * @param {string} bookCoverURL holding book cover uri
 */
function BookCoverImage({ bookCoverURL }) {

  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${bookCoverURL})`,
      }}
    ></div>
  );
}

BookCoverImage.propTypes = {
  bookCoverURL: PropTypes.string,
};

export default React.memo(BookCoverImage, (prv, nxt) => (prv.bookCoverURL !== nxt.bookCoverURL ? false : true));
