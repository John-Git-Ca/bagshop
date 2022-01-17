import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsPinterest, BsTwitter} from 'react-icons/bs'
import {FaTumblr} from 'react-icons/fa'

const Footer = () => {

  return (
    <footer style={{backgroundColor:'#FBF7F0'}}>
      <Container className='px-5 pt-3' fluid>
        <Row className='py-2 font-weight-bold h4'>
          <Col>ABOUT US</Col>
          <Col>GET HELP</Col>
          <Col>POLICIES</Col>
          <Col>FOLLOW US</Col>
          <Col>BE IN THE KNOW</Col>
        </Row>
        <Row className='py-1'>
          <Col><Link className='text-dark' to='/'>Our Company</Link></Col>
          <Col><Link className='text-dark' to='/'>Help Center</Link></Col>
          <Col><Link className='text-dark' to='/'>Privacy Policy</Link></Col>
          <Col>
            <Link className='text-dark' to='/'  className='mr-2'>
              <BsFacebook size={20}/>
            </Link>
            <Link className='text-dark' to='/' className='mx-2'>
            <BsTwitter size={20}/>
            </Link>
            <Link className='text-dark' to='/' className='mx-2'>
            <BsPinterest size={20}/>
            </Link>
            <Link className='text-dark' to='/' className='mx-2'>
            <BsInstagram size={20}/>
            </Link>
            <Link className='text-dark' to='/' className='mx-2'>
              <FaTumblr size={20}/>
            </Link>

          </Col>
          <Col></Col>
        </Row>
        <Row className='py-1'>
          <Col><Link className='text-dark' to='/'>Affiliates</Link></Col>
          <Col><Link className='text-dark' to='/'>Inquires</Link></Col>
          <Col><Link className='text-dark' to='/'>Refund Policy</Link></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row className='py-1'>
          <Col><Link className='text-dark' to='/'>Careers</Link></Col>
          <Col><Link className='text-dark' to='/'>Cooperation</Link></Col>
          <Col><Link className='text-dark' to='/'>Shipping Policy</Link></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row className='border-bottom py-1 pb-3'>
          <Col><Link className='text-dark' to='/'>Email Us</Link></Col>
          <Col><Link className='text-dark' to='/'>Locate Us</Link></Col>
          <Col><Link className='text-dark' to='/'>Terms of Service</Link></Col>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col className='text-center py-3'> &copy; {new Date().getFullYear()}  USHOP</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
