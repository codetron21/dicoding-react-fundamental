import React from "react";
import PropTypes from "prop-types";

const LabelNote = ({ label }) => <h2>{label}</h2>;

LabelNote.propTypes = {
  label: PropTypes.string.isRequired,
};

export default LabelNote;
