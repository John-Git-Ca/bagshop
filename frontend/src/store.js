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
} from './reducers/useReducers'

const reducer = combineReducers({
  productListReducer,
  queryReducer,
  productDetailsReducer,
  userLoginReducer,
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