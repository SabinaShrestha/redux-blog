import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {deleteBlog} from '../reducers/blogs'


const Blog = ({ id, title, body, dispatch}) => (
  <Fragment>
    <li>
      {title}
      {' '}
      {body}
      {' '}
      <button onClick={() => dispatch(deleteBlog(id))}>Delete</button>
      {' '}
      <button>Edit</button>
    </li>
  </Fragment>
)

export default connect()(Blog)
