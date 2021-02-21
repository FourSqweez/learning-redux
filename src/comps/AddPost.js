import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/postAction'
import { v4 as uuidv4 } from 'uuid'

export const AddPost = () => {
  const initPost = { id: '', title: '', content: '' }
  const [post, setPost] = useState(initPost)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost(post))
    setPost({ id: uuidv4(), title: '', content: '' })
  }

  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <h5 className="blue-text center-align">FourBlog</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input
            value={post.title}
            onChange={handleChange}
            type="text"
            name="title"
          />
        </div>
        <div className="input-field">
          <label htmlFor="post_content">Content</label>
          <textarea
            value={post.content}
            onChange={handleChange}
            name="content"
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  )
}
