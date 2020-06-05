import React from "react";
// S51: Import styled from styled-components and style the posts component below
import styled from "styled-components";

// S35: Within app directory (In this case mumblr) npm install "axios" and "react-router-dom" in terminal

// S46: Now we will map through our {posts} to display them so add posts within the parenthesis to pass props.
const Posts = ({ posts }) => {
  return (
    // S47: In curly braces within the div, add posts and use the map method with the arrow function with post and key within the parameter of the arrow function
    // S48: Within the arrow function use your HTML tags and within curly braces, the javascript {post.title}
    // S49: Now that the post titles rendered, to render the post's post/article, you must wrap the title, post/article, and author within a div or else you'll get and error
    // S50: Now include post.authorname under the post/article to render OP's name
    <MainContainer>
      {posts.map((post, key) => (
        // S53: Add a bootstrap class of container to the div to narrow the margins of the posts.
        // S54: Add bootstrap class of badge badge-primary to change author name to a blue badge
        // S55: Create a div within the container under the posts with a class of row for two buttons to edit or delete a post.
        // S56: Use the anchor tag within the small column for an edit and delete button
        // S57: Now switch over to the Navbar component in layouts
        <div className="container">
          <h2>{post.title}</h2>
          <p>{post.post}</p>
          <span className="badge badge-primary">{post.authorname}</span>
          <div className="row my-3">
            <div className="col-sm-2">
              <a className="btn btn-outline-primary">Edit</a>
            </div>
            <div className="col-sm-2">
              <a className="btn btn-outline-danger">Delete</a>
            </div>
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default Posts;

// S52: Maincontainer styled below and wrap the post component within the Maincontainer tag
const MainContainer = styled.div`
  margin: 7rem 0;
`;
