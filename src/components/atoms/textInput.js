import React from "react";

/**
 * 
 * @param {string} searchText search page's input state. 
 * @param {func} onSearchTextChange handling input changing and passing it the parent component
 * @returns 
 */
export default function TextInput({ searchText, onSearchTextChange }) {
  
  /**
   * handling input returned from input component
   * @param {object} e
   */
  const _handleSearchText = (e) => {
    const text = e.target.value;
    onSearchTextChange(text);
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={searchText}
        onChange={_handleSearchText}
      />
    </div>
  );
}
