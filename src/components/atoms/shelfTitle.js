import React from "react";

/**
 * Rendering Shelf Title
 * 
 * @param {string} shelfTitle 
 */
function ShelfTitle({shelfTitle}) {
  return <h2 className="bookshelf-title">{shelfTitle}</h2>;
}

export default React.memo(ShelfTitle, (prv, nxt) => (prv !== nxt ? false : true));
