import React,{useEffect,useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import { listProducts } from '../actions/productAction'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'
import Paginate from '../components/Paginate'
import {FiDelete} from 'react-icons/fi'
import { RESET_KEYWORD } from '../constants/productConstants'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {


  const dispatch = useDispatch()

  const productListReducer = useSelector(state => state.productListReducer)

  const queryReducer = useSelector(state => state.queryReducer)
  const {keyword} = queryReducer

  const {loading, error, products, page, pages} = productListReducer

  // useEffect(() => {
  //   dispatch(listProducts())
  // }, [])

  const handleClick = () => {
    dispatch({type: RESET_KEYWORD})
    dispatch(listProducts())
  }
  
  return (
    <Row className='m-3 mt-5 border-top'>
      <Col md={3} className='d-inline'>
        <Filter products={products}/>
      </Col>
      <Col sm={9} xs={9}>
        {keyword && 
            <Button className='m-2 text-dark bg-light' onClick={handleClick}>
            <span className='me-2'>{keyword}</span>
            <FiDelete className='ml-3 pl-3'/>
          </Button>}
        <Row className='justify-content-center'>
          {loading 
          ? <Loader /> 
          : error 
          ? <Message>{error}</Message> 
          : products.length === 0 ? <Col>No Products Found</Col>:products.map((product)=>(
            <Col key={product._id} 
              sm={12} md={6} lg={4} xl={3} 
              style={{
                maxHeight: '320px', 
                maxWidth: '300px',
              }}
              className='m-1 mx-0 p-0'
            >
              <Product product={product} style={{height: '100%'}}  className='p-0'/>
            </Col>
          ))}
        </Row>
        <Paginate
          pages={pages}
          page={page}
          keyword={keyword ? keyword:''}
        />
      </Col>
    </Row>
  )
}

export default HomeScreen
