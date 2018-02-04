import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./redux/reducers/rootReducer";
import App from "./components/App/App.js";
import "./scss/style.scss";
import { isLoggedIn } from "./redux/actions/auth";

import Auth from "./Helper/Auth/Auth";

const initialState = {
  user: { token: Auth.getToken() },
  flashMessage: { isVisible: false, type: null, text: null, slug: null },
  sauces: [],
  sauce: {},
  tags: []
};

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

if (Auth.isUserAuthenticated()) {
  const user = { token: Auth.getToken() };
  store.dispatch(isLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
