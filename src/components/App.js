// const randomWords = require('random-words');

import React from "react";
import Definition from "./Definition";
import WordInput from "./WordInput";
import Solution from "./Solution";

const App = () => {
  return (
    <div className="App">
        App component
        <Definition />
        <WordInput />
        <Solution />
    </div>
  );
}

export default App;
