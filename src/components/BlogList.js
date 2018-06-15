import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'


const BlogList = ({ blogs, blogsCount}) => (
  <div>
    <h3>Total Blogs: {blogsCount}</h3>
    <ul>
      {blogs.map((b) =>
        <Blog key={b.id} {...b} />
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  const { blogs } = state
  return {
    blogs,
    blogsCount: blogs.length
  }
}

export default connect(mapStateToProps)(BlogList)
