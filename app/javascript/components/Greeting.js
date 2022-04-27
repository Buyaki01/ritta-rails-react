import React, { useState, useEffect } from "react"
import Axios from "axios"
import PropTypes from "prop-types"

const Greeting = () => {
  const [greeting, setGreeting] = useState([])

  const fetchGreeting = async () => {
    const returnGreeting = await Axios.get('/v1/greetings');
    // console.log(returnGreeting)
    const data = returnGreeting.data.data.greeting.message
    // console.log(data);
    setGreeting(data);
  }
  
  useEffect( () => { fetchGreeting() }, [] );

  return (
    <div>
      {greeting}
    </div>
  )
}
export default Greeting
