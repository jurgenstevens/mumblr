import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// S90: import useEffect for the axios get method and pass the props through the EditPost parameter.
// S92: Change the axios method from post to put()
// S93: For the axios PUT route, use backticks and the update route and find by id using ${props.match.params.id} like the GET route in useEffect below.
// S94: Add a hook: setMessage, then set it in the axios promise instead of a console.log of it posting successfully.
// S95: Include the message as a span w/ the className of message to add the ui in styled.div below.
// S96: In the span tags, include message in curly braces.
// S97: Next, switch over to Posts.js and create the useState hook for the DELETE functionality.
const EditPost = (props) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();
    const posts = {
      title,
      post,
      authorname,
    };
    setTitle("");
    setPost("");
    setAuthorName("");

    axios
      .put(`/posts/update/${props.match.params.id}`, posts)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  // S91: Below useEffect will autopopulate the fields with the data from the database for the specific post by id. Be sure to delete props in the array at the end.
  useEffect(() => {
    axios
      .get(`/posts/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setPost(res.data.post),
        setAuthorName(res.data.authorname),
      ])
      .catch((err) => console.log(err));
  }, []);

  return (
    <AddPostContainer>
      <div className="container">
        <h1>Edit Your Post</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Author</label>
            <input
              type="text"
              value={authorname}
              onChange={(e) => setAuthorName(e.target.value)}
              className="form-control"
              placeholder="Edit Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Edit Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="form-control"
              rows="2"
              placeholder="Edit post here"
            ></textarea>
          </div>
          <span className="message">{message}</span>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </AddPostContainer>
  );
};

export default EditPost;

const AddPostContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width 31.25rem;

  h1 {
    font-weight: 800;
    color: #2778e8;
  }

  .message{
    font-weight: 900;
    color: #2778e8;
    padding 3rem 3rem 3rem 1;
  }
`;
