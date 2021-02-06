import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS
}
  from "../constants/userConstants";

const initialValue = JSON.parse(localStorage.getItem('userInfo')) || {
  name: '',
  email: '',
  cart: '',
  role: null
}
const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { role, name, email, cart } = action.payload
      return { ...state, role, email, cart, name };
    }
    case REGISTER_SUCCESS: {
      const { role, name, email, cart } = action.payload
      return { ...state, role, email, cart, name };
    }
    case LOGOUT_SUCCESS: {
      const role = '', name = '', email = '', cart = ''
      return { ...state, role, email, cart, name };
    }
    default:
      return state;
  }
}
export default userReducer