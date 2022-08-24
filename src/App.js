
import React from "react";
import {About , Brand, Contacts , CTA , Footer , Header , Menu , Navbar , Services} from './Components';
import './App.css'



function App() {
  
  return (
    <div className="App">
      <div className="gradient-background">
        < Navbar />
        < Header />
      </div>
      < Services />
      < About />
      < Menu />
      < CTA />
      < Contacts />
      < Footer />
    </div>
  );
}
// const isBackgroundRed = true;

// return (
//   <div
//     style={{
//       backgroundColor: isBackgroundRed ? 'red' : 'blue',

export default App;
