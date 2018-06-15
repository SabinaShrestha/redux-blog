const ADD_BLOG = 'ADD_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'
const EDIT_BLOG = 'EDIT_BLOG'

export const addBlog = (blog) => {
  return { type: ADD_BLOG, blog }
}

export const editBlog = (id) => {
  return { type: EDIT_BLOG, id }
}

export const deleteBlog = (id) => {
  return { type: DELETE_BLOG, id}
}

export default ( state = [], action ) => {
  switch(action.type){
    case ADD_BLOG:
      return [action.blog, ...state]
    case EDIT_BLOG:
      return [action.blog, ...state]
    case DELETE_BLOG:
      return state.filter( b => b.id !== action.id )
    default:
      return state
  }
}
