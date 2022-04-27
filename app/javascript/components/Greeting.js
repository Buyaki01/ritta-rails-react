import React from "react"
import Axios from "axios"
import PropTypes from "prop-types"

class Greeting extends React.Component {
  constructor(){
    super()
    this.state = {
      greeting: ''
    }
  }

  componentDidMount(){
    const return_greeting = Axios.get('/v1/greetings')
    .then(response => this.setState({ greeting: response.data.data.greeting.message })); 
  }

  render () {
    return (
      <React.Fragment>
        Greeting: Hello
        {
          this.state.greeting
        }
      </React.Fragment>
    );
  }
}

export default Greeting
