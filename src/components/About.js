import React from "react";
import Moodz from '../MoodzLogo.png';
import CyH from '../calgary_youth.png';
import Note from '../pexels-photo-3972441.png';
import Word from '../pexels-suzy-hazelwood-3656855_edited.png';
import './All.css';

class About extends React.Component {
  render() {
  return (
    <div className = "about">
      <div className = "container">
      <div className="row align-items-center mt-5">
        <div className="col-lg-5">
          <img
            src={Moodz}
            className="img-fluid rounded mb-4 mb-lg-0"
            alt="MoodzLogo"
          />
        </div>

        <div className="col-lg-7">
          <h1 >About</h1>
            <p>
              This web-app was created for the 2021 Calgary Youth Hackathon
              with the intention of helping mental
              health. It provides a place for people to track their feelings
              and tasks each day. This data is stored within a back-end
              database, allowing users to go back and see their previous
              entries. The days on the calendar are colour-coded based on all
              feelings recorded for that day, highlighting trends in negative
              or positive feelings. This can allow a person to be more aware
              of how they are feeling, with the added task list for the day
              providing motivation to actively do the things they previous
              planned for that day.
            </p>
            <p> Created by: Dustin Ward and Julie Wojtiw-Quo </p>
        </div>
      </div>
      <div className="imgDiv">
        <img
          src={CyH}
          alt="CYH"
          height= "150px"
          width= "150px"
        />
        <img
          src={Note}
          alt="Be Kind Note"
          height= "250px"
          width= "180px"
        />
        <img
          src={Word}
          alt="Anxiety"
          height= "150px"
          width= "400px"
        />
      </div>
      </div>
    </div>
  );}
}

export default About;
