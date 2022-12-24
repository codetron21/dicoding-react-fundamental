import React from "react";

import Spacer from "./Spacer";

const SearchNote = ({ value, hint, onChange, onSubmit }) => (
  <div className="note-search">
    <input
      className="note__input"
      type="search"
      value={value}
      placeholder={hint}
      onChange={onChange}
    />
    <Spacer v={10} />
    <button className="button-large" type="button" onClick={onSubmit}>
      Cari
    </button>
  </div>
);

export default SearchNote;
