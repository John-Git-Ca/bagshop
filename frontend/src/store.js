import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
  productListReducer,
  queryReducer,
} from './reducers/productReducers'

const reducer = combineReducers({
  productListReducer,
  queryReducer,
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