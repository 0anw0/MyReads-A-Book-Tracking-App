import React from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../../util/constants";

/**
 * goBack button 
 * invoke going back to main route
 */
function BackArrow() {
  return (
    <Link className="close-search" to={HOME_PATH}>
      Close
    </Link>
  );
}

export default React.memo(BackArrow, (prv, nxt) => (prv !== nxt ? false : true));
