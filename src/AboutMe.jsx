import React from "react";
import "./Aboutme.css";
import Button from "@mui/material/Button";
import mypdf from './AdvinSuryavanashiResume.pdf'


const AboutMe = () => {
  return (
    <div className="Aboutme">
      <div className="AboutmeL">
        &lt;
        <span className="gr">&nbsp;!DOCTYPE html&nbsp;</span>
        &gt;
        <br />
        &lt;
        <span className="R">&nbsp;html lang&nbsp;</span>=
        <span className="gree">&nbsp;"en"&nbsp;</span>
        &gt;
        <br />
        &nbsp; &nbsp; &lt;
        <span className="R">&nbsp; head &nbsp;</span>
        &gt;
        <br />
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &lt;
        <span className="R">&nbsp; meta charset&nbsp;</span>=
        <span className="gree">&nbsp;"UTF-8"&nbsp;</span>
        &gt;
        <br />
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &lt;&nbsp;
        <span className="R">title</span>&nbsp;&gt;&nbsp;
        <span className="ye">ADVIN SURYAVANSHI PORTFOLIO</span>&nbsp;&lt;&nbsp;
        <span className="R">/title</span>&nbsp;&gt;
        <br />
        &nbsp; &nbsp; &lt;&nbsp;<span className="R">/head</span>&nbsp;&gt;
        <br />
        &nbsp; &nbsp; &lt;&nbsp;<span className="R">body</span>&nbsp;&gt;
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &lt;&nbsp;
        <span className="R">p</span>&nbsp;&gt;<p id="sasa">Howdy! 🤠 I'm <span className="ye">ADVIN SURYAVANSHI </span>, a
        coding ninja in the making over at{" "}
        <span className="ye">
          Sir Chhota Ram Institute of Information and Technology
        </span>
        . When I'm not cracking the code, you'll catch me kicking
        <span className="ye"> FOOTBALL</span>, or making
        the <span className="ye"> TABLE TENNIS </span> ball regret its life choices! 🏓⚽🏏 And hey, if you
        need someone to debug your day with his <span className="ye"> POETRY </span>  or add some humor to your algorithms, I'm
        your go-to guy! Let's keep the code clean and the jokes even cleaner!
        🤖💻🤣</p>
        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &lt;&nbsp;
        <span className="R">/p</span>&nbsp;&gt;
        <br />
        &nbsp; &nbsp; &lt;&nbsp;<span className="R">/body</span>&nbsp;&gt;
        <br />
        &lt;&nbsp;<span className="R">/html</span>&nbsp;&gt;
      </div>
      <br />
      <div className="AboutmeR">
        <Button variant="contained" color="success">
          <a href={mypdf} download="AdvinSuryavanshiResume.pdf">
          Download <br />
          My Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
