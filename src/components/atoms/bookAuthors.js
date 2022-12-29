import React from "react";
import PropTypes from "prop-types";

/**
 * Rendering Book authors' data
 * @param {string[]} authors holding authors' name
 */
function BookAuthors({ authors }) {
  return (
    <div className="book-authors">
      {authors?.map((authorName) => authorName + "\n")}
    </div>
  );
}

export default React.memo(BookAuthors, (prv, nxt) => (prv.authors !== nxt.authors ? false : true));
