import React,{useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import { listProducts } from '../actions/productAction'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../components/Filter'

const HomeScreen = () => {

  const dispatch = useDispatch()

  const productListReducer = useSelector(state => state.productListReducer)

  const {loading, error, products} = productListReducer

  useEffect(() => {
    dispatch(listProducts())
  }, [])
  
  return (
    <Row className='m-3 mt-5 border-top'>
      <Col sm={3} xs={3} className='d-inline'>
        <Filter products={products}/>
      </Col>
      <Col sm={9} xs={9}>
        <Row>
          {products.map((product)=>(
            <Col key={product._id} 
              sm={12} md={6} lg={4} xl={3} 
              style={{
                maxHeight: '320px', 
                maxWidth: '300px', 
              }}
              className='m-1 p-0'
            >
              <Product product={product} style={{height: '100%'}}  className='p-0'/>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default HomeScreen
