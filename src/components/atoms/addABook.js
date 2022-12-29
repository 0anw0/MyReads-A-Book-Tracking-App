import React from "react";
import { Link } from "react-router-dom";
import { SEARCH_PATH } from "../../util/constants";

/**
 * Adding a new book button 
 * Handle passing to a search route
 */
function AddABook() {
  return (
    <div className="open-search">
      <Link to={SEARCH_PATH}>Add a book</Link>
    </div>
  );
}

export default React.memo(AddABook, (prv, nxt) => (prv !== nxt ? false : true));
