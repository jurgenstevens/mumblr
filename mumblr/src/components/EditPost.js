import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const EditPost = () => {
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
      .post("/posts/add", posts)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddPostContainer>
      <div className="container">
        <h1>Create A Post</h1>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Author</label>
            <input
              type="text"
              value={authorname}
              onChange={(e) => setAuthorName(e.target.value)}
              className="form-control"
              placeholder="Author"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              className="form-control"
              rows="2"
              placeholder="Write post here"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </AddPostContainer>
  );
};

export default EditPost;

// S68: Import styled components after importing react and continue styling the AddPost component below
// main container styling
const AddPostContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width 31.25rem;

  h1 {
    font-weight: 800;
    color: #2778e8;
  }
`;
