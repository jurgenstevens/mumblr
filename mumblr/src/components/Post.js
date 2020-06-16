import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import axios from "axios";
// S78: We're going to import useState to Update and useEffect to render what the post has been updated to. Axios will be used to communicate with the database.
// S79: Set up the useState hook for each data input type then set up the axios with the useEffect hook to GET a specific post from the database.
// S80: Be sure you import this component in App.js and make sure it is being rendered
// S81: Axios will GET the posts by id through the props of the specific post. THEN( you set the title, post and authorname )
// S82:
const Post = (props) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [authorname, setAuthorname] = useState("");

  useEffect(() => {
    axios
      .get(`/posts/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setPost(res.data.post),
        setAuthorname(res.data.authorname),
      ])
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{post}</p>
      <p>{authorname}</p>
    </div>
  );
};

export default Post;
