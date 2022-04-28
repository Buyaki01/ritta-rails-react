import React from "react"
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import PropTypes from "prop-types"
import store from '../redux/store';
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Greeting />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
