import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants'


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({type: USER_LOGIN_REQUEST})

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const {data} = await axios.post(
      '/users/login', 
      {email, password},
      config
      )
      console.log(data)
      
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
      // document.location.href = '/'

  } catch (error) {
    console.log(error.response.data.message)
    console.log(error.message)
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: 
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({type: USER_LOGOUT})
  document.location.href = '/'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({type: USER_REGISTER_REQUEST})
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const {data} = await axios.post('/users/register', {name, email, password}, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {

    console.log(error.response.data.message)
    console.log(error.message)
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}