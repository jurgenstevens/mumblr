import React from "react";
import styled from "styled-components";

// S64: Use rfce to set up the AddPost component. For S65 switch to App.js
// S67: Copy and paste the forms code from the Bootstrap website. Change class attribute to className, the for's to htmlFor and add slashes at the ends of inputs.
// S69: Add the h1 Create Post for the AddPost component and style it below using styled-components
const AddPost = () => {
  return (
    <AddPostContainer>
      <div className="container">
        <h1>Create A Post</h1>
        <form>
          <div className="form-group">
            <label htmlFor="authorname">Author</label>
            <input type="text" className="form-control" placeholder="Author" />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div class="form-group">
            <label htmlFor="post">Post</label>
            <textarea
              class="form-control"
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
