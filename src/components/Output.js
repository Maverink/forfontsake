import React, { Component } from "react";

const Output = props => {
  return (
    <div className="output-window">
      <h2 className="output-font-text" style={{ fontFamily: props.font }}>
        {props.changedOutput}
      </h2>
      <p className="output-font-title">{props.font}</p>
    </div>
  );
};

export default Output;
