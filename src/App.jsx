import Header from "./components/Header";
import Footer from "./components/Footer";
import React  from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
       
      <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"
      />
      <Footer />
    </div>
  );
}

export default App;
