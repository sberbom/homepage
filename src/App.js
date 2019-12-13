import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img className="profile-pic" alt="profile-pic" src="https://sberbom.s3.eu-north-1.amazonaws.com/_DSC0523+copy-3.jpg"/>
        <h1>SIGMUND BERBOM</h1>
        <h2>Student at NTNU</h2>
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
    </div>
  );
}

export default App;
