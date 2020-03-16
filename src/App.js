import React from 'react';
import './App.css';
import Prosjekt from './components/prosjekt';

function App() {
  return (
    <div className="App">
      <header>
        <img className="profile-pic" alt="profile-pic" src="https://sberbom.s3.eu-north-1.amazonaws.com/_DSC0523+copy-3.jpg"/>
        <h1>SIGMUND BERBOM</h1>
        <h2>Student på NTNU</h2>
        <a href="https://www.linkedin.com/in/sigmund-berbom-80b279158/">
          <i className="fab fa-linkedin icon"></i>
        </a>
        <a href="https://github.com/sberbom">
          <i className="fab fa-github-square icon"></i>
        </a>
        <a href="mailto:sberbom@gmail.com">
          <i className="fas fa-envelope-square icon"></i>
        </a>
      </header>
      <Prosjekt 
        title="Elevkveld for ENT3R Trondheim"
        description="elevkveld.no er et nettsted brukt av ENT3R Trondheim for å 
        promotere elevkveldene de arrangerer. På nettsiden får elevene informasjon om hva de skal gjøre på 
        elevkvelden og hvilke foredragsholdere som kommer på besøk."
        website="http://elevkveld.no"/>
      <Prosjekt 
        title="ENT3R-TRD for ENT3R Trondheim"
        description="I forbindelse med utbruddet av COVID-19 trengte ENT3R Trondheim en nettside der 
        de enkelt kunne få ut informasjon til sine elever. Nettsiden innholder informasjon elevene trenger
        får å bruke de digitale klasserommene til ENT3R"
        website="http://ent3r-trd.no"/>
      <div className="blank"></div>
    </div>
  );
}

export default App;
