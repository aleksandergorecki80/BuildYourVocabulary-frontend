import React from "react";
import Definition from "components/Definition";
import WordInput from "components/WordInput";
import Solution from "components/Solution";

import store from "store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
        <Definition />
        <WordInput />
        <Solution />
    </div>
    </Provider>
  );
}

export default App;
