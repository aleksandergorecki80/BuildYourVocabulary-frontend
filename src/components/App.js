import React from "react";
import Definition from "components/Definition";
import WordInput from "components/WordInput";

import store from "store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
        <Definition />
        <WordInput />
    </div>
    </Provider>
  );
}

export default App;
