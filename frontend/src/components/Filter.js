import React from 'react'
import { Form, ListGroup, Row } from 'react-bootstrap'

const Filter = ({products}) => {
  return (
    <ListGroup className='p-3 m-3 mt-0 pt-0'>
      <div className='fs-4'>Category</div>
      {
        products.map(product => (
          <Row className='my-1 mx-0' key={product._id}>
            <Form.Check className='w-25 text-end align-middle fs-4'></Form.Check>
            <ListGroup.Item className='w-75 ml-0 rounded'>{product.category}</ListGroup.Item>
          </Row>
        ))
      }
      
    </ListGroup>
  )
}

export default Filter
