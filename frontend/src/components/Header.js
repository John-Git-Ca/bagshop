import React, {useState, useEffect} from 'react'
import {Navbar, Form, Col, Button} from 'react-bootstrap'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {LinkContainer} from 'react-router-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { useSelector,  useDispatch } from 'react-redux'
import { listProducts } from '../actions/productAction'
import { UPDATE_KEYWORD } from '../constants/productConstants'


const Header = () => {
  const dispatch = useDispatch()
  const [key, setKey] = useState('')

  const queryReducer = useSelector(state => state.queryReducer)

  const {keyword} = queryReducer

  const handleSearch =  () => {
    dispatch({type:UPDATE_KEYWORD, payload:key})
    setKey('')
  }
  
  const handleEnter = (e) => {
    if(e.key==='Enter'){
      handleSearch()
    }
  }
  
  useEffect(()=>{
    dispatch(listProducts(keyword, ''))
  }, [keyword])


  return (
    <Navbar className='border-bottom m-0' style={{backgroundColor:'#FBF7F0'}}>
      <Col sm={3} xs={3} className='text-center nav_brand' to='/'>
        <LinkContainer to='/'>
          <Navbar.Brand className='fs-1'>USHOP</Navbar.Brand>
        </LinkContainer>
      </Col>
      <Col sm={6} xs={6}>
        <Form.Control 
            style={{width:'30%'}} 
            className='d-inline m-1'
            placeholder='Search...'
            value={key}
            onChange={(e)=>setKey(e.target.value)}
            onKeyDown={handleEnter}
          />
        <BsSearch className='responsive_btn' size={20} onClick={handleSearch}/>
      </Col>
      <Col sm={1} xs={1} className='text-center responsive_btn'>
        <LinkContainer to='/signin'>
          <div>Sign In</div>
        </LinkContainer>
      </Col>
      <Col  sm={1} xs={1} className='text-center responsive_btn'>
        <LinkContainer to='signup'>
          <div>Sign Up</div>
        </LinkContainer>
      </Col>
      <Col  sm={1} xs={1} className='text-center responsive_btn'>
        <LinkContainer to='/cart'>
          <div>
            <HiOutlineShoppingBag size={30}/>
          </div>
        </LinkContainer>
      </Col>
    </Navbar>
  )
}

export default Header
