import React, { Component } from "react";

import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
import colorContext from "../contexts/colorContext";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <colorContext.Provider value="red">
            <UserCreate />
          </colorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
