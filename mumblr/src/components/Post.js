import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// S78: We're going to import useState to Update and useEffect to render what the post has been updated to. Axios will be used to communicate with the database.

const Post = () => {
  return (
    <div>
      <h1>Hello from the post component!</h1>
    </div>
  );
};

export default Post;
