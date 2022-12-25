import React from "react";
import PropTypes from "prop-types";

const Text = ({ children }) => <h4 className="text">{children}</h4>;

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
