import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import blogs from '../reducers/blogs'


const Blog = ({ id, title, body }) => (
  <Fragment>
    <li>
      {title}
      {' '}
      {body}
    </li>
  </Fragment>
)

export default connect()(Blog)
