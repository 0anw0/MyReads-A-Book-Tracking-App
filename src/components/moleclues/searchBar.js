import React from "react";
import { BackArrow, TextInput } from "../atoms";

/**
 * Rendering Search page searching bar 
 * 
 * @param {object} searchText search text state passed from parent component
 * @param {func} onSearchTextChange passing new updates from parent component to grand child component to 
 * update parent state when input event triggered
 * 
 */
export default function SearchBar({searchText, onSearchTextChange}) {
  return (
    <div className="search-books-bar">
      <BackArrow />
      <TextInput searchText={searchText} onSearchTextChange={onSearchTextChange}/>
    </div>
  );
}
