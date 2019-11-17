import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
