import React from 'react'
import {Form } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const SearchBox = () => {
  return (
    <>
      <Form.Control 
          style={{width:'30%'}} 
          className='d-inline m-1'
          placeholder='Search...'
        />
      <BsSearch className='nav_btn' size={20}/>
    </>
  )
}

export default SearchBox
