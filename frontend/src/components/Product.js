import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className='m-2 p-1 rounded' style={{height: '100%', backgroundColor:'white'}}>
      <Link to='/' style={{height: '60%', textAlign:'center', backgroundColor:'white'}}>
        <Card.Img src={product.image} variant='top' style={{maxWidth: '100%', height: '100%', width: 'auto'}}/>
      </Link>
      <Card.Body style={{height: '40%', backgroundColor:'white'}}>
        <Link to='/' style={{height: '50%', backgroundColor:'white'}}>
          <Card.Title className='fs-6' style={{backgroundColor:'white'}}>{product.name}</Card.Title>
        </Link>

        <Card.Text className='fs-4 text-center'  style={{height: '50%', backgroundColor:'white'}}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
