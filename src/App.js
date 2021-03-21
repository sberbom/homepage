import React from 'react';
import './App.css';
import Prosjekt from './components/prosjekt';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('225627253');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="App">
      <header>
        <img className="profile-pic" alt="profile-pic" src="https://firebasestorage.googleapis.com/v0/b/sberbom.appspot.com/o/1602795572358.jfif?alt=media&token=afe1eaf3-a295-4b02-b292-2db8a93c037a"/>
        <h1>SIGMUND BERBOM</h1>
        <h2>Student på NTNU</h2>
        <a href="https://www.linkedin.com/in/sigmund-berbom-80b279158/" target="_blank">
          <i className="fab fa-linkedin icon"></i>
        </a>
        <a href="https://github.com/sberbom" target="_blank">
          <i className="fab fa-github-square icon"></i>
        </a>
        <a href="mailto:sberbom@gmail.com">
          <i className="fas fa-envelope-square icon"></i>
        </a>
      </header>
      <Prosjekt 
        title="Windsurf Norge"
        description="Windsurf Norge skal bli et nettsted for å dele informasjon om steder og windsurfe 
        i Norge. Brukere skal kunne legge til spots, kommentere og rate. Nettstedet er under utvikling."
        website="https://windsurfnorge.web.app/"
        github="https://github.com/sberbom/windsurf-norge"/>
      <Prosjekt
        title="ENT3R-TRD for ENT3R Trondheim"
        description="I forbindelse med utbruddet av COVID-19 trengte ENT3R Trondheim en nettside der 
        de enkelt kunne få ut informasjon til sine elever. Nettsiden innholder informasjon elevene trenger
        for å bruke de digitale klasserommene til ENT3R"
        website="http://ent3r-trd.no"
        github="https://github.com/sberbom/insposide"/>
      <Prosjekt 
        title="Elevkveld for ENT3R Trondheim"
        description="elevkveld.no er et nettsted brukt av ENT3R Trondheim for å 
        promotere elevkveldene de arrangerer. På nettsiden får elevene informasjon om hva de skal gjøre på 
        elevkvelden og hvilke foredragsholdere som kommer på besøk."
        website="https://ent3r-trd.firebaseapp.com/"
        github="https://github.com/sberbom/elevkveld_react"/>
      <Prosjekt 
        title="Facerecognitionbrain"
        description="Facerecognitionbrain er en applikasjon laget for å lære webutvikling og react. 
        I applikasjonen kan brukeren legge til et bilde og programmet vil finne eventuelle ansikt i bilde"
        github="https://github.com/sberbom/facerecognitionbrain"/>
      <div className="blank"></div>
    </div>
  );
}

export default App;
