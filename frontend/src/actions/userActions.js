import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
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

export const logout = () => (dispatch) => {
  dispatch({type: USER_LOGOUT})
  document.location.href = '/'
}