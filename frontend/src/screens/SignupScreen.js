import React, {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const SignupScreen = () => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')


  const dispatch = useDispatch()
  const userRegisterReducer = useSelector(state => state.userRegisterReducer)

  const {loading, error, userInfo} = userRegisterReducer


  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setMessage('Password do not match')
    }
    else{
      dispatch(register(name, email, password))
    }
  }
  const navigate = useNavigate()
  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
    setMessage('')
  },[password, confirmPassword, userInfo])

  return (
    <div>
      <h3>Sign Up</h3>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form 
        style={{maxWidth:'400px'}}
        onSubmit={submitHandler}
        className='m-auto'
      >
        <Form.Group controlId='name'>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter Name...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email...'
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password...'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password...'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button variant='primary' type='submit' className='m-2 w-25'>
          Register
        </Button>
      </Form>
      {message && <Message variant='danger'>{message}</Message>}
    </div>
  )
}

export default SignupScreen
