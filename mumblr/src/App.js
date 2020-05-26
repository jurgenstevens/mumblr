import React from "react";
import "./App.css";
//S20: Clear all of the files you don't need then install
// Bootstrap by typing "npm i bootstrap" in the terminal
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
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
