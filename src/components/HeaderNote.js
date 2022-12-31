import React from "react";
import PropTypes from "prop-types";

const HeaderNote = ({ title }) => (
  <h1 style={Styles["note-header"]}>{title}</h1>
);

const Styles = {
  "note-header": {
    textAlign: "center",
  },
};

HeaderNote.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderNote;
