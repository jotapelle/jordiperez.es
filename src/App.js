import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
