import { combineReducers } from 'redux'
import userReducer from './userReducer'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer
})

export default rootReducer