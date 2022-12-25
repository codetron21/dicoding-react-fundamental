import React from "react";
import PropTypes from "prop-types";

const HeaderNote = ({ title }) => <h1 className="note-header">{title}</h1>;

HeaderNote.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderNote;
