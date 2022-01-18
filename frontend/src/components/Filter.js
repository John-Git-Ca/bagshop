import React, {useEffect, useState} from 'react'
import { Form, ListGroup, Row, Col } from 'react-bootstrap'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productAction'

const Filter = ({products}) => {

  const [category, setCategory] = useState(true)
  const [price, setPrice] = useState(true)

  const dispatch = useDispatch()
  const queryReducer = useSelector(state => state.queryReducer)

  const {keyword} = queryReducer

  const handleCategory = () => {
    setCategory(!category)
  }
  const handlePrice = () => {
    setPrice(!price)
  }



  return (
    <ListGroup className='p-3 m-3 mt-0 pt-0'>
      <div className='fs-6 responsive_btn border-bottom d-flex justify-content-between' onClick={handleCategory}>
        <Col md={10}>Category</Col>
        <Col md={2} className='align-self-end'>{category ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}</Col>
      </div>
      {
        category && products.map(product => (
          product.category !== 'default category' &&
          <Row className='my-1 mx-0' key={product._id}>
            <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
            <ListGroup.Item className='w-75 ml-0 rounded fs-6 p-1'>{product.category}</ListGroup.Item>
          </Row>
        ))
      }
      <div className='fs-6 responsive_btn border-bottom d-flex justify-content-between' onClick={handlePrice}>
        <Col md={10}>Price</Col>
        <Col md={2} className='align-self-end'>{price ? <AiOutlineArrowUp/> : <AiOutlineArrowDown/>}</Col>
      </div>
      <Row className='my-1 mx-0' >
        {
          price && 
          <div className='p-0 m-0'>
            <Row className='p-0 m-0 my-1'>
              <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
              <ListGroup.Item className='w-75 ml-0 rounded fs-6  p-1' >$0 - $300</ListGroup.Item>
            </Row>
            <Row className='p-0 m-0 my-1'>
              <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
              <ListGroup.Item className='w-75 ml-0 rounded fs-6  p-1'>$300 - $500</ListGroup.Item>
            </Row>
            <Row className='p-0 m-0  my-1'>
              <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
              <ListGroup.Item className='w-75 ml-0 rounded fs-6  p-1'>$300 - $500</ListGroup.Item>
            </Row>
            <Row className='p-0 m-0 my-1'>
              <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
              <ListGroup.Item className='w-75 ml-0 rounded fs-6 p-1'>$500 - $1000</ListGroup.Item>
            </Row >
            <Row className='p-0 m-0 my-1'>
              <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
              <ListGroup.Item className='w-75 ml-0 rounded fs-6 p-1'>$1000+</ListGroup.Item>
            </Row>
          </div>
        }
      </Row>
      
    </ListGroup>
  )
}

export default Filter
