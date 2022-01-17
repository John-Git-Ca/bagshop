import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = (keyword='', pageNumber='') => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST})

    const {data} = await axios.get(`/products?keyword=${keyword}&pageNumber=${pageNumber}`)

    console.log(data)

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: 
        error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message
    })
  }
}