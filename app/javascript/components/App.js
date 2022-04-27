import React from "react"
import { BrowserRouter } from "react-router-dom"
import PropTypes from "prop-types"
import Greeting from "./Greeting";
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Greeting />
      </BrowserRouter>
    );
  }
}

export default App
