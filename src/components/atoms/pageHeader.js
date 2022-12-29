import React from "react";

/**
 * Rendering the pages' header if required! 
 * @param {string} title holding page title.  
 * @returns 
 */
function PageHeader({title}) {
  return (
    <div className="list-books-title">
      <h1>{title}</h1>
    </div>
  );
}

export default React.memo(PageHeader, (prv, nxt) => (prv.title !== nxt.title ? false : true));
