import './App.css';
import React from 'react'
import Header from './components/Header'
import LinkForm from './components/LinkForm'
import Hero from './components/Hero'
import Info from './components/Info'
import Footer from './components/Footer'
import CallToAction from './components/CallToAction';

const  App = () => {

  return (
    <main className="App">
      <Header />
      <Hero/>
      <LinkForm />
      <Info />
      <CallToAction/>
      <Footer />
    </main>
  );
}

export default App;
