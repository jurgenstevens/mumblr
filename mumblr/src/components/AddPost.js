import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// S64: Use rfce to set up the AddPost component. For S65 switch to App.js
// S67: Copy and paste the forms code from the Bootstrap website. Change class attribute to className, the for's to htmlFor and add slashes at the ends of inputs.
// S69: Add the h1 Create Post for the AddPost component and style it below using styled-components
// S70: To send the data that is entered in the front end to the database, you start off by using hooks. So import useState then use the hook above return for each data input i.e. title, post and authorname
// S71: Since the state doesn't change when you type something in, you must add the onChange attribute on each input field for each input type
// S72: In order to send data to the database, first, you must import axios, then in form, use encType attribute. For more info click here https://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean
// S73: Then add the onSubmit attribute and insert the function title for what will change when submit is clicked i.e. changeOnClick
// S77: Create a new components in the component folder called Post.js for Update and Delete functionality.
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [message, setMessage] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();
    // S74: Create the variable posts that will contain the state (i.e. title, post and authorname)
    const posts = {
      title,
      post,
      authorname,
    };
    // S76: To clear the fields, add the following:
    setTitle("");
    setPost("");
    setAuthorName("");

    // S75: The axios will send this data to the database with the post method and the promise
    axios
      .post("/posts/add", posts)
      .then((res) => setMessage(res.data))
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
          <span className="message">{message}</span>
          <br />
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
  .message{
    font-weight: 900;
    color: #2778e8;
    padding 3rem 3rem 3rem 1;
  }
`;
