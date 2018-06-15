import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'


const BlogList = ({ blogs }) => (
  <div>
    {blogs.map((b) =>
      <Blog key={b.id} {...b} />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(BlogList)
