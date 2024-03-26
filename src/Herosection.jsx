import React, {useContext} from "react";
import "./Herosection.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import CableIcon from "@mui/icons-material/Cable";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import counterContext from './counterContext';



const Herosection = () => {

  const {ab, handle0,handle1 ,handle2 ,handle3} = useContext(counterContext)
  // const[ab,setAb]=useState(0);


  // const handle0 = ()=>{
  //   setAb(0);
  //   console.log(ab);
  //   d();
  // }
  // const handle1 = ()=>{
  //   setAb(1);
  //   console.log(ab);
  //   d();
  // }
  // const handle2 = ()=>{
  //   setAb(2);
  //   console.log(ab);
  //   d();
  // }
  // const handle3 = ()=>{
  //   setAb(3);
  //   console.log(ab);
  //   d();
  // }

  const d = ()=>{

    if(ab===0){
      return <AboutMe  />
    }
    if(ab===1){
      return <Projects />
    }
    if(ab===2){
      return <Skills  />
    }
    if(ab===3){
      return <ContactMe />
    }
  }

  return (
    <div className="Herosection">
      <div className="HSF">
        <div className="HSFL">
          <div className="HSFA" onClick={handle0}>
            <svg
              width="20px"
              height="20px"
              viewBox="-52.5 0 361 361"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
                fill="#E44D26"
              />
              <path
                d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
                fill="#F16529"
              />
              <path
                d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
                fill="#EBEBEB"
              />
              <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
              <path
                d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
                fill="#FFF"
              />
            </svg>
            <h5>AboutMe.html</h5>
          </div>
          <div className="HSFA" onClick={handle1}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
              <path
                d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
                fill="white"
              />
            </svg>
            <h5 >Project.css</h5>
          </div>
          <div className="HSFA" onClick={handle2}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="28" height="28" fill="#FFCA28" />
              <path
                d="M19 25.2879L21.0615 23.9237C21.2231 24.4313 22.2462 25.6368 23.5385 25.6368C24.8308 25.6368 25.4308 24.931 25.4308 24.463C25.4308 23.1878 24.1112 22.7382 23.4774 22.5223C23.374 22.4871 23.289 22.4581 23.2308 22.4328C23.2009 22.4198 23.1558 22.4025 23.0979 22.3804C22.393 22.1111 19.7923 21.1175 19.7923 18.2373C19.7923 15.065 22.8538 14.7002 23.5462 14.7002C23.9991 14.7002 26.1769 14.7557 27.2615 16.7939L25.2615 18.1898C24.8231 17.3015 24.0946 17.0081 23.6462 17.0081C22.5385 17.0081 22.3077 17.8201 22.3077 18.1898C22.3077 19.227 23.5112 19.6919 24.5273 20.0844C24.7932 20.1871 25.0462 20.2848 25.2615 20.3866C26.3692 20.91 28 21.7666 28 24.463C28 25.8136 26.8672 28.0002 24.0154 28.0002C20.1846 28.0002 19.1692 25.7003 19 25.2879Z"
                fill="#3E3E3E"
              />
              <path
                d="M9 25.5587L11.1487 24.1953C11.317 24.7026 11.9713 25.638 12.9205 25.638C13.8698 25.638 14.3557 24.663 14.3557 24.1953V15.0002H16.9982V24.1953C17.041 25.4636 16.3376 28.0002 13.2332 28.0002C10.379 28.0002 9.19242 26.3039 9 25.5587Z"
                fill="#3E3E3E"
              />
            </svg>
            <h5 >Skills.js</h5>
          </div>
          <div className="HSFA" onClick={handle3}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                fill="#53C1DE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                fill="#53C1DE"
              />
            </svg>
            <h5>ContactMe.jsx</h5>
          </div>
        </div>
        <div className="HSFR">
          <div className="HSFRR">
            <PlayArrowOutlinedIcon />
            <CableIcon />
            <SpaceDashboardOutlinedIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="HSS">
        <h5>Advin's Portfolio</h5>
        <ArrowForwardIosIcon fontSize="smaller" />
        <h5>Welcome To My World</h5>
      </div>
      <div className="horizontal-line"></div>
      <div className="HST">
        {d()}
      </div>
    <div className="horizontal-line"></div>
      <div className="HSBOTTOM">
        <div className="HSBOTTOMLEFT">
          <div className="HSBOTTOM1">
            <h6>PROBLEMS</h6>
          </div>
          <div className="HSBOTTOM1">
            <h6>OUTPUT</h6>
          </div>
          <div className="HSBOTTOM1">
            <h6>DEBUG CONSOLE</h6>
          </div>
          <div className="HSBOTTOM1">
            <h6>TERMINAL</h6>
          </div>
          <div className="HSBOTTOM1">
            <h6>PORTS</h6>
          </div>
        </div>
        <div className="HSBOTTOMRIGHT">
          <div className="HSBOTTOMRIGHT1">
            <div className="HSBOTTOM2">
              <AddOutlinedIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <KeyboardArrowDownIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <SpaceDashboardOutlinedIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <DeleteIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <MoreHorizIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <KeyboardArrowUpIcon fontSize="smaller" />
            </div>
            <div className="HSBOTTOM2">
              <CloseIcon fontSize="smaller" />
            </div>
          </div>
        </div>
      </div>
      <p id="para1">You can now view Advin Suryavanshi's Portfolio in the browser.<br/>let connect and work together</p>
      <div className="Contect">
        <div className="ContectL">
            <p>Local:<br/>On Your Network:</p>

        </div>
        <div className="ContectR">
        <p>http://localhost:<b>3000</b><br/>http://192.168.129.207:<b>3000</b></p>
        </div>
      </div>
      <p id="para2">Note that the development build is optimized.<br/>To create a production build, use<span id="bluehai"> npm run build</span></p>
      <p id="para3">webpack compiled <span id="greenhai">successfully</span></p>
    </div>
  );
};

export default Herosection;
