import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetings.js';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const greetingsFromTheApi = useSelector((state) => state.greetingsReducer);

  const refreshPage = () =>{
    window.location.reload(false);
  }

  return (
    <div className="m-3">
      <p>{greetingsFromTheApi}</p>
      <button onClick={refreshPage} className="bg-sky-500 p-2 mt-4 rounded text-slate-50">Get another greeting</button>
    </div>
  )
}
export default Greeting
