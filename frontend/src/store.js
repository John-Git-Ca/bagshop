import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
  productListReducer,
  queryReducer,
  productDetailsReducer,
} from './reducers/productReducers'

import {
  userLoginReducer,
  userRegisterReducer,
} from './reducers/useReducers'

const reducer = combineReducers({
  productListReducer,
  queryReducer,
  productDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
})

const initialState = {

}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store