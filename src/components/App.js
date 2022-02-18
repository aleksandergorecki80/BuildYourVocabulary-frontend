// const randomWords = require('random-words');

import React from "react";
import Definition from "components/Definition";
import WordInput from "components/WordInput";
import Solution from "components/Solution";

const App = () => {
  return (
    <div className="App">
        <Definition />
        <WordInput />
        <Solution />
    </div>
  );
}

export default App;
