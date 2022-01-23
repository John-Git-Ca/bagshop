import axios from "axios"
import { CART_CLEAR_ITEMS } from "../constants/cartConstants"
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  
} from '../constants/orderConstants'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    }
    const {data} = await axios.post('/order', order)
    console.log(data)
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data
    })

  } catch (error) {
    
  }
}