import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const ShippingScreen = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [postcode, setPostcode] = useState('')
  const navigate = useNavigate()

  console.log({
    address,
    city,
    country,
    postcode
  })
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({email, address, city, country, postcode}))
    navigate('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step2/>
      <h3>Shipping Information</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Contact Information</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          <Form.Text>We'll send order updates to this email.</Form.Text>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address...'
            value={address}
            onChange={(e)=> setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city...'
            value={city}
            onChange={(e)=> setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group  controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country...'
            value={country}
            onChange={(e)=> setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group  controlId='postcode'>
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postcode...'
            value={postcode}
            onChange={(e)=> setPostcode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='m-2'>Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen;
