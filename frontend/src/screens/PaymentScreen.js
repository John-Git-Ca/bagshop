import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {
  const navigate = useNavigate()

  const cartReducer = useSelector(state => state.cartReducer)
  const {shippingAddress} = cartReducer
  if(!shippingAddress){
    navigate('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('')


  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h3>Payment Method</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Form.Check
            type='radio'
            label='Paypal or Credit Card'
            id='Paypal'
            name='paymentMethod'
            value='PayPal'
            checked
            onChange={(e)=> setPaymentMethod(e.target.value)}
          />
        </Form.Group>
        <Button type='submit' variant='primary' className='m-2'>Continue</Button>
      </Form>
    </FormContainer>)
};

export default PaymentScreen;
