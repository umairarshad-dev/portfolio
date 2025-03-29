import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar"; 
import Home from "./Components/Home.jsx"; 
import CreativeWork from "./Components/CreativeWork.jsx"; 
import MyJourney  from "./Components/MyJourney.jsx"; 
import Skills  from "./Components/Skills.jsx"; 
import Projects  from "./Components/Projects.jsx"; 
import Services  from "./Components/Services.jsx"; 
import Contact  from "./Components/Contact.jsx"; 
import Footer  from "./Components/Footer.jsx"; 






function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Home /> 
      <CreativeWork/> 
      <MyJourney /> 
      <Skills/> 
      <Projects/> 
      <Services/> 
      <Contact/> 
      <Footer/> 

    </div>
  );
}

export default App;
