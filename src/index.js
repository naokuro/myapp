import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import App from "./containers/app"

// create store with reducers
let store = createStore(reducers)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
)
