import React from "react";
import Nav from "./Components/Navigation/Nav";
import "./App.css";
import SectionImg from "./Components/Main/SectionImg";

import Footer from "./Components/Footer/Footer";
import Blogpost from "./Components/Main/Blogpost";
import Information from "./Components/Information/Information";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SectionImg />
      <main>
        <Blogpost />
        <Information/>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
