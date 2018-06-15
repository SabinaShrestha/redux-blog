import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../reducers/blogs';
import {incId} from '../reducers/nextId';

class BlogForm extends React.Component {
  state = { title: '', body: '', id: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id} = this.props
    const { title, body} = this.state
    const blog = {title, body, id}
    dispatch(addBlog(blog))
    dispatch(incId())
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
          <input name="title" value={title} onChange={this.handleChange} placeholder="Title" require />
          <input name="body" value={body} onChange={this.handleChange} require placeholder="Body" />
          <button>Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {id: state.nextId}
}



export default connect(mapStateToProps)(BlogForm)
