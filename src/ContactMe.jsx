import React from "react";
import "./Contactme.css";
import ln from "./linkedin-svgrepo-com.svg";
import gh from "./github-svgrepo-com.svg";
import ig from "./instagram-svgrepo-com.svg";
import yt from "./youtube-svgrepo-com.svg";
import wp from "./whatsapp-svgrepo-com.svg";
import xxx from "./x-symbol-svgrepo-com.svg";

const ContactMe = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "739f45d7-7c7e-4ba3-a031-ddcb7e92cb0d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const HLN = () =>{
    window.open('https://www.linkedin.com/in/advin-suryavanshi-26563a177/','__blank');
  }
  const HGH = () =>{
    window.open('https://github.com/advinsuryavanshi','__blank');
  }
  const HXXX = () =>{
    window.open('https://twitter.com/advin600','__blank');
  }
  const HIG = () =>{
    window.open('https://www.instagram.com/advin_suryavanshi06/','__blank');
  }
  const HYT = () =>{
    window.open('https://www.youtube.com/channel/UCrOcP5_i6jtONMOFE7MLy-w','__blank');
  }
  const HWP = () =>{
    window.open('https://wa.me/919149223203','__blank');
  }
  
  

  return (
    <div className="formmain">
      <div className="formLeft">
        <div className="formleft1">
          <img src={ln} alt="linkedin" onClick={HLN}/>
          <br />
          <img src={ig} alt="Instagram" onClick={HIG}/>
        </div>
        <div className="formleft1">
          <img src={gh} alt="Github" onClick={HGH}/>
          <br />
          <img src={yt} alt="Youtube" onClick={HYT}/>
        </div>
        <div className="formleft1">
          <img src={xxx} alt="twitter" onClick={HXXX}/>
          <br />
          <img src={wp} alt="whatsapp" onClick={HWP}/>
        </div>
      </div>

      <div className="cmid">
        <h3><i>" it's  <br />always <br />good <br />
        to <br />connect<br /> with a <br />
        unknown <br />friend "</i></h3>
        {/* <br />
        <br />
        <br />
        <br />
        <br /><br />
        <h3><i>" Every known friend <br />
        was once a <br />
        Stranger "</i></h3> */}
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h2>
            <u>Get in touch</u>
          </h2>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Mail</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactMe;
