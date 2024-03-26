import React,  {useContext} from "react";
import "./Tophead.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import GridViewIcon from "@mui/icons-material/GridView";
import counterContext from './counterContext';

const Tophead = () => {
  const {handle0} = useContext(counterContext)
  return (
    <div className="header">
      <div className="headerleft">
        <div className="LHL" onClick={handle0}>
          <svg
            height="25"
            viewBox="-11.9 -2 1003.9 995.6"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
              fill="#2489ca"
            />
            <path
              d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
              fill="#1070b3"
            />
            <path
              d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
              fill="#0877b9"
            />
            <path
              d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
              fill="#3c99d4"
            />
          </svg>
        </div>
        <div className="LHR">
          <span className="title">File </span>

          <span className="title">Edit </span>

          <span className="title">Selection </span>

          <span className="title">View </span>

          <span className="title">Go </span>

          <span className="title">Run </span>

          <span className="title">Terminal </span>

          <span className="title">Help </span>
        </div>
      </div>
      <div className="centerheader">
        <ArrowBackIcon fontSize="smaller" />

        <ArrowForwardIcon fontSize="smaller" />
        <SearchIcon fontSize="smaller" />

        <input type="text" placeholder="Advin Portfolio" />
      </div>

      <div className="rightheader">
        <GridViewIcon fontSize="smaller" />
        <WebAssetOutlinedIcon fontSize="smaller" />
        <FilterNoneIcon fontSize="smaller" />
        <AutoAwesomeMosaicOutlinedIcon fontSize="smaller" />
        <HorizontalRuleIcon fontSize="smaller" />
        <CropSquareIcon fontSize="smaller" />
        <CloseIcon />
      </div>
    </div>
  );
};

export default Tophead;
