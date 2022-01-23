import React, { useEffect } from 'react';
import { ListGroup, Row, Col, Image, Card, ListGroupItem, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { useNavigate } from 'react-router';

const PlaceOrderScreen = () => {
  const cartReducer = useSelector(state => state.cartReducer)
  cartReducer.totalPrice = cartReducer.cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const dispatch = useDispatch()

  const placeOrderHandler = () => {
    dispatch(createOrder({
      orderItems: cartReducer.cartItems,
      shippingAddress: cartReducer.shippingAddress,
      paymentMethod: cartReducer.paymentMethod,
      totalPrice: cartReducer.totalPrice,
    }))
  }

  const orderCreateReducer = useSelector(state => state.orderCreateReducer)
  const {order, success, error} = orderCreateReducer
  const navigate = useNavigate()
  useEffect(()=> {
    if(success){
      navigate(`/order/${order._id}`)
    }
  })

  return (
    <>
    <CheckoutSteps step1 step2 step3 step4/>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>Shipping</h3>
              <p>
                <strong>Contact Information: </strong>
                {cartReducer.shippingAddress.email}
              </p>
              <p>
                <strong>Address: </strong>
                {cartReducer.shippingAddress.address},
                {cartReducer.shippingAddress.city},
                {cartReducer.shippingAddress.country},
                {cartReducer.shippingAddress.postcode}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Payment Method</h3>
              <strong>Method: </strong>
              {cartReducer.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Order Items</h3>
              {
                cartReducer.cartItems.length === 0
                ? (<Message>Your cart is empty</Message>)
                : (
                  <ListGroup >
                    {cartReducer.cartItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1} className='text-center'>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                              style={{maxHeight: '50px'}}
                            />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                          </Col>
                          <Col md={4}>
                            {item.quantity} X HK${item.price} = HK${item.quantity * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                ))}
                  </ListGroup>
                )
              }
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Order Summary:</h3>
              </ListGroup.Item>
              <ListGroupItem>
                <Row>
                  <Col>Items</Col>
                  <Col>HK$ {cartReducer.totalPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {error && <Message variant='danger'></Message>}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cartReducer.cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>

    </>)
};

export default PlaceOrderScreen;
