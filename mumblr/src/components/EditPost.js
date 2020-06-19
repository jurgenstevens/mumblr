import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// S90: import useEffect for the axios get method and pass the props through the EditPost parameter.

const EditPost = (props) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [authorname, setAuthorName] = useState("");

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
      .post("/posts/update", posts)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  // S91: Below useEffect will autopopulate the fields with the data from the database for the specific post.
  useEffect(() => {
    axios
      .get(`/posts/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setPost(res.data.post),
        setAuthorName(res.data.authorname),
      ])
      .catch((err) => console.log(err));
  }, [props]);

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
          <button type="submit" className="btn btn-primary">
            Change
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
`;
