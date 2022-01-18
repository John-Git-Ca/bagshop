import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ProductEditScreen = () => {
  const {id} = useParams()
  return (
    <>
      <Link className='btn btn-light m-3 border responsive_btn' to={`/product/${id}`}>Go Back</Link>
    </>
  )
}

export default ProductEditScreen
