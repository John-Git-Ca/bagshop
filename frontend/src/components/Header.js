import React from 'react'
import {Navbar, Form, Col, Button} from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {LinkContainer} from 'react-router-bootstrap'
import SearchBox from './SearchBox'

const Header = () => {
  return (
    <Navbar className='border-bottom m-2'>
      <Col sm={3} xs={3} className='text-center nav_brand' to='/'>
        <LinkContainer to='/'>
          <Navbar.Brand className='fs-1'>USHOP</Navbar.Brand>
        </LinkContainer>
      </Col>
      <Col sm={6} xs={6}>
        <SearchBox />
      </Col>
      <Col sm={1} xs={1} className='text-center nav_btn'>
        <LinkContainer to='/signin'>
          <Button variant='light'>Sign In</Button>
        </LinkContainer>
      </Col>
      <Col  sm={1} xs={1} className='text-center nav_btn'>
        <LinkContainer to='signup'>
          <Button variant='light'>Sign Up</Button>
        </LinkContainer>
      </Col>
      <Col  sm={1} xs={1} className='text-center nav_btn'>
        <LinkContainer to='/cart'>
          <Button variant='light'>
            <HiOutlineShoppingBag size={30}/>
          </Button>
        </LinkContainer>
      </Col>
    </Navbar>
  )
}

export default Header
