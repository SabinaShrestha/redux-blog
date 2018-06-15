import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../reducers/blogs';

class BlogForm extends React.Component {
  state = { title: '', body: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger
    const { dispatch, id } = this.props
    const { title, body } = this.state 
    const blog = {title, id, body}
    dispatch(addBlog(blog))
    this.setState({ title: '', body: '' })
  }

  handleChange = (e) => {
    const { target: {name, value} } = e
    this.setState({ [name]: value })
  }

  render(){
    const { title, body } = this.state
    return (
      <div>
        <h3>Add A Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
            require
          />
          <input
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
            require
          />
          <button>Post</button>
        </form>
      </div>
    )
  }
}



export default connect()(BlogForm)
