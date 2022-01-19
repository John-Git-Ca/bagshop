import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Button, Form } from 'react-bootstrap'
import { login } from '../actions/userActions'
import { useNavigate } from 'react-router'

const SigninScreen = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLoginReducer = useSelector(state => state.userLoginReducer)

  // console.log(userLoginReducer)

  const {loading, error, userInfo} = userLoginReducer

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  }, [userInfo])
  return (
    <div>
      <h3>Sign In</h3>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form style={{maxWidth:'400px'}} className='m-auto' onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>
            Email:
          </Form.Label>
          <Form.Control 
            type='email'
            placeholder='Enter Email...'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>
            Password:
          </Form.Label>
          <Form.Control 
            type='password'
            placeholder='Enter Password...'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit' className='m-2 w-25'>Sign In</Button>
      </Form>
    </div>
  )
}

export default SigninScreen
