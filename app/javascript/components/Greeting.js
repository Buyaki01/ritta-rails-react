import React, { useState, useEffect } from "react"
import Axios from "axios"
import PropTypes from "prop-types"

const Greeting = () => {
  const [greeting, setGreeting] = useState([])
  
  useEffect( () => { fetchGreeting() }, [] );

  return (
    <div>
      {greeting}
    </div>
  )
}
export default Greeting
