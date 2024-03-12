import React from 'react';
import './VerticleRow.css'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MediationIcon from '@mui/icons-material/Mediation';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const VerticleRow = () => {
  return (
    <div className='VR'>
        <div className="VRT">

            <FileCopyOutlinedIcon  />
            <SearchSharpIcon />
            <MediationIcon />
            <PlayArrowOutlinedIcon />
            <WidgetsOutlinedIcon />
        </div>
        
        <div className="VRB">
            <AccountCircleOutlinedIcon />
            <SettingsOutlinedIcon />

        </div>

    </div>
  )
}

export default VerticleRow