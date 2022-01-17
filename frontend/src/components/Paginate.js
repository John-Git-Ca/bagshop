import React, {useEffect} from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productAction'

const Paginate = ({pages, page}) => {

  const queryReducer = useSelector(state => state.queryReducer)
  const dispatch = useDispatch()

  const {keyword, pageNumber} = queryReducer

  const handleClick = (e) => {
    const value = e.target.getAttribute('value')
    dispatch({type: 'UPDATE_PAGENUMBER', payload: value})
  }
  useEffect(() => {
    console.log('pagenumber ' +pageNumber)
    dispatch(listProducts(keyword, pageNumber))
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pageNumber])

  return (
    pages > 1 && (
      <Pagination className='m-3 justify-content-center'>
        {[...Array(pages).keys()].map((x) => (
          // <LinkContainer
          //   to='/'
          //   key={x+1}
          // >
            <Pagination.Item 
              key={x + 1} 
              active={x + 1 === page}
              onClick={handleClick}
              value={x + 1}
            >
              {x + 1}
            </Pagination.Item>
          // </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
