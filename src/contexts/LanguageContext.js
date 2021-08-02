import React, { Component } from "react";

const Context = React.createContext("english");

export class LanguageStore extends Component {
  state = { Language: "english" };

  onLanguageChange = (Language) => {
    this.setState({ Language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
