import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import {NavLink} from 'react-router-dom'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Service
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.
            <ul>
              <li>  <NavLink to="/doctor1">Doctor Click Away</NavLink> </li>
              <li>  <NavLink to="/elearning1">E-Learning</NavLink> </li>
              <li>TECHACRM(CUSTOMER RELATIONSHIP MANAGEMENT)APPLICATION

</li>
<li>GROCERY</li>
<li>MATRIMONY</li>
<li>Alumini</li>
<li>Platform</li>
<li>SchoolDnt</li>
             
            </ul>
            
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}