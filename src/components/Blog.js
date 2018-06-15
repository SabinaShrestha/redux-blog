import React from 'react'
import { connect } from 'react-redux'
import {deleteBlog} from '../reducers/blogs'
import {editBlog} from '../reducers/blogs'


const Blog = ({ id, title, body, dispatch}) => (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
      <button onClick={() => dispatch(deleteBlog(id))}>Delete</button>
      <button onClick={() => dispatch(editBlog(id))}>Edit</button>
    </div>
)

export default connect()(Blog)
