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
        <h2>Student at NTNU</h2>
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
        description="Windsurf Norge is a web application for sharing information about windsurfing spots in Norway. 
        Users can add windsurfing spots, comment on spots, and rate spots. 
        The web application is under continuous development."
        website="https://windsurfnorge.no/"
        github="https://github.com/sberbom/windsurf-norge"/>
      <Prosjekt
        title="ENT3R-TRD for ENT3R Trondheim"
        description="During the Covid pandemic, ENT3R Trondheim needed a webpage for sharing information with its students. 
        The webpage has information on how to use ENT3Rs digital classroom and information on STEM studies at NTNU. 
        The webpage is no longer in use."
        website="http://insposide.web.app"
        github="https://github.com/sberbom/insposide"/>
      <Prosjekt 
        title="Elevkveld for ENT3R Trondheim"
        description="During the Covid pandemic, ENT3R Trondheim needed a webpage for sharing information about big events with its students. 
        Students get information about current and past events with ENT3R Trondheim on the web page. 
        The application is no longer in use."
        website="https://ent3r-trd.firebaseapp.com/"
        github="https://github.com/sberbom/elevkveld_react"/>
      <Prosjekt 
        title="Facerecognitionbrain"
        description="Facerecognitionbrain is an application made to learn about web development with react. 
        A user can upload a picture in the application, and the program will find and mark faces within the image."
        github="https://github.com/sberbom/facerecognitionbrain"/>
      <div className="blank"></div>
    </div>
  );
}

export default App;
