import React, { Component } from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import colorContext from "../contexts/colorContext";

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
        <colorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.Language}>
            <UserCreate />
          </LanguageContext.Provider>
        </colorContext.Provider>
      </div>
    );
  }
}

export default App;
