import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return ( 
    <Nav className='justify-content-center text-dark mb-4'>
      <Nav.Item className='text-dark'>
        {step1 ? (
          <LinkContainer to='/signin'>
            <Nav.Link className='text-info fs-5'>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='fs-5'>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className='text-info fs-5'>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className=' fs-5'>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className='text-info fs-5'>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='fs-5'>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className='text-info fs-5'>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className=' fs-5'>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
