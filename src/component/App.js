import React, { Component } from "react";

class App extends Component {
  state = { Language: "english" };

  onLanguageChange = (Language) => {
    this.setState({ Language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        {this.state.Language}
      </div>
    );
  }
}

export default App;
