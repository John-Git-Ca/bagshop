import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  UPDATE_KEYWORD,
  UPDATE_PAGENUMBER,
  RESET_KEYWORD,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants'

export const productListReducer = (state = {products:[]}, action) => {
  switch (action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading: true, products: []}
    case PRODUCT_LIST_SUCCESS:
      return {
        loadint: false, 
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
        
      }
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export const queryReducer = (state={keyword:'', pageNumber:''},action) => {
  switch(action.type){
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      }
    case UPDATE_PAGENUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      }
    case RESET_KEYWORD:
      return{
        ...state,
        pageNumber:'',
        keyword: '',
      }
    default:
      return state
  }
}

export const productDetailsReducer = (state={}, action) => {
  switch (action.type){
    case PRODUCT_DETAILS_REQUEST:
      return {...state, loading: true}
    case PRODUCT_DETAILS_SUCCESS:
      return {loading: false, product: action.payload}
    case PRODUCT_DETAILS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}