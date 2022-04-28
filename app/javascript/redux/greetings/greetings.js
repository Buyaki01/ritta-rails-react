import Axios from 'axios';

const GET_GREETING = 'GET_GREETING';

const initialState = [];

export const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const fetchGreeting = async (dispatch) => {
  const returnGreeting = await Axios.get('/v1/greetings');
  const data = returnGreeting.data.data.greeting.message
  // setGreeting(data);
  dispatch(getGreeting(data));
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;