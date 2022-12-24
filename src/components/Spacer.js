import React from "react";

const Spacer = ({ h = 0, v = 0 }) => {
  return (
    <div
      style={{ display: h ? "inline-block" : "block", width: h, height: v }}
    />
  );
};

export default Spacer;
