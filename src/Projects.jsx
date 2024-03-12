import React from "react";
import "./Project.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



const Projects = () => {

  
  const HLINKEDIN = () =>{
    window.open('https://linkedin-clone-40eed.web.app/','__blank');
  }
  const HPS = () =>{
    window.open('https://advinsuryavanshi-pencil-sketcher-pen-yspgl3.streamlit.app/','__blank');
  }
  const HMIS = () =>{
    window.open('https://mistoreadvinsuryavanshi.netlify.app/','__blank');
  }
  const HPPV = () =>{
    window.open('https://advinsuryavanshi-advinweb-newtr-u81lq6.streamlit.app/','__blank');
  }
  
  return (
    <div className="Project">
      <div className="Project1">
        <div className="project1L">
          <span className="titleP">.LINKEDIN CLONE</span> &#123;
          <br />
          <span className="proper">Name:</span>{" "}
          <span className="vl"> linkedIn Clone ;</span>
          <br />
          <span className="proper">Tools:</span>{" "}
          <span className="vl">
            React, Firebase, Firestore ; <br />
          </span>
          <span className="proper">Description:</span>{" "}
          <span className="vl">
            "A LinkedIn-inspired platform built from scratch using React,
            Firebase, and Firestore. <br /> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;Seamlessly integrating Firebase for authentication and
            Firestore for real-time database management, <br />
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;it provides a robust and
            scalable solution for the Application!";
            <br />
          </span>
          &#125;
        </div>
        <div className="project1R">
          <Button variant="contained" color="success" onClick={HLINKEDIN}>
          LINKEDIN CLONE lIVE APPLICATION
          </Button>
        </div>
      </div>
      <br />
      <br />
      <div className="Project1">
        <div className="project1L">
          <span className="titleP">.PENCIL SKETCHER</span> &#123;
          <br />
          <span className="proper">Name:</span>{" "}
          <span className="vl"> Pencil Sketcher ;</span>
          <br />
          <span className="proper">Tools:</span>{" "}
          <span className="vl">
            Python,Streamlit,Pillow, Open-CV ; <br />
          </span>
          <span className="proper">Description:</span>{" "}
          <span className="vl">
            " The project was made primarily by PYTHON to Create a pencil
            sketcher from the image <br /> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;uploaded by the user. The project uses Open-CV to transform
            the image and give a pencil sketch-like effect. <br />
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;The project was deployed using
            STREAMLIT SHARE.";
            <br />
          </span>
          &#125;
        </div>
        <div className="project1R">
          <Button variant="contained" color="success" onClick={HPS}>
           PENCIL SKETCHER lIVE Website
          </Button>
        </div>
      </div>
      <br />
      <br />
      <div className="Project1">
        <div className="project1L">
          <span className="titleP">.MI STORE WEBSITE</span> &#123;
          <br />
          <span className="proper">Name:</span>{" "}
          <span className="vl"> Mi Store Website ;</span>
          <br />
          <span className="proper">Tools:</span>{" "}
          <span className="vl">
            React.js, javascript; <br />
          </span>
          <span className="proper">Description:</span>{" "}
          <span className="vl">
            "Replica of the Mi Store website crafted with React and JavaScript."
            ;
            <br />
          </span>
          &#125;
        </div>
        <div className="project1R">
          <Button variant="contained" color="success" onClick={HMIS}>
          MI STORE lIVE WEBSITE
          </Button>
        </div>
      </div>
      <br />
      <br />
      <div className="Project1">
        <div className="project1L">
          <span className="titleP">.PERSONAL PORTFOLIO version 1</span> &#123;
          <br />
          <span className="proper">Name:</span>{" "}
          <span className="vl"> Personal Protfolio V1 ;</span>
          <br />
          <span className="proper">Tools:</span>{" "}
          <span className="vl">
            Python,Streamlit,Pillow, Streamlit-Lottie, Requests ; <br />
          </span>
          <span className="proper">Description:</span>{" "}
          <span className="vl">
            " It was made primarily by PYTHON. ● Animations on the website are
            done using Streamlit-Lottie. <br /> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp;It uses Lottie API to render animation
            as a JSON file.The project was deployed using
            STREAMLIT SHARE.";
            <br />
          </span>
          &#125;
        </div>
        <div className="project1R">
          <Button variant="contained" color="success" onClick={HPPV}>
          PORTFOLIO version 1 lIVE Website
          </Button>
        </div>
      </div>
      <br />
      <br />
      <h4>Other Live Applications:</h4>
      <div className="linkkaka">
      <Link to="https://advinsuryavanshi-letsmakeqr-letsmakeqr-e60ctk.streamlit.app/"><span className="titleP"> QR Creator , </span></Link>
      <Link to="https://advinsuryavanshi-diabetes-app-tudpgv.streamlit.app/"><span className="titleP"> Diabetes prediction using machine learning </span></Link>
      </div>
    </div>
  );
};

export default Projects;
