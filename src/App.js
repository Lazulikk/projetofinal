import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature'
import About from './components/About';
import Presentation from './components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Contact from './components/Contact';
import Space from './components/Space';


function App() {
  return (
    <div className="App">
      <section id='home1-1'> 
      <Header/>
      </section>
      <section id='mais'> 
      <Feature/>
      </section>
      <div className='sapece02'> </div>
      <section id='destaq'>
     <Space/>
      <Presentation/>
  
      </section>
      
      <section id='inscrit'> 
      <About  className='hover-about' image={aboutimage} title= 'Faça sua inscrição!' button='Se inscreva para o evento'/> 
      </section>
      <section id='conta'> 
      <Contact/>
      </section>
      <div className='name'>
        <div className='name-box'> 
        <h1> Prepare-se para o 
          <span> maior evento de tecnologia de Anápolis </span>
        </h1>
        <p className='details'>Site ficticio - feito para apresentação FTT</p>
        </div>
      </div>
    </div>
  );
}

export default App;
