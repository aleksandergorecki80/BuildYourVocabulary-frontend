import React from "react";
import DefinitionList from "components/DefinitionList";
import WordInput from "components/WordInput";

import store from "store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
        <DefinitionList />
        <WordInput />
    </div>
    </Provider>
  );
}

export default App;
