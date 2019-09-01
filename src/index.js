import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Header from "./header";
import "./style.styl";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer.js";
import { BrowserRouter as Router} from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
