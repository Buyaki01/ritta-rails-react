import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings.js';
import PropTypes from "prop-types"

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const greetingsFromTheApi = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      {greetingsFromTheApi}
    </div>
  )
}
export default Greeting
