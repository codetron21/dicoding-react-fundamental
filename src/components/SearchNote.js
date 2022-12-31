import React from "react";
import PropTypes from "prop-types";
import Spacer from "./Spacer";

const SearchNote = ({ value, hint, onChange, onSubmit }) => (
  <div className="form-container">
    <input
      className="form-input"
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

SearchNote.propTypes = {
  value: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchNote;
