import React from 'react'
import { useParams } from 'react-router'
import {useNavigate, Link} from 'react-router-dom'

const ProductScreen = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>Go Back</Link>
      hello there
    </>
  )
}

export default ProductScreen
