import React from "react";
import PropTypes from "prop-types";

import { BookCoverImage, DropMenu } from "../atoms";

/**
 * Rendering Book's top section which holding the book cover image and drop menu 
 * 
 * @param {object} book holding book data passed from parent component 
 * @param {func} updateBookShelf updating Book shelf data on different levels 
 * 
 */
export default function BookTop({ book, updateBookShelf }) {
 
  /**
   * handle passing new shelf name to the parent component to invote data updating functions  
   * @param {string} shelf holding option returned from drop menu  
   */
  const _onShelfChange = (shelf) => {
    updateBookShelf(book, shelf);
  };
  
  const EMPTY_IMAGE_COVER =
    "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api";

  const imageThumbnail= book?.imageLinks?.thumbnail || EMPTY_IMAGE_COVER 

  return (
    <div className="book-top">
      <BookCoverImage bookCoverURL={imageThumbnail} />
      <DropMenu selectedValue={book.shelf} onShelfChange={_onShelfChange} />
    </div>
  );
}

BookTop.propTypes = {
  book: PropTypes.object,
  updateBookShelf: PropTypes.func,
};
