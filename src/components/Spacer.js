import React from "react";
import PropTypes from "prop-types";

const Spacer = ({ h = 0, v = 0 }) => {
  return <div style={Styles.format(h, v)} />;
};

const Styles = {
  format: (h, v) => {
    return { display: h ? "inline-block" : "block", width: h, height: v };
  },
};

Spacer.propTypes = {
  h: PropTypes.number,
  v: PropTypes.number,
};

export default Spacer;
