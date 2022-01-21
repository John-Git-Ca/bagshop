import React, { useEffect, useState } from 'react'
import { ListGroup, Row, Col, ListGroupItem, Image, Form, Button, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { QuantityPicker } from 'react-qty-picker'

const CartScreen = () => {
  const {id, quantity} = useParams()
  const dispatch = useDispatch()
  const cartReducer = useSelector(state => state.cartReducer)
  const {cartItems} = cartReducer

  const removeHanlder = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {

  }
  
  useEffect(()=> {
    if(id){
      dispatch(addToCart(id, Number(quantity)))
    }
    console.log(cartItems)

  },[id])
  return (
    <div>
      <h3>Shopping Cart:</h3>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <Message>Your Cart is Empty</Message>
          )
          : (
            <ListGroup>
              {cartItems.map(item =>(
                <ListGroupItem key={item.product}>
                  <Row className='align-items-center'>
                    <Col md={2} className='text-center'>
                      <Image src={item.image} className='mw-100' style={{maxHeight:'150px'}} />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={1} className='fs-4'>${item.price}</Col>
                    <Col md={3}>
                      <QuantityPicker
                        value={item.quantity || quantity}
                        min={0}
                        max={item.countInStock}
                        onChange={(value)=>dispatch(addToCart(item.product, Number(value)))}
                        style={{width: '150px'}}
                      />
                    </Col>
                    <Col md={2}>
                      <Button 
                      variant='danger'
                      onClick={() => removeHanlder(item.product)}
                      >Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )

          }
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) items
                </h2>
                <h3>
                  $
                 {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                </h3>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  variant='success'
                  type='button'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                  className='w-50'
                >
                  Checkout
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CartScreen
