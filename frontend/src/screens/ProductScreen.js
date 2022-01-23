import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {useNavigate, Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction'
import { productDetailsReducer } from '../reducers/productReducers'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Image, Row, Col, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap'
import { QuantityPicker } from 'react-qty-picker'

const ProductScreen = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(1)

  const productDetailsReducer = useSelector(state => state.productDetailsReducer)

  const {loading, error, product} = productDetailsReducer

  const addToCartHandler = () => {
    navigate(`/cart/${id}/${quantity}`)
  }
  
  useEffect(()=>{
    dispatch(listProductDetails(id))
  },[])

  return (
    <>
      <Row className='justify-content-between'>
        <Col>
          <Link className='btn btn-light m-3 border responsive_btn' to='/'>Go Back</Link>
        </Col>
        <Col md={2}>
          <Link className='btn btn-light mr-3 my-3 border responsive_btn' style={{width:'90px'}} to={`/product/edit/${id}`}>Edit</Link>
        </Col>
      </Row>
      {
        loading
        ? <Loader />
        : error
        ? (<Message>{error}</Message>)
        : product && (
          <>
            <Row className='m-auto'>
              <Col xs={12} xl={6} md={12} sm={12} className='text-center p-2 m-0'>
                <Image src={product.image} className='text-center' alt={product.name} fluid style={{maxHeight: '70%', maxWidth:'70%', height:'auto', width: 'auto'}}></Image>
              </Col>
              <Col xs={12} xl={3} md={12} sm={12} className='p-2 px-1 m-0'>
                <ListGroup>
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem>Price: HK${product.price}</ListGroupItem>
                  <ListGroupItem>Description: {product.description}</ListGroupItem>
                </ListGroup>
              </Col>
              <Col xs={12} xl={3} md={12} sm={12} className='p-2 pl-0 m-0'>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col><strong>HK${product.price}</strong></Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row className='text-center'>
                        <Col><QuantityPicker 
                        min={0}
                        value={quantity}
                        max={product.countInStock + 1}
                        onChange={(value)=>setQuantity(value)}
                        /></Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button 
                        style={{width:'100%'}}
                        onClick={addToCartHandler}
                        disabled={quantity > product.countInStock || quantity === 0}
                      >
                        {quantity > product.countInStock ? 'No More Products' : 'Add to Cart'}
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        )
      }
    </>
  )
}

export default ProductScreen
