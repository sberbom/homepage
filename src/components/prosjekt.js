import React from 'react';
import "../styles/prosjekt.css"

function Prosjekt(props) {
      return (
          <div className="prosjekt-container">
            <h2 className="prosjekt-tittel">{props.title}</h2>
            <p className="prosjekt-beskrivelse">{props.description}</p>
            <p className="button" onClick={()=> window.open(props.website, "_blank")}>Se prosjekt</p>
          </div>
      );
}

export default Prosjekt;