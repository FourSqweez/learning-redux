const initState = {
  posts: [
    { id: 1, title: 'post one', content: 'this is post one' },
    { id: 2, title: 'post two', content: 'this is post two' },
    { id: 3, title: 'post three', content: 'this is post three' },
  ],
}
const postReducer = (state = initState, action) => {
  switch (action.type) {
    //delete post
    case 'DELETE_POST':
      const newPost = state.posts.filter((post) => post.id !== action.id)
      return {
        posts: newPost,
      }
    default:
      return state
  }
}

export default postReducer
