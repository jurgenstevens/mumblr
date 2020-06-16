import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
//S20: Clear all of the files you don't need then install
// Bootstrap by typing "npm i bootstrap" in the terminal
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Posts from "./components/Posts";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  // S40: Create your hooks before the return
  // S41: Below is setting your state with hooks with useState as an empty array
  const [posts, setPosts] = useState([]);
  // S42: useEffect is using hooks instead of "willMount/didMount" to render the data from the database
  // S43: With axios you get a request from the server/backend with the specified URL using a promise operation
  // S60: Change the axios.get from localhost:8000 to "/posts".
  // S61: Type in mumblr/package.json "proxy" : "http://localhost:8000" between "private" and "dependencies"
  // S62: Now to add a data buffering/loading spinner on the screen when loading, go to Posts.js
  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    // S44: To render your posts, change the route from components to render the Posts component with an arrow function
    // S45: In order to pass the props to the state, the posts(state) will pass the state within the Posts component/posts(component).
    // S46: Switch to Posts.js
    // S65: Now importing the AddPost component, create a route with the path add-post with the AddPost component as the component attribute. Jump to Navbar for S66.
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Posts posts={posts} />} />
      <Route
        exact
        path="/"
        render={(props) => <Post {...props} posts={posts} />}
      />
      <Route path="/add-post" component={AddPost} />
      <Footer />
    </div>
  );
}

export default App;

// S21: Under src folder create a components folder
// S22: Create layouts folder within components folder
// S23: Create the Header component within layouts folder and type snippet 'rafce' and then import it to App.js
// S24: Create the Navbar component within layouts folder and type snippet 'rafce' and then import it to App.js
// S27: Make sure Navbar is imported then write/insert it below the header.
// S30: Once Navbar is in place, create the Footer.js component in layouts.
// S34: Create Posts.js under Components directory and import it in App.js
// S36: To route to the Posts component we will import Router from react-router-dom in index.js
// S37: Then import Route from react-router-dom after import React
// S38: Created a Route tag under the Navbar that will make the Posts component as the main page i.e. "/"
// S39: Import Axios above and import {UseState, useEffects} hooks from "react"
