import React, { Component } from 'react'

class AddPost extends Component {
  state = {
    post: {
      id: 4,
      title: '',
      content: '',
    },
  }

  handleChange = (e) => {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: e.target.value,
      },
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.post)
    this.setState({
      post: {
        title: '',
        content: ''
      },
    })
  }

  render() {
    return (
      <div className="container" style={{ margin: '4rem auto' }}>
        <h5 className="blue-text center-align">FourBlog</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="post_title">Title</label>
            <input
              value={this.state.post.title}
              onChange={this.handleChange}
              type="text"
              name="title"
            />
          </div>
          <div className="input-field">
            <label htmlFor="post_content">Content</label>
            <textarea
              value={this.state.post.content}
              onChange={this.handleChange}
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
}

export default AddPost
