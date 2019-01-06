import React, { Component } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

import "./App.css";

class App extends Component {
  state = {
    input: "",
    fonts: [
      "Arial",
      "Helvetica",
      "Verdana",
      "Trebuchet MS",
      "Gill Sans",
      "Noto Sans",
      "Avantgarde",
      "Optima",
      "Arial Narrow",
      "Times",
      "Didot",
      "Georgia",
      "Palatino",
      "Bookman",
      "New Century Schoolbook",
      "Andale Mono",
      "Courier New",
      "Courier",
      "FreeMono",
      "OCR A Std",
      "DejaVu Sans Mono",
      "Comic Sans MS",
      "Apple Chancery",
      "Bradley Hand",
      "Brush Script MT",
      "Snell Roundhand",
      "URW Chancery L",
      "Impact",
      "Luminari",
      "Chalkduster",
      "Jazz LET",
      "Blippo",
      "Stencil Std",
      "Marker Felt",
      "Trattatello"
    ]
  };

  textChangeHandler = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    // const fontStyle = {
    //   backgroundColor: "red",
    //   fontFamily: "Comic Sans MS",
    //   fontSize: "8px"
    // };
    return (
      <div className="App">
        <div className="input-container">
          <div className="logo">
            For
            <br /> font
            <br /> sake
          </div>
          <div className="input-box">
            <Input changedInput={this.textChangeHandler} />
          </div>
        </div>

        <div className="output-container">
          {this.state.fonts.map(font => (
            <Output changedOutput={this.state.input} font={font} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
