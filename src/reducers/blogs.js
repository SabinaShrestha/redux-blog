const ADD_BLOG = 'ADD_BLOG'

export const addBlog = (blog) => {
  return { type: ADD_BLOG, blog }
}

export default ( state = [], action ) => {
  switch(action.type){
    case ADD_BLOG:
      return [action.blog, ...state]
    default:
      return state
  }
}
