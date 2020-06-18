import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import spinner from "../spinner.gif";
// S78: We're going to import useState to Update and useEffect to render what the post has been updated to. Axios will be used to communicate with the database.
// S79: Set up the useState hook for each data input type then set up the axios with the useEffect hook to GET a specific post from the database.
// S80: Be sure you import this component in App.js and make sure it is being rendered
// S81: Axios will GET the posts by id through the props of the specific post. THEN( you set the title, post and authorname )
// S82: In App.js set the "to" attribute to the component link for the GET/READ part of the site which will be "/post/:id" to read specific posts.
// S84: Add a conditional before the h2 in main container to render the loading gif, if the data doesn't render/show. So import the gif.
// S85: Now add a button at the bottom of the component to return to the main page.
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
    <MainContainer>
      {!title || !post || !authorname ? (
        <img src={spinner} alt="loading" />
      ) : (
        <div>
          <h2>{title}</h2>
          <p>{post}</p>
          <p>{authorname}</p>
          <br />
          <Link to="/" type="submit" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      )}
    </MainContainer>
  );
};

export default Post;

// S83: Style this specific component below..
const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h2 {
    text-align: center;
    font-weight: 900;
    color: #2778e8;
  }

  img {
    width: 10rem;
    display: block;
    margin: 0 auto;
  }
`;
