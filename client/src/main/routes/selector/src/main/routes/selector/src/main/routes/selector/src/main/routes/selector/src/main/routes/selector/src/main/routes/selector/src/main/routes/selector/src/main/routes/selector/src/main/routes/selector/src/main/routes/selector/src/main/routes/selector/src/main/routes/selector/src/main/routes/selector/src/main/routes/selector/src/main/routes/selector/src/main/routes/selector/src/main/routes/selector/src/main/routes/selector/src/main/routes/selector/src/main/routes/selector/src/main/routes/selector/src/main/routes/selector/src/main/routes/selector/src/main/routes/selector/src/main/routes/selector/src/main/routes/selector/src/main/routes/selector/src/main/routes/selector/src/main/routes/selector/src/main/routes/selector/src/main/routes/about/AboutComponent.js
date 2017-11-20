import React from "react";
import "./about.css";
import "./about-img.jpg";

function AboutComponent(){
    return(
        <div className="about-wrapper">
          <p> This app is a virtual flashcard collection
          for learning new language. User can:</p>
              <ul>
                  <li> Study preloaded  flashcards </li>
                  <li> Add new flashcard </li>
                  <li> Track their progress  </li>
              </ul>

          <img className="about-bg" src="./about-img.jpg" alt=""/>
          <p> The app is made by <i> Mak and Phat</i> using:  </p>
              <ul>
                  <li> User authentication by React token  </li>
                  <li> ReactJS on front-end for user interface and interaction  </li>
                  <li> NodeJS and Express for  Back-end with MongoDB for noSQL database manager</li>
              </ul>
              <div className="about-icos">
                
              </div>

        </div>
    )
}

export default AboutComponent;
