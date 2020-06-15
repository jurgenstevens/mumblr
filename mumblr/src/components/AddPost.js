import React, { useState } from "react";
import styled from "styled-components";

// S64: Use rfce to set up the AddPost component. For S65 switch to App.js
// S67: Copy and paste the forms code from the Bootstrap website. Change class attribute to className, the for's to htmlFor and add slashes at the ends of inputs.
// S69: Add the h1 Create Post for the AddPost component and style it below using styled-components
// S70: To send the data that is entered in the front end to the database, you start off by using hooks. So import useState then use the hook above return for each data input i.e. title, post and authorname
// S71: Since the state doesn't change when you type something in, you must add the onChange attribute on each input field for each input type
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [authorname, setAuthorName] = useState("");
  return (
    <AddPostContainer>
      <div className="container">
        <h1>Create A Post</h1>
        <form>
          <div className="form-group">
            <label htmlFor="authorname">Author</label>
            <input
              type="text"
              onChange={(e) => setAuthorName(e.target.value)}
              className="form-control"
              placeholder="Author"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea
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

export default AddPost;

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
