import React, { Component } from "react";

const Input = props => {
  return (
    <div className="input-comp">
      <input
        type="text"
        className="input"
        placeholder="Enter text"
        onChange={props.changedInput}
      />
    </div>
  );
};

export default Input;
