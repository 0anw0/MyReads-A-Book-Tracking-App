import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  CURRENTLY_READING,
  NONE,
  READ,
  WANT_TO_READ,
} from "../../util/constants";

/**
 * 
 * @param {string} selectedValue book current shelf  
 * @param {func} onShelfChange handle updating book shelf. passing the new shelf name to parent components 
 * to execute and invoke the required function 
 * 
 */
export default function DropMenu({ selectedValue = NONE, onShelfChange }) {

  const [selectedOption, setSelectedOption] = useState(selectedValue);

  const _handleShelfChange = (e) => {
    setSelectedOption(e.target.value);
    onShelfChange(e.target.value);
  };


  return (
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={_handleShelfChange}>
        <option disabled>Move to...</option>
        <option value={CURRENTLY_READING}>Currently Reading</option>
        <option value={WANT_TO_READ}>Want to Read</option>
        <option value={READ}>Read</option>
        <option value={NONE}>None</option>
      </select>
    </div>
  );
}

DropMenu.propTypes = {
  selectedValue: PropTypes.string,
  onShelfChange: PropTypes.func,
};
