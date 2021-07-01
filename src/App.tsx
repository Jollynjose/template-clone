import React from "react";
import Nav from "./Components/Navigation/Nav";
import "./App.css";
import SectionImg from "./Components/SectionImg";
import Information from "./Components/Information/Information";
import Footer from "./Components/Footer/Footer";
import Blogpost from "./Components/Blogpost";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <SectionImg />
        <Blogpost />
        <Information />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
