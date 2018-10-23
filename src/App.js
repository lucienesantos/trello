import React, {Component} from "react";
import "./App.css";
import Board from "./components/Board";

import {Provider} from "react-redux";
import {createStore} from "redux";
import {Reducers} from "./reducers";

export const store = createStore(Reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header" />
          <Board />
        </div>
      </Provider>
    );
  }
}

export default App;
