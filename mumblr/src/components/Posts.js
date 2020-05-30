import React from "react";
// S35: Within app directory (In this case mumblr) install "axios" and "react-router-dom" in terminal

// S46: Now we will map through our {posts} to display them so add posts within the parenthesis to pass props.
const Posts = ({ posts }) => {
  return (
    // S47: In curly braces within the div, add posts and use the map method with the arrow function with post and key within the parameter of the arrow function
    // S48: Within the arrow function use your HTML tags and within curly braces, the javascript {post.title}
    // S49: Now that the post titles rendered, to render the post's post/article, you must wrap the title, post/article, and author within a div or else you'll get and error
    <div>
      Hello from the Posts component!
      {posts.map((post, key) => (
        <div>
          <h2>{post.title}</h2>
          <p>{post.post}</p>
          <span>{post.authorname}</span>
        </div>
      ))}
    </div>
  );
};

export default Posts;
