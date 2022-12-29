import React from "react";

import { ShelfTitle } from "../components/atoms";
import ShelfBooks from "../components/templates/shelfBooks";

/**
 * Rendering each shelf
 * @param {object} shelfBooks holds data of all the books related to this section  
 * @param {string} shelfTitle holds the shelf title 
 * @param {func} updateBookShelf updating Book shelf data on different levels 
 * 
 */
export default function Shelf({ shelfBooks, shelfTitle, updateBookShelf }) {
  return (
    <>
      <ShelfTitle shelfTitle={shelfTitle} />
      <div className="bookshelf-books">
        <ShelfBooks shelfBooks={shelfBooks} updateBookShelf={updateBookShelf}/>
      </div>
    </>
  );
}
